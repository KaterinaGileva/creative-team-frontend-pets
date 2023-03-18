//import {  useEffect } from 'react';
import { NoticeCategoryItem } from "../NoticeCategoryItem/NoticeCategoryItem";
//import { getNotices } from "../../API/fetchNotice";

const items = [
        {
        id:1,
        category: "sell",
        title: "dog",
        breed: "kolly",
        location: "Lviv",
        age: "5",
        price: 75,
        },
        {
        id:2,
        category: "lost-found",
        title: "dog",
        breed: "main-kun",
        location: "Kiev",
        age: "2",
        },
        {
        id:3,
        category: "sell",
        title: "dog",
        breed: "corgi",
        location: "Kharkiv",
        age: "1",
        price: 50,
        }
]

const NoticesCategoriesList = ({ item }) => {
   // const location = useLocation();

const category = "sell";

    // useEffect(() => {
    //     getNotices(category);
    // }, [category]);


    return (
        <>
        <button type="button">Add pet</button>
<ul>
        {items.map(item => {
            return <NoticeCategoryItem key={item.id} item={item} />;
          })}
</ul>    
        </> 
    )
};


export default NoticesCategoriesList;