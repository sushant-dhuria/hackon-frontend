#importing required libraries
import weaviate
import pandas as pd
import math
#setting up client
client = weaviate.Client("http://localhost:8080",
                        #  additional_headers={"X-OpenAI-Api-Key": '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'}
                         )

#Checking if Movies schema already exists, then delete it
current_schemas = client.schema.get()['classes']
for schema in current_schemas:
    if schema['class']=='Movies':
        client.schema.delete_class('Movies')

#creating the schema
movie_class_schema = {
    "class": "Movies",
    "description": "A collection of movies with title, description, director, actors, rating, etc.",
    # "vectorizer": "text2vec-openai",
    "properties": [
        {
            "name": "Poster_Link",
            "dataType": ["string"],
            "description": "The poster of the movie", 
        },
        {
            "name": "Series_Title",
            "dataType": ["string"],
            "description": "title of the movie", 
        },        
        {
            "name": "Released_Year",
            "dataType": ["number"],
            "description": "Released Year of the movie", 
        },
        {
            "name": "Certificate",
            "dataType": ["string"],
            "description": "Certificate of the movie", 
        },
        {
            "name": "Runtime",
            "dataType": ["number"],
            "description": "Runtime of the movie in mins", 
        },
        {
            "name": "Genre",
            "dataType": ["string"],
            "description": "The Genre of the movie", 
        },
        {
            "name": "actors",
            "dataType": ["string"],
            "description": "The actors of the movie", 
        },
        {
            "name": "Director",
            "dataType": ["string"],
            "description": "Director of the movie", 
        },
        {
            "name": "Overview",
            "dataType": ["string"],
            "description": "overview of the movie", 
        },
        {
            "name": "IMDB_Rating",
            "dataType": ["number"],
            "description": "IMDB Rating of the movie", 
        },
        {
            "name": "Gross_In_Millions",
            "dataType": ["number"],
            "description": "Gross value of the movie in millions", 
        },
        {
            "name": "No_of_Votes",
            "dataType": ["number"],
            "description": "No of Votes of the movie", 
        }
    ]
}
client.schema.create_class(movie_class_schema)

#Configure batch process - for faster imports 
#see: https://weaviate.io/developers/weaviate/current/restful-api-references/batch.html
client.batch.configure(
  batch_size=20, 
  # dynamically update the `batch_size` based on import speed
  dynamic=True,
  timeout_retries=5,
)

#Change the path to the place where data csv file is present
data=pd.read_csv("imdb_top_1000.csv")
data = data.fillna('')
#Adding the data
#You can decrease number of objects to be inserted to decrease the amount of time required
for i in range (0,len(data)):
    item = data.iloc[i]
    gross_amnt = item['Gross']
    if type(gross_amnt)==str:
        if gross_amnt!='':
            gross_amnt = float(item['Gross'].replace(',',''))/1000000
    elif type(gross_amnt)==float:
        gross_amnt = item['Gross']/1000000
    movie_object = {
        'poster_Link':str(item['Poster_Link']),
        'series_Title':str(item['Series_Title']).lower(),
        'released_Year': float(item['Released_Year']),
        'certificate': str(item['Certificate']),
        'runtime':float(item['Runtime'][:-4]),
        'iMDB_Rating': float(item['IMDB_Rating']),
        'overview': str(item['Overview']),
        'director':str(item['Director']),
        'actors': str(item['Star1'] +' '+item['Star2']+ ' '+item['Star3']+ ' '+item['Star4']),
        'no_of_Votes': float(item['No_of_Votes']),
    }

    try:
        client.batch.add_data_object(movie_object, "Movies")
    except BaseException as error:
        print("Import Failed at: ",i)
        print(gross_amnt)
        print("An exception occurred: {}".format(error))
        # Stop the import on error
        break

    print("Status: ", str(i)+"/"+str(len(data)))

client.batch.flush()