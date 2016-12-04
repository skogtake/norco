import React from 'react';
import ReactDOM from 'react-dom';

let Header = React.createClass({
    render: function() {
        return (
            <header>
                <nav>
                    <img src="pic/logo.png" className="logo"></img>
                    <menu>
                        <ul>
                            <li>
                                <a href="#overview">overview</a>
                            </li>
                            <li>
                                <a href="#features">key benefits</a>
                            </li>
                            <li>
                                <a href="#technology">technology</a>
                            </li>
                            <li>
                                <a href="#characters">aurum carbon</a>
                            </li>
                        </ul>
                    </menu>
                </nav>
            </header>
        );
    }
});

let Bike = React.createClass({
    render: function() {
        let description = this.props.data.description;
        return (
            <section id="bike">
                <div className="row">
                    <div className="text">
                        <h1>norco aurum</h1>
                        <p>{ description }</p>
                    </div>
                </div>
            </section>
        );
    }
});

let Overview = React.createClass({
    render: function() {
        let overview = this.props.data.overview;
        return (
            <section id="overview">
                <div className="row">
                    <h1>overview</h1>
                    <div className="underlines"><pre>_______________          _______________</pre></div>
                    <p className="text">{ overview }</p>
                </div>
            </section>
        );
    }
})

let Features = React.createClass({
    render: function() {
        let features = this.props.data.features.map((item, i) => {
            return (
                <div key={ i } className="feature">
                    <span className="counter">{ i + 1 } </span>
                    <span className="title">{ item.title }</span>
                    <p className="description">{ item.description }</p>
                </div>
            );
        });

        return (
            <section id="features">
                <div className="row">
                    <h1>aurum carbon key benefits</h1>
                    <div className="underlines"><pre>_______________                        _______________</pre></div>
                    <div className="features-img"></div>
                    <div className="flex-container">{ features }</div>
                </div>
            </section>
        );
    }
})

let Technology = React.createClass({
    render: function() {
        return (
            <section id="technology">
                <div className="row">
                    <h1>technology</h1>
                    <div className="underlines"><pre>_______________           _______________</pre></div>
                    <div className="flex-container">
                        <div className="tech-pic advanced-ride-technology"></div>
                        <div className="tech-pic gravity-tune"></div>
                        <div className="tech-pic size-scaled-tubing-mtn"></div>
                        <div className="tech-pic smoothcore"></div>
                        <div className="tech-pic armorlite"></div>
                        <div className="tech-pic post-mount-brakes"></div>
                    </div>
                </div>
            </section>
        );
    }
});

let Characters = React.createClass({
    getInitialState: function() {
        return {
            activeTab: 1
        };
    },
    handler: function(tab) {
        this.setState({ activeTab: tab });
    },
    render: function() {
        let bikes = this.props.data.bikes.map((item, i) => {
            if (this.state.activeTab - 1 === i) {
                return <img key={ i } src={ item } style={ { opacity: 1 } } onMouseOver={ () => this.handler(i + 1) }></img>;
            }
            else {
                return <img key={ i } src={ item } style={ { opacity: 0.4 } } onMouseOver={ () => this.handler(i + 1) }></img>;
            }
        });

        let specs = this.props.data.specs.map((item, i) => {
            let components = item.components.map((component, j) => {
                let parts = component.items.map((part, k) => {
                    return (
                        <div key={ k } className="part">
                            <span className="name">{ part.name }:</span><span className="item">{ part.item }</span>
                        </div>
                    );
                });

                return (
                    <div key={ j } className="component">
                        <h3>{ component.name }</h3>
                        { parts }
                    </div>
                );
            });

            if (this.state.activeTab - 1 === i) {
                return <div key={ i } className="flex-container-specs">{ components }</div>;
            }
            else {
                return null;
            }
        });

        return (
            <section id="characters">
                <div className="row">
                    <h1>aurum carbon</h1>
                    <div className="underlines"><pre>_______________              _______________</pre></div>
                    <div className="flex-container">{ bikes }</div>
                    <h2>specifications: { this.props.data.specs[this.state.activeTab - 1].name }</h2>
                    { specs }
                </div>
            </section>
        );
    }
});

let Footer = React.createClass({
    render: function() {

        let info = this.props.data.info.map((item, i) => {
            let links = item.links.map((link, j) => {
                return (
                    <a href="#" key={ j }>{ link }</a>
                );
            });

            return (
                <div key={ i } className="column">
                    <h2>{ item.title }</h2>
                    <div className="underlines"><pre> ________</pre></div>
                    <menu>{ links }</menu>
                </div>
            );
        });

        return (
            <footer>
                <div className="row">
                    <div className="flex-container">{ info }</div>
                    <div className="social">
                        <a href="#">
                            <i className="fa fa-youtube-square fa-3x" aria-hidden="true"></i>
                        </a>
                        <a href="#">
                            <i className="fa fa-instagram fa-3x" aria-hidden="true"></i>
                        </a>
                        <a href="#">
                            <i className="fa fa-facebook-square fa-3x" aria-hidden="true"></i>
                        </a>
                        <a href="#">
                            <i className="fa fa-twitter-square fa-3x" aria-hidden="true"></i>
                        </a>
                        <a href="#">
                            <i className="fa fa-flickr fa-3x" aria-hidden="true"></i>
                        </a>
                    </div>
                    <p>{ this.props.data.copyrights }</p>
                </div>
            </footer>
        );
    }
});

let App = React.createClass({
    render: function() {
        const data = {
            header: {},
            bike: {
                description: "SECONDS AT THE START GATE FEEL LIKE AN ETERNITY\. MIND AND BODY ARE PULSING \— IN PERFECT SYNC\. YOUR LINE GIVES YOU THE EDGE YOU NEED\. YOUR BIKE WILL HELP YOU STICK IT\.",
            },
            overview: {
                overview: 'The Aurum Killer B Carbon was designed in conjunction with Norco\'s World Cup DH teams past and present and proven on the World Cup stage. This 650B-wheeled race bike represents the cutting edge of Norco\'s engineering and design capability and brings together all of our most advanced carbon, aluminum and mountain technologies. The Aurum - Latin for \"gold\" - earned its name by turning the most challenging terrain features into advantages over other riders.',
            },
            features: {
                features: [
                    {
                        title: 'AURUM CARBON KILLER B MKII FRAME:',
                        description: 'Lightweight and durable carbon front triangle with integrated frame protection and a removable fender.'
                    },
                    {
                        title: 'GRAVITY TUNE:',
                        description: 'Ensures optimal body position and weight distribution to riders of all sizes, delivering superior handling and control at high speeds.'
                    },
                    {
                        title: 'A.R.T. SUSPENSION:',
                        description: 'Supple, predictable and proven suspension for greater confidence and control.'
                    },
                    {
                        title: 'DH-OPTIMIZED 7SPD DRIVETRAIN:',
                        description: 'All the gears you need and nothing more; reduced rear end width for better heel and hazard clearance.'
                    },
                    {
                        title: '650B WHEELS:',
                        description: 'Faster rolling speed, better rollover and enhanced traction for high speed cornering.'
                    }
                ],
            },
            technology: {},
            characters: {
                bikes: ['pic/bike1.png', 'pic/bike2.png', 'pic/bike3.png'],
                specs: [
                    {
                        name: 'AURUM C7.1',
                        components: [
                            {
                                name: 'FRAMESET',
                                items: [
                                    {
                                        name: 'FRAME',
                                        item: 'Aurum frame (CARBON / ALLOY )'
                                    },
                                    {
                                        name: 'FORK',
                                        item: 'Fox Factory Float 40 w/Kashima'
                                    },
                                    {
                                        name: 'REAR SHOCK',
                                        item: 'Fox Factory Float X2 w/Kashima'
                                    }
                                ]
                            },
                            {
                                name: 'COMPONENTS',
                                items: [
                                    {
                                        name: 'SEAT POST',
                                        item: 'Pivotal 350mm x 30.9mm'
                                    },
                                    {
                                        name: 'SEAT POST CLAMP',
                                        item: 'Built into frame (comes assembled with frame)'
                                    },
                                    {
                                        name: 'SHIFTER CASING',
                                        item: 'N/A'
                                    },
                                    {
                                        name: 'SADDLE',
                                        item: 'Norco Pivotal DH saddle'
                                    },
                                    {
                                        name: 'HEADSET',
                                        item: 'Cane Creek 40'
                                    },
                                    {
                                        name: 'HEADSET SPACER',
                                        item: 'N/A'
                                    },
                                    {
                                        name: 'TOP CAP',
                                        item: 'N/A'
                                    },
                                    {
                                        name: 'STEM',
                                        item: 'Race face Atlas Direct Mount 50 mm 35 bulge'
                                    },
                                    {
                                        name: 'HANDLEBAR',
                                        item: 'Race Face Six C carbon 800 mm wide bar (35 mm)'
                                    },
                                    {
                                        name: 'GRIPS',
                                        item: 'Race Face Half Nelson lock on grips'
                                    },
                                    {
                                        name: 'FRONT BRAKE',
                                        item: 'Sram Guide RSC hydraulic w/200mm rotor'
                                    },
                                    {
                                        name: 'CHAIN TENSIONER',
                                        item: 'MRP G 4'
                                    },
                                    {
                                        name: 'REAR BRAKE',
                                        item: 'Sram Guide RSC hydraulic w/200mm rotor'
                                    },
                                    {
                                        name: 'BRAKE LEVERS',
                                        item: 'Sram Guide RSC'
                                    },
                                    {
                                        name: 'BRAKE CABLE CASING',
                                        item: 'N/A'
                                    },
                                    {
                                        name: 'BRAKE ROTORS',
                                        item: 'N/A'
                                    }
                                ]
                            },
                            {
                                name: 'WHEELS',
                                items: [
                                    {
                                        name: 'FRONT HUB',
                                        item: 'DT 240 20 mm front hub'
                                    },
                                    {
                                        name: 'FRONT HUB SKEWER',
                                        item: 'Fox 20mm nutted axle, allen key type'
                                    },
                                    {
                                        name: 'REAR HUB',
                                        item: 'DT 240 with XD ( 142 x 12 )'
                                    },
                                    {
                                        name: 'REAR HUB SKEWER',
                                        item: 'Norco Thru-axle 12mm, allen key'
                                    },
                                    {
                                        name: 'SPOKES/NIPPLES',
                                        item: 'DT Competition double butted brass nipples'
                                    },
                                    {
                                        name: 'RIMS',
                                        item: 'DT EX 511 30 mm inner 27.5'
                                    },
                                    {
                                        name: 'TIRES',
                                        item: 'Magic Mary 27.5x2.35 super gravity, Vert star'
                                    },
                                    {
                                        name: 'TUBES',
                                        item: 'N/A'
                                    },
                                ]
                            },
                            {
                                name: 'DRIVETRAIN',
                                items: [
                                    {
                                        name: 'SHIFTER FRONT',
                                        item: 'N/A'
                                    },
                                    {
                                        name: 'SHIFTER REAR',
                                        item: 'Sram XO 1 DH 1x7'
                                    },
                                    {
                                        name: 'FRONT DERAILLEUR',
                                        item: 'N/A'
                                    },
                                    {
                                        name: 'REAR DERAILLEUR',
                                        item: 'Sram XO 1 DH medium cage 7 speed RD'
                                    },
                                    {
                                        name: 'CASSETTE',
                                        item: 'Sram XO1 DH 10-24T 7 spd casette CS HG795'
                                    },
                                    {
                                        name: 'CRANKSET',
                                        item: 'Race Face Six C Carbon crank 34T Direct Mnt.'
                                    },
                                    {
                                        name: 'BOTTOM BRACKET',
                                        item: 'Race Face BB included with crankset'
                                    },
                                    {
                                        name: 'PEDALS',
                                        item: 'N/A'
                                    },
                                    {
                                        name: 'CHAIN',
                                        item: 'Sram PC X1 chain 108 link'
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        name: 'AURUM C7.2',
                        components: [
                            {
                                name: 'FRAMESET',
                                items: [
                                    {
                                        name: 'FRAME',
                                        item: 'Aurum frame (CARBON / ALLOY )'
                                    },
                                    {
                                        name: 'FORK',
                                        item: 'Boxxer R2C2 Team 200 mm travel 27.5'
                                    },
                                    {
                                        name: 'REAR SHOCK',
                                        item: 'Rockshox Vivid RC2C Coil'
                                    }
                                ]
                            },
                            {
                                name: 'COMPONENTS',
                                items: [
                                    {
                                        name: 'SEAT POST',
                                        item: 'Pivotal 350mm x 30.9mm'
                                    },
                                    {
                                        name: 'SEAT POST CLAMP',
                                        item: 'Built into frame (comes assembled with frame)'
                                    },
                                    {
                                        name: 'SHIFTER CASING',
                                        item: 'N/A'
                                    },
                                    {
                                        name: 'SADDLE',
                                        item: 'Norco Pivotal DH saddle'
                                    },
                                    {
                                        name: 'HEADSET',
                                        item: 'Cane Creek 40'
                                    },
                                    {
                                        name: 'HEADSET SPACER',
                                        item: 'N/A'
                                    },
                                    {
                                        name: 'TOP CAP',
                                        item: 'N/A'
                                    },
                                    {
                                        name: 'STEM',
                                        item: 'Race Face Chester DM 35 stem'
                                    },
                                    {
                                        name: 'HANDLEBAR',
                                        item: 'Race Face Atlas 20mmx800mm (35mm bulge)'
                                    },
                                    {
                                        name: 'GRIPS',
                                        item: 'Race Face Half Nelson lock on grips'
                                    },
                                    {
                                        name: 'FRONT BRAKE',
                                        item: 'Sram Guide RS hydraulic w/200mm rotor'
                                    },
                                    {
                                        name: 'CHAIN TENSIONER',
                                        item: 'MRP G 3'
                                    },
                                    {
                                        name: 'REAR BRAKE',
                                        item: 'Sram Guide RS hydraulic w/200mm rotor'
                                    },
                                    {
                                        name: 'BRAKE LEVERS',
                                        item: 'Sram Guide RS'
                                    },
                                    {
                                        name: 'BRAKE CABLE CASING',
                                        item: 'N/A'
                                    },
                                    {
                                        name: 'BRAKE ROTORS',
                                        item: 'N/A'
                                    }
                                ]
                            },
                            {
                                name: 'WHEELS',
                                items: [
                                    {
                                        name: 'FRONT HUB',
                                        item: 'DT 350 20 mm front hub '
                                    },
                                    {
                                        name: 'FRONT HUB SKEWER',
                                        item: 'Rockshox 20mm axle, allen key type'
                                    },
                                    {
                                        name: 'REAR HUB',
                                        item: 'DT 350 with XD and 36 engagement'
                                    },
                                    {
                                        name: 'REAR HUB SKEWER',
                                        item: 'Norco Thru-axle 12mm, allen key'
                                    },
                                    {
                                        name: 'SPOKES/NIPPLES',
                                        item: 'DT Competition double butted brass nipples'
                                    },
                                    {
                                        name: 'RIMS',
                                        item: 'DT EX 512 30 mm inner 27.5'
                                    },
                                    {
                                        name: 'TIRES',
                                        item: 'Magic Mary 27.5x2.35 super gravity, Vert star'
                                    },
                                    {
                                        name: 'TUBES',
                                        item: 'N/A'
                                    },
                                ]
                            },
                            {
                                name: 'DRIVETRAIN',
                                items: [
                                    {
                                        name: 'SHIFTER FRONT',
                                        item: 'N/A'
                                    },
                                    {
                                        name: 'SHIFTER REAR',
                                        item: 'Sram XO 1 DH 1x7'
                                    },
                                    {
                                        name: 'FRONT DERAILLEUR',
                                        item: 'N/A'
                                    },
                                    {
                                        name: 'REAR DERAILLEUR',
                                        item: 'Sram XO 1 DH medium cage 7 speed RD'
                                    },
                                    {
                                        name: 'CASSETTE',
                                        item: 'Sram XO1 DH 10-24T 7 spd casette CS HG795'
                                    },
                                    {
                                        name: 'CRANKSET',
                                        item: 'Race Face Atlas DH'
                                    },
                                    {
                                        name: 'BOTTOM BRACKET',
                                        item: 'Comes with crank'
                                    },
                                    {
                                        name: 'PEDALS',
                                        item: 'N/A'
                                    },
                                    {
                                        name: 'CHAIN',
                                        item: 'Sram PC X1 chain 108 link'
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        name: 'AURUM C7.3',
                        components: [
                            {
                                name: 'FRAMESET',
                                items: [
                                    {
                                        name: 'FRAME',
                                        item: 'Aurum carbon / alloy 27.5'
                                    },
                                    {
                                        name: 'FORK',
                                        item: 'Rock shox Boxxer RC 27.5'
                                    },
                                    {
                                        name: 'REAR SHOCK',
                                        item: 'Rock shox KAGE RC coil spring'
                                    }
                                ]
                            },
                            {
                                name: 'COMPONENTS',
                                items: [
                                    {
                                        name: 'SEAT POST',
                                        item: 'I Beam 30.9'
                                    },
                                    {
                                        name: 'SEAT POST CLAMP',
                                        item: 'Built into frame'
                                    },
                                    {
                                        name: 'SHIFTER CASING',
                                        item: 'N/A'
                                    },
                                    {
                                        name: 'SADDLE',
                                        item: 'SDG I Fly 2.0 I Beam'
                                    },
                                    {
                                        name: 'HEADSET',
                                        item: 'FSA #57E-1 1.5" to 1-1/8"" w / 1-1/8"" crown race "'
                                    },
                                    {
                                        name: 'HEADSET SPACER',
                                        item: 'N/A'
                                    },
                                    {
                                        name: 'TOP CAP',
                                        item: 'N/A'
                                    },
                                    {
                                        name: 'STEM',
                                        item: 'Race Face Chester DM 35 stem'
                                    },
                                    {
                                        name: 'HANDLEBAR',
                                        item: 'Race Face Chester Bar 780mm'
                                    },
                                    {
                                        name: 'GRIPS',
                                        item: 'Norco Lock On Grip'
                                    },
                                    {
                                        name: 'FRONT BRAKE',
                                        item: 'Sram Guide R hydraulic w/200mm rotor'
                                    },
                                    {
                                        name: 'CHAIN TENSIONER',
                                        item: 'E13 LG 1 guide, steel backplate w/lower guard'
                                    },
                                    {
                                        name: 'REAR BRAKE',
                                        item: 'Sram Guide R hydraulic w/200mm rotor'
                                    },
                                    {
                                        name: 'BRAKE LEVERS',
                                        item: 'Sram Guide R'
                                    },
                                    {
                                        name: 'BRAKE CABLE CASING',
                                        item: 'N/A'
                                    },
                                    {
                                        name: 'BRAKE ROTORS',
                                        item: 'N/A'
                                    }
                                ]
                            },
                            {
                                name: 'WHEELS',
                                items: [
                                    {
                                        name: 'FRONT HUB',
                                        item: 'DT 370 front 20x110mm'
                                    },
                                    {
                                        name: 'FRONT HUB SKEWER',
                                        item: 'Rockshox 20mm axle, allen key type'
                                    },
                                    {
                                        name: 'REAR HUB',
                                        item: 'DT 370 rear hub 142x12 mm'
                                    },
                                    {
                                        name: 'REAR HUB SKEWER',
                                        item: 'Norco Thru-axle 12mm, allen key'
                                    },
                                    {
                                        name: 'SPOKES/NIPPLES',
                                        item: 'Sapim butted black stainless steel spokes'
                                    },
                                    {
                                        name: 'RIMS',
                                        item: 'WTB STP I29'
                                    },
                                    {
                                        name: 'TIRES',
                                        item: 'Maxxis Minion DHF frnt , DHR II rear 27.5x2.40 Super Tacky'
                                    },
                                    {
                                        name: 'TUBES',
                                        item: 'N/A'
                                    },
                                ]
                            },
                            {
                                name: 'DRIVETRAIN',
                                items: [
                                    {
                                        name: 'SHIFTER FRONT',
                                        item: 'N/A'
                                    },
                                    {
                                        name: 'SHIFTER REAR',
                                        item: 'Sram GX 1 7 speed trigger'
                                    },
                                    {
                                        name: 'FRONT DERAILLEUR',
                                        item: 'N/A'
                                    },
                                    {
                                        name: 'REAR DERAILLEUR',
                                        item: 'Sram GX DH 7 speed mid cage'
                                    },
                                    {
                                        name: 'CASSETTE',
                                        item: 'Sram CS PG 720 DH 11-25T cassette'
                                    },
                                    {
                                        name: 'CRANKSET',
                                        item: 'Race Face Chester crank 36T'
                                    },
                                    {
                                        name: 'BOTTOM BRACKET',
                                        item: 'Comes with crank'
                                    },
                                    {
                                        name: 'PEDALS',
                                        item: 'N/A'
                                    },
                                    {
                                        name: 'CHAIN',
                                        item: 'Sram PC 1110 11 speed chain'
                                    },
                                ]
                            }
                        ]
                    }
                ],
            },
            footer: {
                info: [
                    {
                        title: 'company',
                        links: ['About Norco', 'Comuntity Support', 'Careers']
                    },
                    {
                        title: 'support',
                        links: ['Privacy Policy', 'FAQ', 'Warranty', 'Safety & Recalls', 'Owner\'s Manual']
                    },
                    {
                        title: 'helpful links',
                        links: ['Resort & Demo Partners', 'Intended Use', 'Bicycle Archives', 'Bike Finder', 'Bike Registration']
                    }
                ],
                copyrights: '© 2016 Norco Bicycles | Use of this site constitutes acceptance of our Privacy Policy'
            },
        };

        return (
            <div>
                <Header data={ data.header }/>
                <Bike data={ data.bike }/>
                <Overview data={ data.overview }/>
                <Features data={ data.features }/>
                <Technology data={ data.technology }/>
                <Characters data={ data.characters }/>
                <Footer data={ data.footer }/>
            </div>
        );
    }
});

ReactDOM.render(<App/>, document.getElementById('root'));
