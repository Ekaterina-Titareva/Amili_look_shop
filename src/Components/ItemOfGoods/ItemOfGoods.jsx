import styles from './itemOfGoods.module.scss'

function ItemOfGoogs({id, category, name, image1, image2, image3, description, text1, text2, color, size, price, material, selectedImage, handleImageClick}) {


    
    return (
            <div key={id} className={styles.card}>
                
                {/* <img className={selectedImage === image1 ? `${styles.image} ${styles.selected}` : styles.image} src={image1} alt={name} onClick={() => handleImageClick(image1)} />
                <img className={selectedImage === image2 ? `${styles.image} ${styles.selected}` : styles.image} src={image2} alt={name} onClick={() => handleImageClick(image2)} />
                <img className={selectedImage === image3 ? `${styles.image} ${styles.selected}` : styles.image} src={image3} alt={name} onClick={() => handleImageClick(image3)} /> */}
                <div className={styles.images}>
                    <div  className={styles.imagesWrapper}>
                        <img className={styles.image} src={image2} alt={name}/>
                        <img className={styles.image} src={image3} alt={name}/>
                    </div>
                    <div className={styles.imageMainWrapper}>
                        <img className={styles.imageMain} src={image1} alt={name}/>
                    </div>
                </div>
                <div className={styles.infoWrapper}>
                    <p className={styles.name} id={id}>{name}</p>
                    <p className={styles.price}>Цена: {price} рублей</p>
                    <p className={styles.size}>Размер: <span className={styles.sizeBox}>{size}</span></p>
                    <p className={styles.color}>Цвет: {color}</p>
                    <p className={styles.material}>Материал: {material}</p>
                    <a className={styles.link} href='/'> КУПИТЬ </a>
                    <p className={styles.description}>{description}</p>
                    <p className={styles.text1}>{text1}</p>
                    <p className={styles.text2}>{text2}</p>
                </div>
            </div>
    );
}

export default ItemOfGoogs;
