import { React , useState } from 'react';

import item from '../../assets/fake-data/item';

const About = () => {

    const [data] = useState(
        {
            subtitle: 'About Qatarlaeeb',
            title: 'World Cup Qatar 2022 Mascot',
            desc1: '"La’eeb is a fun and mischievous character who comes from the mascot-verse, a parallel world where all tournament mascots live,"',
            desc2: 'For a mascot meant to be figment of someone\'s imagination, there are many adjectives used to describe the mascot, including courageous, uplifting, fun, playful, mischievous, youthful, and an adventurous spirit.',
        }
    )

    return (
        <section className="tf-section section-about">
            <div className="container">
                <div className="row reverse">
                    <div className="col-xl-7 col-md-12">
                        <div className="group-image">
                            <div className="left">
                                <div className="item bg-1"><img src={item.item8} alt="Monteno" /></div>
                            </div>
                            <div className="right">
                                <div className="item bg-2"><img src={item.item9} alt="Monteno" /></div>
                                <div className="item bg-3"><img src={item.item10} alt="Monteno" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-md-12">
                        <div className="block-text pt-12">
                            <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">{data.subtitle}</h5>
                            <h3 className="title mb-58" data-aos="fade-up" data-aos-duration="1000">{data.title}</h3>
                            <p className="fs-21 mb-33" data-aos="fade-up" data-aos-duration="1000">{data.desc1}</p>
                            <p className="fs-18 line-h17 mb-41" data-aos="fade-up" data-aos-duration="1000">{data.desc2}</p>
                            <a href="https://www.sportingnews.com/uk/soccer/news/world-cup-2022-mascot-qatar-laeeb-explain-name-meaning-story/ojkmuozds4e8vkjyitzif3cz" target="_blank" rel="noopener noreferrer" className="btn-action style-2"  data-aos="fade-up" data-aos-duration="1200">
                                More About Laeeb
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;