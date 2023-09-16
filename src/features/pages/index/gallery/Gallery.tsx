import React from 'react';
import styles from './styles.module.css'
import classNames from "classnames";

function importAll(r: any) {
    return r.keys().map(r);
}

const Gallery = () => {
    const images = importAll(require.context('../../../../assets/gallery', false, /\.(png|jpe?g|svg)$/));
    const firstRow = images.slice(0, 4);
    const secondRow = images.slice(4);

    return (
        <div className={styles.root}>
            <div className={styles.rootRow}>
                <div className={classNames(styles.row, styles.rowOneFirst)}>
                    {firstRow.map((image: any, imageIndex: number) => (
                        <div key={imageIndex}>
                            <img className={styles.galleryImage} src={image} alt={image}/>
                        </div>
                    ))}
                </div>

                <div className={classNames(styles.row, styles.rowOneSecond)}>
                    {firstRow.map((image: any, imageIndex: number) => (
                        <div key={imageIndex + 5}>
                            <img className={styles.galleryImage} src={image} alt={image}/>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.rootRow}>
                <div className={classNames(styles.row, styles.rowTwoFirst)}>
                    {secondRow.map((image: any, imageIndex: number) => (
                        <div key={imageIndex + 10}>
                            <img className={styles.galleryImage} src={image} alt={image}/>
                        </div>
                    ))}
                </div>

                <div className={classNames(styles.row, styles.rowTwoSecond)}>
                    {secondRow.map((image: any, imageIndex: number) => (
                        <div key={imageIndex + 15}>
                            <img className={styles.galleryImage} src={image} alt={image}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;