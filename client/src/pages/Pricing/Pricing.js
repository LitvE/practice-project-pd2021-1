import React from 'react';
import tariffs from './tariffs.json';
import styles from './Pricing.module.scss';

function Pricing() {
    return (
        <div className={styles.row}>
            <div className={styles.container}>
                <ul className={styles.ulStyle}>
                    {tariffs.map((t, i) =>(
                        <li key={i} className={styles.listContainer}>
                            <div style={{borderColor: t.color}} className={styles.pricingBox}>
                                <h3 style={{color: t.color}}>{t.h3}</h3>
                                <p>{t.p}</p>
                                <span style={{color: t.color}}>{t.price}</span>
                            </div>
                            {i == 0 && 
                            <div>
                                <ul className={styles.subUlStyle}>
                                    <li>Prize to Winner - $135 (Included)</li>
                                    <li>Expected 30+ Entries</li>
                                </ul>
                            </div>
                            }
                            {i==1 &&
                            <div>
                                <ul className={styles.subUlStyle}>
                                    <li>Prize to Winner - $225 (Included)</li>
                                    <li>
                                        <div>
                                            <p>Validation Services & Upgrades ($267 value)</p>
                                            <div className={styles.subDivStyle}>
                                                <i class="fa fa-check"></i>
                                                <span>  NDA and More Privacy</span>
                                            </div>
                                            <div className={styles.subDivStyle}>
                                                <i class="fa fa-check"></i>
                                                <span>  Project Promotion (Basic)</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>Expected 50+ Entries</li>
                                    <li>Partial Refund Option</li>
                                </ul>
                            </div>
                            }
                            {i==2 &&
                            <div>
                                <ul className={styles.subUlStyle}>
                                    <li>Prize to Winner - $300 (Included)</li>
                                    <li className={styles.listStyle}>
                                        <p>Validation Services & Upgrades ($644 value)</p>
                                        <div className={styles.subDivStyle}>
                                            <i class="fa fa-check"></i>
                                            <span>  Audience Testing (Up to 5 Logos)</span>
                                            <div>
                                                <a className={styles.aStyle} href="http://www.squadhelp.com/assets/nimages/AudienceTestingReport.pdf" target='_blank'>View Sample Report</a>
                                            </div>
                                        </div>
                                        <div className={styles.subDivStyle}>
                                            <i class="fa fa-check"></i>
                                            <span>   Tier A Creatives</span>
                                        </div>
                                        <div className={styles.subDivStyle}>
                                            <i class="fa fa-check"></i>
                                            <span>  NDA and More Privacy</span>
                                        </div>
                                        <div className={styles.subDivStyle}>
                                            <i class="fa fa-check"></i>
                                            <span>  Enhanced Project Promotion</span>
                                        </div>
                                        <div className={styles.subDivStyle}>
                                            <i class="fa fa-check"></i>
                                            <span>  Team Collaboration Tools</span>
                                        </div>
                                    </li>
                                    <li>Expected 60+ Entries</li>
                                    <li>Partial Refund Option</li>
                                </ul>
                            </div>
                            }
                            {i==3 &&
                            <div className={styles.sectionStyle}>
                                <p>Receive optimum results from your Platinum Contest by launching a Managed Contest Package and working one-on-one with an experienced Squadhelp Branding Consultant.</p>
                                <p>With significantly more validation services, professional brief creation, and daily management of your contest by your Branding Expert, you'll receive an enhanced branding experience to closeout your branding project.</p>
                                <p>Learn More about <a href="https://www.squadhelp.com/managed-contests">Managed Contest Service</a></p>
                            </div>
                            }
                            <div className={styles.button}>
                                <a style={{background: t.color, borderColor: t.color}} href='#'>
                                    <i class="fa fa-check"></i>
                                    <span>Start</span>
                                </a>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Pricing;
