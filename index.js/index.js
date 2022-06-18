function isOk(){
    return`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>RTPCR Test</title>
        <style>
             /* ---------------------------------CB YADAV's NAVBAR SECTION -------------------------------- */
             #navbar {
                background-color: teal;
            }
    
            #navtop {
                display: flex;
            }
    
            .mainlogo {
                width: 200px;
                height: 50px;
                margin-top: 10px;
                margin-left: 30px;
            }
    
            #bar {
                display: flex;
                background-color: white;
                width: 800px;
                height: 50px;
                margin-top: 10px;
                margin-left: 50px;
                border-radius: 10px;
            }
    
            #searchicon {
                width: 30px;
                height: 25px;
                background-color: rgb(222, 231, 231);
                margin-top: 10px;
            }
    
            #select {
                width: 170px;
                font-size: larger;
                border: 1px solid white;
                border-radius: 10px;
                color: teal;
            }
    
            #searchbar {
                border: 1px solid white;
                width: 600px;
                font-size: larger;
            }
    
            .searchicon {
                background-color: rgb(241, 241, 241);
                width: 50px;
                text-align: center;
                border-top-right-radius: 10px;
                border-bottom-right-radius: 10px;
            }
    
            #navbottom {
                display: flex;
                margin-top: 15px;
    
                width: 1090px;
                height: 40px;
                margin-left: 250px;
                justify-content: space-between;
                padding-top: 5px;
            }
    
            #left {
                display: flex;
                color: white;
                font-size: larger;
                font-family: 'Times New Roman', Times, serif;
    
                width: 520px;
                justify-content: space-between;
            }
    
            #right {
                display: flex;
                color: white;
                font-size: larger;
    
                width: 380px;
                justify-content: space-between;
    
    
            }
    
    
            .center {
                margin-top: -22px;
                margin-left: 30px;
            }
            /* --------------------------------------CSS NAVBAR ENDS --------------------------------------- */
    
            /* --------------------------------------COVID TEST SECTION --------------------------------------- */
            
            #rtpcr-main-container {
                display: flex;            
            }
    
            #rtpcr-col-1 {
                /* border: 3px solid orange; */
                width: 60%;
            }
    
            #rtpcr-col-2 {
                margin-left: 30px;
                margin-top: 70px;
                font-family: sans-serif;
                color: #4a4a4a;
            }
    
            #rtpcr-col-2 h3{
                font-weight: 530;
            }
    
            #rtpcr-col-2 button {
               background-color: grey;
               color: white;
               height: 40px;
               width: 300px;
               border-radius: 10px;
               border: 0.2px;
               font-size: 16px;
               
               
            }
            
            #rtpcr-midsection-1 {
                /* border: 1px solid red; */
                margin-top: 40px;
            }
    
            
            #rtpcr-midsection-1 h2 {
                margin-left: 200px;
                font-family: sans-serif;
                font-size: 28px;
                color: #4a4a4a;
                font-weight: 545;
                
            }
            #rtpcr-midsection-2 {
                margin-bottom: 120px;
                /* border-bottom: #4a4a4a; */
            }
    
            #rtpcr-midsection- {
                margin-left: 200px;
                font-family: sans-serif;
                font-size: 28px;
                color: #4a4a4a;
                font-weight: 545;
                
            }
    
            #covid-container {
                border: 1px solid #dfe3e6;
                height: 250px;
                margin-left: 200px;
                width: 580px;
            }
    
            #covid-container-top-row  h3 {
                font-family: sans-serif;
                font-size: 24px;
                overflow: auto;
                margin-bottom: 0;
                color: #4a4a4a;
            }
    
            #covid-container-top-row {
                display: flex;
                margin-left: 30px;
            }
    
            #covid-container-second-row {
                margin-top: 15px;
                margin-left: 130px;
                font-family: sans-serif;
                color: #4a4a4a;
            }
    
            #covid-test-logo {
                margin-left: 20px;
                padding-right: 30px;
                height: 50px;
                margin-top: 20px;
            }
            
    
            #covid-test-select-button {
                margin-top: 10px;
                /* margin-bottom: 10px; */
                background-color: teal;
                color: white;
                border-radius: 10px;
                border: 0.2px;
                width: 220px;
                height: 55px;
                font-size: 16px;
                font-family: sans-serif;
            }
    
            /* RTPCR DESCRIPTION & TEST REQUIREMENTS */
            #rtpcr-desc > h3 {
                font-family: sans-serif;
                font-weight: 450;
            } 
            
            #rtpcr-desc  {
                font-family: sans-serif;
                color: teal;
                font-weight: 300;
                margin-left: 210px;
                line-height: 1.7;
            }
            
            #rtpcr-desc > p {
                width: 550px;
                font-family: sans-serif;
                color: #4a4a4a;
            }
    
            #rtpcr-test-requirement {
                font-family: sans-serif;
                font-weight: 300;
                margin-left: 210px;
                line-height: 1.7;
                color: #4a4a4a;
            }
    
            #rtpcr-test-requirement h3 {
                font-family: sans-serif;
                font-weight: 450;
                color: teal;
            }
    
            #rtpcr-cart-reveal-top {
                display: flex;
                margin-top: 40px;
                color: #353333;
                /* font-weight: 250; */
                font-family: sans-serif;
            }
    
            #rtpcr-cart-reveal {
                /* border: 1px solid green; */
                width: 380px;
            }
    
            #rtpcr-cart-reveal-middle {
                display: flex;
                justify-content: space-between;
            }
    
            .rtpcr-cart-item-selected-btn {
                font-weight: 300;
                color: #353333;
                font-family: sans-serif;
            }
    
            /* #rtpcr-cart-item-selected {
                
            } */
    
            .rtpcr-cart-item-selected {
                font-weight: 330;
                color: #353333;
                font-family: sans-serif;
            }
    
            #rtpcr-cart-reveal-end {
                display: flex;
                justify-content: space-between;
            }
    
            #view-cart-btn-reveal {
                width: 100%;
                height: 45px;
                background-color: teal;
                color: white;
                border-radius: 5px;
                border: 0px;
                font-size: 15px;
            }
    
            #thyrocareDiv {
                display: flex;
            }
            
            #thyrocareDiv img {
                height: 35px;
                width: 60px;
                border: 0.1px solid gray;
                padding: 5px;
            }
    
            /* -----------------------------APP BENEFITS SECTION ------------------------------ */
            #appBenefits {
                display: flex;
                width: 70%;
                margin: auto;
                margin-top: 30px;
            }
    
            .appBenefitsCard  {
                /* width: 150px; */
                padding-left: 30px;
                margin-left: 40px;
                text-align: left;
                font-weight: 100;
                color: #5f676d;
                font-family: sans-serif;
                margin-bottom: 20px;
                
                /* border: 1px solid red; */
    
            }
    
            .appBenefitsCard > h4 {
                font-family: sans-serif;
                font-weight: 530;
            }
    
            #downloadAppSection {
                display: flex;
                margin-left: 300px;
                margin-top: 30px;
                margin-bottom: 30px;
            }
            
            #appLinks {
                margin-left: 100px;
                width: 600px;
                margin-top: 30px;
                /* border: 1px solid red; */
            }
    
            #appLinks > h2 {
                margin-left: 18px;
                font-family: sans-serif;
                font-weight: 300;
                color: #4f585e;
            }
    
            #app-store-container {
                display: flex;
                margin-top: 40px;
            }
    
            .AppStoreDiv {
                display: flex;
                width: 180px;
                align-items: center;
                height: 56px;
                border-radius: 10px;
                /* margin-left: 30px; */
                margin-left: 15px;
                background-color: #4a4a4a;
                /* border: 1px solid green; */
                padding-left: 20px;
            }
    
            .AppStoreDiv > p {
                margin-left: 15px;
                font-family: sans-serif;
                color: white;
            }
    
    
            /*-----------------------------------  FOOTER SECTION STARTS------------------------------------------------*/
              #healthcare-footer {
                background-color: rgb(243, 255, 255);
                font-family: sans-serif;
                font-size: 16px;
                font-weight: 250;
                height: 600px;
                display: flex;
                /* width: 80%; */
                margin: auto;
            }
    
            .footerColumns {
                margin-left: 120px;
            }
    
            #socialIconsContainer {
                display: flex;
            }
            .socialIcons {
                width: 30px;
                height: 30px;
                margin-left: 20px;
            }
    
           /*----------------------------------------------------  FOOTER SECTION ENDS----------------------------------------------------*/
    
             /*------------------------ Footer: Payment Partners Section --------------------*/
    
             #paymentPartnerSection {
                background-color: rgb(243, 255, 255);
                height: 150px;
            }
    
            #paymentPartners {
                display: flex;
                margin-left: 80px;
            }
    
            #paymentPartnersHeader {
                margin-left: 100px;
                font-family: sans-serif;
                font-weight: 400;
                margin-top: 0;
                color: #4a4a4a;
                font-weight: 600;
            }
    
            .paymentPartnerLogo {
                height: 48px;
                width: 48px;
                padding-left: 20px;
                margin-top: 15px;
            }
    
            #paymentPartners h3 {
                margin-left: 50px;
                font-family: sans-serif;
                font-weight: 400;
                color: #4a4a4a;
    
            }
    
    
        </style>
    </head>
    <body>
            <!--------------------------------------HTML NAVBAR HTML CODE START---------------------------------------->
    
            <body>
                <div id="navbar">
                    <div id="navtop">
                        <div id="mainlogo">
                          <a href="./index.html">  <img class="mainlogo" src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png" alt=""></a>
                        </div>
                        <div id="bar">
                            <select name="" id="select">
                                <option value="">Select Pincode</option>
                                <input id="searchbar" type="Search" placeholder="|   Search medicines/Healthcare products">
                                <div class="searchicon"><img id="searchicon"
                                        src="data:image/png;base64,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"
                                        alt=""></div>
                            </select>
                        </div>
        
                    </div>
                    <div id="navbottom">
                        <div id="left">
                            <div>Order Medicines</div>
                            <div>Healthcare Products</div>
                            <div>Lab Tests</div>
                            <div>RTPCR</div>
                        </div>
                        <div id="right">
                            <div><img src="https://assets.pharmeasy.in/web-assets/dist/275c07e1.svg" alt="">
                                <div class="center">Offers</>
                                </div>
                            </div>
                            <div><img src="https://assets.pharmeasy.in/web-assets/dist/5eb42971.svg" alt="">
                                <div class="center">Login/Signup</div>
                            </div>
                            <div><img src="https://assets.pharmeasy.in/web-assets/dist/21b0b5ba.svg" alt="">
                                <div class="center">Cart</div>
                            </div>
                        </div>
                    </div>
                </div>
            <!--------------------------------------HTML NAVBAR HTML CODE ENDS---------------------------------------->
            
            <!--------------------------------------MIDSECTION---------------------------------------->
            
            <div id="rtpcr-main-container">
                <div id="rtpcr-col-1">
                    <div id="rtpcr-midsection-1">
                        <h2>
                            Test Details
                        </h2>
                        <div id="covid-container">
                            <div id="covid-container-top-row">
                                <img id="covid-test-logo" src="https://assets.pharmeasy.in/web-assets/dist/6b3d644c.svg">
                                <h3>
                                    Covid-19 RTPCR (Coronavirus SARS-CoV2)
                                </h3>
                            </div>
                            <div id="covid-container-second-row">
                                <p>
                                    Available at 1 certified lab
                                </p>
                                <h3>
                                    ₹ 700 onwards
                                </h3>
                                <!-- THYROCARE DIV -->
                                <div id="thyrocareDiv" >
                                    <!-- <img src="https://s3.ap-south-1.amazonaws.com/pe-neon-public/diagnostics/staging/CompanyLogo/e24cc996bf8f3cb48d084a04d041df24.jpg"> -->
                                    <p>Selected from Pharmeasy Labs (Covid RTPCR)</p>
                                </div>
                                <button id="covid-test-select-button">
                                    <a>
                                        Select
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div id="rtpcr-midsection-2">
                        <div id="rtpcr-desc">
                            <h3>
                                Description
                            </h3>
                            <p>
                                The COVID-19 laboratory test can detect positive coronavirus cases. Any individual with symptoms like cough,
                                high fever, shortness of breath, respiratory and breathing difficulties, and with a history of international
                                travel or contact with Covid -19 positive cases, can book this test with prior consultation by General
                                Physician. The result of this test will be informed to the relevant authorities as mandated by the
                                government. Home sample collection will be done by an expert technician.
                            </p>
                        </div>
                        <div id="rtpcr-test-requirement">
                            <h3>
                                Test Requirement
                            </h3>
                            <p>
                                Sample Type:
                                Throat and Nasal Swab
                                Fasting Required:
                                Not Required
                            </p>
                        </div>
                    </div>
                </div>
                <div id="rtpcr-col-2">
                    <h3>
                        Please select a test to proceed
                    </h3>
                    <button id="view-cart-btn">
                        View Cart
                    </button>
                </div>
                <div id="rtpcr-cart-reveal">
                    
                    <div id="rtpcr-cart-reveal-top">
                        <img src="https://assets.pharmeasy.in/web-assets/dist/c4087ae1.svg">
                        <h3>
                            1 Item in Cart
                        </h3>
                    </div>
                    
                    <div id="rtpcr-cart-reveal-middle">
                        <h3 class="rtpcr-cart-item-selected" >
                            Covid-19 RTPCR (Coronavirus SARS - CoV2) -
                            
                        </h3>
                        <h3 class="rtpcr-cart-item-selected-btn">
                            ₹700
                        </h3>
                    </div>
    
                    <div id="rtpcr-cart-reveal-end">
                        <h3 class="rtpcr-cart-item-selected">
                            Total
                            
                        </h3>
                        <h3 class="rtpcr-cart-item-selected-btn">
                            ₹700
                        </h3>
                    </div>
                    <button id="view-cart-btn-reveal">
                        View Cart
                    </button>
                </div>
            </div>
            
    
            <!-- <hr> -->
    
    
            <!----------------------------------------APP BENEFITS-------------------------------------->
            <div id="appBenefits">
                <div class="appBenefitsCard">
                    <img src="https://assets.pharmeasy.in/web-assets/dist/9407515b.svg?dim=0x72&dpr=1&q=100">
                    <h4>
                        Trusted Labs
                    </h4>
                    <p>
                        Every test booked via PharmEasy is conducted by certified labs that are 100% verified and trustworthy.
    
                    </p>
                </div>
                <div class="appBenefitsCard">
                    <img src="https://assets.pharmeasy.in/web-assets/dist/0105ddc1.svg?dim=0x72&dpr=1&q=100">
                    <h4>
                        Home Visit
                    </h4>
                    <p>
                        With PharmEasy, you get a FREE sample pick-up* by professional phlebotomists from your home or preferred location.
                    </p>
                </div>
                <div class="appBenefitsCard">
                    <img src="https://assets.pharmeasy.in/web-assets/dist/fc71c500.svg?dim=0x72&dpr=1&q=100">
                    <h4>
                        Timely and Accurate Reports
                    </h4>
                    <p>
                        Once collected, samples will be sent to labs for processing. Detailed reports will be shared within a stipulated timeline.
                    </p>
                </div>
                <div class="appBenefitsCard">
                    <img src="https://assets.pharmeasy.in/web-assets/dist/4a11ac5a.svg?dim=0x72&dpr=1&q=100">
                    <h4>
                        Up to 70% OFF
                    </h4>
                    <p>
                        At PharmEasy, you save at every step! On diagnostic tests, get up to 70% OFF on various tests and test packages.
    
                    </p>
                </div>
            </div>
            <!-- <hr> -->
            <!----------------------------------------DOWNLOAD APP SECTION -------------------------------------->
            <div id="downloadAppSection">
                <div>
                    <img src="https://pharmeasy.in/_next/image?url=%2Ficons%2FfooterMobile.jpg&w=256&q=75">
                </div>
                <div id="appLinks">
                    <h2>
                        Download the App for Free
                    </h2>
                    <div id="app-store-container">
                        <div class="AppStoreDiv">
                            <img class="appStoreImg" src="https://pharmeasy.in/_next/image?url=%2Ficons%2FplayStore.png&w=32&q=75">
                            <p>
                                Google Play
                            </p>
                        </div>
                        <div class="AppStoreDiv">
                            <img class="appStoreImg" src="https://pharmeasy.in/_next/image?url=%2Ficons%2FappStore.png&w=32&q=75">
                            <p>
                                App Store
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <hr>
    
            <!------------------------------------------------------- FOOTER SECTION ------------------------------------------------->
            <div id="healthcare-footer">
                <!-- COLUMN 1 -->
                <div class="footerColumns">
                    <h4>
                        Our Company
                    </h4>
                    <p>
                        About Us
                    </p>
                    <p>
                        Careers
                    </p>
                    <p>
                        Blog
                    </p>
                    <p>
                        Partner with PharmEasy
                    </p>
                    <h4>
                        Our Services
                    </h4>
                    <p>
                        Order Medicine
                    </p>
                    <p>
                        Healthcare Products
                    </p>
                    <p>
                        Lab Tests
                    </p>
                </div>
                <!-- COLUMN 2 -->
                <div class="footerColumns" >
                    <h4>
                        Featured Categories
                    </h4>
                    <p>
                        Covid Essentials
                    </p>
                    <p>
                        Personal Care
                    </p>
                    <p>
                        Health Food and Drinks
                    </p>
                    <p>
                        Skin Care
                    </p>
                    <p>
                        Home Care
                    </p>
                    <p>
                        Ayurvedic Care
                    </p>
                    <p>
                        Sexual Wellness
                    </p>
                    <p>
                        Fitness & Supplements
                    </p>
                    <p>
                        Mother & Baby Care
                    </p>
                    <p>
                        Healthcare Devices
                    </p>
                    <p>
                        Surgicals & Dressings
                    </p>
                    <p>
                        Diabetic Care
                    </p>
                    <p>
                        Elderly Care
                    </p>
                    <p>
                        Accessories & Wearables
                    </p>
                    <p>
                        Beauty
                    </p>
                </div>
                <!-- COLUMN 3 -->
                <div class="footerColumns">
                    <h4>
                        Need Help
                    </h4>
                    <p>
                        Browse All Medicines
                    </p>
                    <p>
                        Browse All Molecules
                    </p>
                    <p>
                        Browse All Cities & Areas
                    </p>
                    <p>
                        FAQs
                    </p>
                    <h4>
                        Policy Info
                    </h4>
                    <p>
                        Editorial Policy
                    </p>
                    <p>
                        Privacy Policy
                    </p>
                    <p>
                        Vulnerability Disclosure Policy
                    </p>
                    <p>
                        Terms and condition
                    </p>
                    <p>
                        Customer Support Policy
                    </p>
                    <p>
                        Return Policy
                    </p>
                </div>
                <!-- COLUMN 4 -->
                <div class="footerColumns">
                    <h4>
                        FOLLOW US
                    </h4>
                    <div id="socialIconsContainer">
                        <img class="socialIcons" src="https://img.icons8.com/ios/344/instagram-new--v1.png">
                        <img class="socialIcons" src="https://img.icons8.com/ios/344/facebook-new.png">
                        <img class="socialIcons" src="https://img.icons8.com/ios/344/youtube-play--v1.png">
                        <img class="socialIcons" src="https://img.icons8.com/ios/344/twitter--v1.png">
                    </div>
                </div>
            </div>
             <!------------------------ FOOTER: PAYMENT PARTNERS SECTION ---------------------->
             <div id="paymentPartnerSection">
                <div>
                    <h3 id="paymentPartnersHeader">
                        Our Payment Partners
                    </h3>
                    <div id="paymentPartners">
                        <img class="paymentPartnerLogo" src="https://assets.pharmeasy.in/web-assets/dist/af0c6812.svg">
                        <img class="paymentPartnerLogo" src="https://assets.pharmeasy.in/web-assets/dist/0e010044.svg">
                        <img class="paymentPartnerLogo" src="https://assets.pharmeasy.in/web-assets/dist/1066bb1f.svg">
                        <img class="paymentPartnerLogo" src="https://assets.pharmeasy.in/web-assets/dist/3a1a533d.svg">
                        <img class="paymentPartnerLogo" src="https://assets.pharmeasy.in/web-assets/dist/fbea1701.svg">
                        <img class="paymentPartnerLogo" src="https://assets.pharmeasy.in/web-assets/dist/4733a49d.svg">
                        <img class="paymentPartnerLogo" src="https://assets.pharmeasy.in/web-assets/dist/b278e536.svg">
                        <img class="paymentPartnerLogo" src="https://assets.pharmeasy.in/web-assets/dist/0aca2077.svg">
                        <img class="paymentPartnerLogo" src="https://assets.pharmeasy.in/web-assets/dist/44a51ca5.svg">
                        <img class="paymentPartnerLogo" src="https://assets.pharmeasy.in/web-assets/dist/d058b00d.svg">
                        <img class="paymentPartnerLogo" src="https://assets.pharmeasy.in/web-assets/dist/e9445364.svg">
                        <h3>© 2022 PharmEasy. All Rights Reserved</h3>
                    </div>
                </div>
            </div>
    </body>
    </html>
    <script src="./rtcpr.js" >
    </script>`
}

isOk()