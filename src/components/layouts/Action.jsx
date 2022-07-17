import React , { useState } from 'react';

const Action = () => {

    const [data] = useState(
        {
            title: 'Pre-order Qatarlaeeb Now',
            desc: 'Be the initial leader of the community',
        }
    )

    return (
        <section className="tf-section action">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="action__body" data-aos="fade-up">
                            <div className="block-text">
                                <h3 className="mb-13">{data.title}</h3>
                                <p className="fs-21 mb-7">{data.desc}</p>
                            </div>
                            <a href="https://pancakeswap.finance/" target="_blank" rel="noopener noreferrer" className="btn-action style-2">
                            Buy Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Action;