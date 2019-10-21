const graphql= require('graphql');
const all_movies = require('../api/all_movies')
const movie_details = require('../api/movie_details')
const {GraphQLObjectType,GraphQLString,GraphQLSchema,GraphQLList}=graphql;


const MovieType = new GraphQLObjectType({
name:'movie',
fields:()=>({
    id:{type:GraphQLString},
    title:{type:GraphQLString},
   image_url:{type:GraphQLString},
   year:{type:GraphQLString},
   details:{type:MovieDetailsType,
    resolve(parent,args){
    //code to get data
  return   movie_details(parent.id);
    }

} 
    })});

   
    const GenreType = new GraphQLObjectType({
        name:'genre',
        fields:()=>({
            id:{type:GraphQLString},
            
           name:{type:GraphQLString}
            })});
    const MovieDetailsType = new GraphQLObjectType({
        name:'movieDetails',
        fields:()=>({
            id:{type:GraphQLString},
            
           genres:{type:new GraphQLList(GenreType)},
           title:{type:GraphQLString},
           overview:{type:GraphQLString},
           popularity:{type:GraphQLString},
           revenue:{type:GraphQLString},
           runtime:{type:GraphQLString}
            })});



const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        movies:{
               type:new GraphQLList(MovieType),
               args:{id:{type:GraphQLString}},
               resolve(parent,args){
                //code to get data
              return  all_movies().catch((error)=>{console.log(error)});
            }

        },
        movieDetails:{
            type: MovieDetailsType,
           args:{id:{type:GraphQLString}},
            resolve(parent,args){
             //code to get data
           return   movie_details(args.id).catch((error)=>{console.log(error)});
         }

        }


    }
});


module.exports = new GraphQLSchema({
    query:RootQuery
});
