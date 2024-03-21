// import {GetStaticProps} from "next";
// import {MongoClient} from "mongodb";
//
// export type User = {
//     id: number
//     name: string
//     email: string
// }
//
// export const getStaticProps: GetStaticProps = async (context) => {
//     const mongoClient = new MongoClient(
//         'mongodb+srv://saurav:<uzDSw2ueDnMQcSit>@cluster0.opywohk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
//         );
//     const data = await mongoClient.db().collection('Users').find({}).toArray();
//     console.log(data);
//
//     // const result = await axios.get<{
//     //     users: User[];
//     // }>('')
// }
