import React from 'react'
import faqs from './faq.json'
import CONSTANTS from '../../constants';
import styles from './FaqArticlesList.module.sass'

function FaqArticlesList() {
    return (
        <div className={styles.articlesMainContainer}>
          {faqs.map((col, i) => (
            <div key={i} className={styles.ColumnContainer}>
              {col.map((articles, j) => (
                <div key={j}>
                  <div className={styles.headerArticle}>{articles.header}</div>
                  <div className={styles.article}>{articles.body}</div>
                </div>
              ))}
              {i == 1 && (
                <>
                  <div className={styles.headerArticle}>
                    I have other questions! How can I get in touch with Squadhelp?
                  </div>
                  <div className={styles.article}>
                    Check out our <span className={styles.orangeSpan}>FAQs</span> or
                    send us a<span className={styles.orangeSpan}>message</span>. For
                    assistance with launching a contest, you can also call us at
                    {CONSTANTS.CONTACTS.TEL} or schedule a
                    <span className={styles.orangeSpan}>Branding Consultation</span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
    );
}

export default FaqArticlesList
