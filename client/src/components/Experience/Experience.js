import React, { useEffect } from 'react';
//import { Link } from 'react-router-dom';
import styles from './Experience.module.scss';
import colorMap from './colorMap';
import exps from './exps.json'

function Experience() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.articlesContainer}>
                <div className={styles.headerContainer}>
                    <h2>Agency Level Experience</h2>
                </div>
                <div className={styles.row}>
                    <ul>
                        {exps.map((exp, i)=>(
                            <li key={i}>
                                <div className={styles.articleDiv}>
                                    <span style={colorMap[i]} className={styles.iconSpan}>
                                        <i className={exp.iclass}></i>
                                    </span>
                                    <h3>{exp.header}</h3>
                                    <p>{exp.body}</p><a href={exp.link}>Learn more</a>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Experience
