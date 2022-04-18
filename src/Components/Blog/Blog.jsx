import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <h2 className='my-5 text-success'>All Blogs Here</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Q1:Difference between authorization and authentication
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            What's the difference between authentication and authorization? Authentication confirms that users are who they say they are. Authorization gives those users permission to access a resource. Authentication is the act of validating that users are whom they claim to be. This is the first step in any security process.Authorization in system security is the process of giving the user permission to access a specific resource or function. This term is often used interchangeably with access control or client privilege.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Q1:Why are you using firebase? What other options do you have to implement authentication?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Firebase is a platform by Google that provides functionalities and helps with the backend development of our Android, iOS, or web and even some products that support Unity3D too.The best part is that Firebase has all the features that helped my apps to grow to the next level.
                            <strong> <br />
                                More 4 ways of authentication
                            </strong>
                            <ul>
                                <li className='text-start'>Multi-factor authentication</li>
                                <p className='text-dark text-start'>Multi-Factor Authentication (MFA) is an authentication method that requires two or more independent ways to identify a user. Examples include codes generated from the user’s smartphone, Captcha tests, fingerprints, voice biometrics or facial recognition. </p>
                                <li className='text-start'>Certificate-based authentication</li>
                                <p className='text-dark text-start'>Certificate-based authentication technologies identify users, machines or devices by using digital certificates. A digital certificate is an electronic document based on the idea of a driver’s license or a passport. </p>
                                <li className='text-start'>Biometric authentication</li>
                                <p className='text-dark text-start'>Biometrics authentication is a security process that relies on the unique biological characteristics of an individual. Here are key advantages of using biometric authentication technologies</p>
                                <li className='text-start' s> Token-based authentication</li>
                                <p className='text-dark text-start'>Token-based authentication technologies enable users to enter their credentials once and receive a unique encrypted string of random characters in exchange. You can then use the token to access protected systems instead of entering your credentials all over again. The digital token proves that you already have access permission. Use cases of token-based authentication include RESTful APIs that are used by multiple frameworks and clients.</p>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Q3:What other services does firebase provide other than authentication
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p className='text-dark text-start fw-bold'>There are many services which Firebase provides, Most useful of them are:</p>
                            <ul>
                                <li className='text-start'>Cloud Firestore</li>
                                <li className='text-start'>Cloud Functions</li>
                                <li className='text-start'>Hosting</li>
                                <li className='text-start'>Cloud Storage</li>
                                <li className='text-start'>Google Analytics</li>
                                <li className='text-start'>Predictions</li>
                                <li className='text-start'>Cloud Messaging</li>
                                <li className='text-start'>Dynamic Links</li>
                                <li className='text-start'>Remote Config</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;