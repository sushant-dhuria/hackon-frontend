import weaviate
import pandas as pd
import json
#setting up client
client = weaviate.Client("http://localhost:8080")

def generate_or_string(path,values):
    where_operands = []
    for value in values:
        where_operands.append(
            {
                'path':path,
                "operator": "Equal",
                "valueString": value.lower(),
            }
        )
    if len(where_operands)==0:
        where_filter={}
    elif len(where_operands)==1:
        where_filter=where_operands[0]
    else:
        where_filter= {
        "operator": "Or",
        "operands":where_operands
        }
    return where_filter
def generate_or_text(path,values):
    where_operands = []
    for value in values:
        where_operands.append(
            {
                'path':path,
                "operator": "Like",
                "valueText": "*"+value.lower()+"*",
            }
        )
    if len(where_operands)==0:
        where_filter={}
    elif len(where_operands)==1:
        where_filter=where_operands[0]
    else:
        where_filter= {
        "operator": "Or",
        "operands":where_operands
        }
    return where_filter

def fetch_results(resp):
    where_operands = []
    if resp["date_published"]["greater_than"]!='':
        where_operands.append({
            "path": ["date_published"],
            "operator": "GreaterThan",
            "valueDate": resp["date_published"]["greater_than"],
        })
    if resp["date_published"]["less_than"]!='':
        where_operands.append({
            "path": ["date_published"],
            "operator": "LessThan",
            "valueDate": resp["date_published"]["less_than"],
        })
    if resp["duration"]["greater_than"]!='':
        where_operands.append({
            "path": ["duration"],
            "operator": "GreaterThan",
            "valueNumber": resp["duration"]["greater_than"],
        })
    if resp["duration"]["less_than"]!='':
        where_operands.append({
            "path": ["duration"],
            "operator": "LessThan",
            "valueNumber": resp["duration"]["less_than"],
        })
    if resp["RatingValue"]["greater_than"]!='':
        where_operands.append({
            "path": ["rating_value"],
            "operator": "GreaterThan",
            "valueNumber": resp["RatingValue"]["greater_than"],
        })
    if resp["RatingValue"]["less_than"]!='':
        where_operands.append({
            "path": ["rating_value"],
            "operator": "LessThan",
            "valueNumber": resp["RatingValue"]["less_than"],
        })
    if resp["Genres"]!=[]:
        where_operands.append(generate_or_text('genres',resp['Genres']))
    if resp["Director"]!=[]:
        where_operands.append(generate_or_string('director',resp['Director']))
    if resp["keywords"]!=[]:
        where_operands.append(generate_or_text('keywords',resp["keywords"]))
    if len(where_operands)==0:
        where_filter={}
    elif len(where_operands)==1:
        where_filter=where_operands[0]
    else:
        where_filter= {
        "operator": "Or",
        "operands":where_operands
        }
    print(where_filter)
    response = (
        client.query
        .get("Movies", ["title","description","poster_link","actors","duration","date_published","director"])
        .with_near_text({
            "concepts": resp["chat_summary"]
        })
        .with_where(where_filter)
        .with_additional(["distance"])
        .do()
    )
    print(response)
    return response['data']['Get']['Movies']