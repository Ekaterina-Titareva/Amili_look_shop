import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import AllGoodsLink from '../../../AllGoodsLink/AllGoodsLink.jsx';
import Item from '../../../Item/Item.jsx'

export default function ItemCard (props) {
    const {itemId} = useParams()
    const [clickedItem, setClickedItem] = useState([]);
    useEffect(() => {
        if (!itemId) return
        const handleItem = () => {
            if (props.goods) {
                const filteredItems = props.goods.filter(item => item.id === itemId);
                setClickedItem(filteredItems);
            }
        };
        handleItem();
    }, [itemId]);
    return (
        <>
        <section>
            <h2>Наши товары</h2>
            {clickedItem?.length &&
                clickedItem.map((item) => (
                    <Item 
                    key={item.id}
                    id={item.id}
                    category={item.category}
                    name={item.name}
                    image1={item.image1}
                    image2={item.image2}
                    image3={item.image3}
                    description={item.description}
                    text1={item.text1}
                    text2={item.text2}
                    color={item.color}
                    size={item.size}
                    price={item.price}
                    material={item.material}
                    />
                ))
            }
            {/* <AllGoodsLink /> */}
        </section>  
        </>
    );
}
