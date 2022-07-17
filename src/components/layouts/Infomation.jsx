import React , { useState } from 'react';
import { Link } from 'react-router-dom'
import icon from '../../assets/fake-data/icon';

const Infomation = () => {

    const [data] = useState([
        {
            icon: icon.user,
            title: 'Symbol :',
            info: 'QLB'
        },
        {
            icon: icon.box,
            title: 'Chain :',
            info: 'Binance Smart Chain'
        },
        {
            icon: icon.box,
            title: 'Total Supply :',
            info: '100,000,000'
        },
        {
            icon: icon.box,
            title: 'ICO Supply :',
            info: '10,000,000'
        },
        {
            icon: icon.payment,
            title: 'Token Price :',
            info: '0.00125 USD'
        },
    ])
    const [datatext] = useState({
        subtitle: 'Token Information',
        title :'Here’s what you need to know about token',
        desc1: 'Qatarlaeeb is a fully autonomous community project, every member of the community is the initiator of the project.',
    })
  return (
    <section className="tf-section section-info" id='info'>
        <div className="container">
            <div className="row">
                <div className="col-xl-7 col-md-12">
                    <div className="block-text pt-12">
                        <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">{datatext.subtitle}</h5>
                        <h3 className="title mb-26" data-aos="fade-up" data-aos-duration="1000">{datatext.title}</h3>
                        <p className="fs-21 mb-50" data-aos="fade-up" data-aos-duration="1000">{datatext.desc1}</p>
                        <Link to="/" className="btn-action style-2"  data-aos="fade-up" data-aos-duration="1200">Buy Token</Link>
                    </div>
                </div>
                <div className="col-xl-5 col-md-12">
                    <div className="box-info" data-aos="zoom-in" data-aos-duration="2000">
                        <ul>
                            {
                                data.map((data,index) => (
                                    <li key={index}>
                                        <h5 className="fs-18"><img src={data.icon} alt="Monteno" /> {data.title}</h5>
                                        <p className="fs-16">{data.info}</p>
                                    </li>
                                ))
                            }
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Infomation;