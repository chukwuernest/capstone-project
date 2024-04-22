# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

MY README
install react icon

install react router dom(npm i react-router-dom)

this is nav copy

 <!-- <div className='navbar1'>
      {/* this is the nav code */}
      <nav className='navbar'>
        <img src={logo} alt='logo' />
        <div className='mainNav'>
          <ul>
            <li>
              <a href='/HomePage'>Home</a>
            </li>
            <li>
              <a href='/AboutPage'>About</a>
            </li>
            <li>
              <a href='/ServicesPage'>Services</a>
            </li>
            <li>
              <a href='/ContactPage'>Contact</a>
            </li>
          </ul>
        </div>
        <div className='otherNav'>
          <ul>
            <li>
              <a href='ReportPage'>report case</a>
            </li>
          </ul>
        </div>
      </nav>
    </div> -->

this is for the home
.home_Image {
display: flex;
justify-content: space-around;
}
#images img {
object-fit: fill;
}
.next img {
width: 815.3px;
height: 543px;
flex: 80%;

opacity: 0px;
}
.homeI {
display: flex;
padding-top: 6rem;
}
.firstH {
width: 815.3px;
height: 543px;

margin-bottom: 2rem;
opacity: 0.8;
border: 0.5px solid peru;
background-image: url('../src/img/image\ 7\ \(2\).svg');
background-size: cover;
background-repeat: no-repeat;
background-position: center;
}
.secondH {
width: 624.7px;
height: 543px;
left: 815px;
opacity: 0.8;
border: 0.5px solid peru;
background-image: url('../src/img/frame1b.svg');
background-size: cover;
background-repeat: no-repeat;
background-position: center;
}

.first {
position: relative;
}
.notes {
position: absolute;
}
/_ try _/

- {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

/_ Position image container relatively _/
.first {
position: relative;
}

/_ Style the text overlay _/
.note {
position: absolute;
}
.note h2 {
width: 600px;
height: 147px;
color: #fff;
font-family: Montserrat;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: normal;
padding: 6rem 6rem;
margin: 2rem;
}
.note h4 {
color: #fff;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 900;
width: 257px;
height: 20px;
top: 448px;
left: 103px;
gap: 0px;
opacity: 0px;
line-height: 19.5px;
text-align: left;
margin: 16rem 0 0 8rem;
}
/_ this is fo the know more about us _/
#lineHead {
display: flex;
padding: 0 0 0 3rem;
}
#line {
width: 10%;
height: 2px;
background: #525560;
border: 2px solid #181818;
margin: 1rem 0.5rem 1rem 0;
}
.knowingMore h4 {
color: #090446;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: 2px;
text-transform: uppercase;
}
.moreAboutUs {
display: flex;
justify-content: space-between;
padding: 0 0 0 3rem;
}
.infor_know {
padding: 0 0 0 3rem;
}
.infor_know h3 {
width: 500px;
color: #090446;
font-family: Montserrat;
font-size: 2rem;
font-style: normal;
font-weight: 700;
line-height: normal;
padding-bottom: 50px;
}
.infor_know p {
width: 450px;
color: var(--BodY-Text, #323232);
font-family: Montserrat;
font-size: 1.1rem;
font-style: normal;
font-weight: 400;
line-height: normal;
padding-bottom: 50px;
}
#learn_more {
border-radius: 4px;
background: #f46188;
backdrop-filter: blur(40px);
color: #fff;
text-align: right;
font-family: Montserrat;
font-size: 0.8rem;
font-style: normal;
font-weight: 600;
line-height: normal;
padding: 0.5rem;
}
.imageKnowH {
width: 400px;
height: 500px;
border-radius: 2rem;
margin: 2rem 5rem 3rem 0;
background-image: url('../src/img/image\ 12\ \(1\).svg');
background-size: cover;
background-repeat: no-repeat;
background-position: center;
}
.imageKnowA {
width: 500px;
height: 548px;
border-radius: 2rem;
margin: 0 3rem 3rem;
background-image: url('../src/img/frameabout2.svg');
background-size: cover;
background-repeat: no-repeat;
background-position: center;
}
/_ sponsors design _/
.sponsor_h {
display: flex;
padding-left: 16rem;
}
.sponsor_h p {
background: #525560;
border: 0.01px solid #525560;
margin: 1rem 0.5rem 1rem 0;
width: 950.258px;
}
.sponsor_h h3 {
color: #525560;
font-size: 0.8rem;
margin: 0.1rem;
}
.sponsor_I {
display: flex;
margin-left: 16.5rem;
margin-top: 0.5rem;
margin-bottom: 0.5rem;
}
.try1 {
display: flex;
margin-left: 2.5rem;
}
.try2 {
display: flex;
margin-left: 2.5rem;
}
.try3 {
display: flex;
margin-left: 2.5rem;
}
.try4 {
display: flex;
margin-left: 2.5rem;
}
.try5 {
display: flex;
margin-left: 2.5rem;
}
.try6 {
display: flex;
margin-left: 2.5rem;
}
/_ what we do _/
.what_W_D {
display: flex;
width: 1540px;
margin-left: -5rem;
height: 700px;
background: rgba(244, 97, 136, 0.2);
justify-content: space-between;
padding: 0 0 0 3rem;
}
.what {
padding: 3rem;
}
#wHead {
display: flex;
padding: 0 0 0 -2rem;
margin-top: 2rem;
}
#wHead p {
width: 10%;
height: 1px;
background: #525560;
border: 1px solid #525560;
}
#wHead h4 {
color: #090446;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 2px;
text-transform: uppercase;
}
.what_k h3 {
width: 500px;
color: #090446;
font-family: Montserrat;
font-size: 2rem;
font-style: normal;
font-weight: 700;
line-height: normal;
padding-bottom: 50px;
}
.what_k p {
width: 450px;
color: #323232;
font-family: Montserrat;
font-size: 1.1rem;
font-style: normal;
font-weight: 400;
line-height: normal;
padding-bottom: 30px;
}
.what_k {
padding: 0 0 0 3rem;
}
.what_i {
width: 513.79px;
height: 603.28px;
top: 73.67px;
left: 828.05px;
gap: 0px;
border-radius: 2rem;
opacity: 90px;
/_ padding: 4rem 3rem 1rem 0; _/
margin: 2rem 5rem 3rem 0;
background-image: url('../src/img/whatwedo.svg');
background-size: cover;
background-repeat: no-repeat;
background-position: center;
}

.done {
padding: 3rem;
}
.done_k h3 {
width: 640px;
color: #090446;
font-family: Montserrat;
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: normal;
padding: 3rem 0 3rem 0;
}
.done_k p {
width: 450px;
color: #323232;
font-family: Montserrat;
font-size: 1.1rem;
font-style: normal;
font-weight: 400;
line-height: normal;
padding-bottom: 30px;
}
.done_k {
padding: 0 0 0 3rem;
font-family: Montserrat;
font-size: 32px;
font-weight: 700;
line-height: 39.01px;
text-align: left;
}
#wdone {
display: flex;
padding: 0 0 0 -2rem;
margin-top: 2rem;
}

#wdone p {
width: 10%;
height: 1px;
background: #525560;
border: 1px solid #525560;
}

.we_done {
padding: 0 0 0 3rem;
width: 1440px;

border: 1px solid rgba(82, 85, 96, 0.5);
background: #fff;
}
/_ diplay part for the three pictures _/

.all {
display: flex;
justify-content: space-between;
padding-bottom: 8rem;
}

#learn_mored {
border-radius: 4px;
background: #fff;
color: #525560;
text-align: right;
font-family: Montserrat;
font-size: 0.8rem;
font-style: normal;
font-weight: 600;
line-height: normal;
width: 100px;
padding: 0.8rem;
margin: 0.8rem;
justify-content: center;
text-align: center;
}
.we_done {
width: 1540px;
margin-left: -5rem;
}
.d_oneI {
width: 415.15px;
height: 381.34px;
border-radius: 14.39px 0px 0px 0px;
border-radius: 2rem;
opacity: 90px;
margin: 0rem 1rem 3rem 0;
background-image: url('../src/img/image\ 16.svg');
background-size: cover;
background-repeat: no-repeat;
background-position: center;
}
.d_twoI {
width: 415.15px;
height: 381.34px;
border-radius: 14.39px 0px 0px 0px;
border-radius: 2rem;
opacity: 90px;
margin: 0 1rem 3rem 0;
background-image: url('../src/img/image\ 15.svg');
background-size: cover;
background-repeat: no-repeat;
background-position: center;
}
.d_threeI {
width: 415.15px;
height: 381.34px;
border-radius: 14.39px 0px 0px 0px;
border-radius: 2rem;
opacity: 90px;
margin: 0 1rem 3rem 0;
background-image: url('../src/img/image\ 5.svg');
background-size: cover;
background-repeat: no-repeat;
background-position: center;
}
.d_one {
position: relative;
}
.d_one h3 {
position: absolute;
top: 50px;
margin: 3rem;
color: #fff;
}
.d_two {
position: relative;
}
.d_two h3 {
position: absolute;
top: 50px;
margin: 3rem;
color: #fff;
}
.d_three {
position: relative;
margin-right: 2.5rem;
}
.d_three h3 {
position: absolute;
top: 50px;
margin: 3rem;
color: #fff;
}

.d_three a {
position: absolute;
top: 15rem;
right: 15rem;
color: #fff;
justify-content: center;
}
.d_two a {
position: absolute;
top: 15rem;
right: 15rem;
color: #fff;
justify-content: center;
}
.d_one a {
position: absolute;
top: 15rem;
right: 15rem;
color: #fff;
justify-content: center;
}
span {
display: block;
}
/_ this is for ellipse _/
.rainbow {
display: flex;
background: #000000e5;

height: 546.36px;
color: #fff;
width: 1540px;
margin-left: -5rem;
}
.rainbow_right {
margin: 8rem 2rem 3rem 4rem;
}
.rainbow_right h3 {
font-family: Montserrat;
font-size: 32px;
font-weight: 700;
line-height: 39.01px;
text-align: left;
margin-bottom: 2rem;
}
.rainbow_right p {
font-family: Montserrat;
font-size: 16px;
font-weight: 400;
line-height: 19.5px;
text-align: left;
opacity: 0.6;
}
.ellipse {
margin: auto;
position: relative;
width: 50vh;
height: 50vh;
border-radius: 50%;
margin: 6rem 5rem 0rem 0rem;
background: repeating-conic-gradient(
from 0deg,
#bef3c0 0deg 144deg,
#ac94f1 144deg 270deg,
#fff0ca 270deg 306deg,
#f9cf64 306deg 324deg,
#f38fbf 324deg 360deg
);
}
.ellipse:after {
position: absolute;
top: 50px;
bottom: 50px;
left: 50px;
right: 50px;
background: black;
content: '';
border-radius: 50%;
}

#rainbow_buttom1 {
display: inline-flex;
}
#rainbow_buttom2 {
display: inline-flex;
}
#rainbow_buttom1 p {
padding: 5rem 1rem 0 0;
opacity: 1;
}
#rainbow_buttom2 p {
padding: 1.5rem 1rem 0 0;
opacity: 1;
}
.p1 span {
display: inline;
background: #bef3c0;
padding: 0.2rem 0.6rem 0 0.6rem;
margin-right: 0.3rem;
}
.p2 span {
display: inline;
background: #ac94f1;
padding: 0.2rem 0.6rem 0 0.6rem;
margin-right: 0.3rem;
}
.p3 span {
display: inline;
background: #fff0ca;
padding: 0.2rem 0.6rem 0 0.6rem;
margin-right: 0.3rem;
}
.p4 span {
display: inline;
background: #f9cf64;
padding: 0.2rem 0.6rem 0 0.6rem;
margin-right: 0.3rem;
}
.p5 span {
display: inline;
background: #f38fbf;
padding: 0.2rem 0.6rem 0 0.6rem;
margin-right: 0.3rem;
}
/_ Join as a volunteer _/
.join_volunteer {
text-transform: capitalize;
background: #fff;
position: relative;
width: 1439px;
height: 500.36px;
}
.volunteer {
position: absolute;

top: 22rem;
left: 37rem;
background: #f46188;
border-radius: 0.1rem;
padding: 0.5rem;
color: #fff;
}
.donate {
position: absolute;
top: 22rem;
left: 50rem;
background: #fff;
border-radius: 0.1rem;
padding: 0.5rem;
color: #181818;
}
.join_volunteer p {
position: absolute;
top: 7rem;
width: 700px;
height: 156px;
top: 7rem;
left: 25rem;
color: #090446;
font-family: Montserrat;
font-size: 32px;
font-weight: 700;
line-height: 39.01px;
text-align: center;
}

.backImg {
width: 100%;
height: 100vh;
background-image: url('../src/img/image\ 17.svg');
background-size: cover;
background-repeat: no-repeat;
background-position: center;
border-radius: 20px;
width: 1300px;
height: 455px;
margin: 3rem 0 0 4rem;
opacity: 0.7;
}
#Our_Events {
padding-left: 4rem;
display: flex;
padding-top: 1rem;
}
#Our_Events h4 {
color: #323232;
font-family: Montserrat;
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
#Our_Events p {
margin-top: 1.5rem;
margin-left: 0.7rem;
width: 70%;
height: 1px;
background: #525560;
border: 1px solid #525560;
}
.Our_Events h3 {
padding-left: 4rem;
color: #000;
font-family: Roboto;
font-size: 25.703px;
font-style: normal;
font-weight: 700;
line-height: 150%;
}
.next_event {
display: flex;
justify-content: space-evenly;
padding-top: 3rem;
padding-bottom: 3rem;
}
#next_event1 {
text-transform: uppercase;
border-radius: 20px;
border: 0.918px solid #525560;
background: #a73554;
width: 500px;
height: 223px;
margin-left: rem;
display: flex;
}

#next_event1 p:nth-child(1) {
padding: 1rem 1.5rem 0 2rem;
font-size: 3rem;
top: 4335.99px;
left: 134.72px;
gap: 0px;
border: 0.92px 0px 0px 0px;
opacity: 0px;
color: #fff;
}
#next_event1 span {
font-size: 1rem;
padding-left: 0.8rem;
}
.nextandline1 {
position: relative;
}
.nextandline1 h4 {
margin-top: 2rem;
color: #eee5e5c2;
opacity: 0.5rem;
}
.nextandline1 p {
position: absolute;
top: 3rem;
margin-left: 7rem;
width: 15%;
height: 1px;
background: #525560;
border: 1px solid #525560;
}
.nextandline1 h3 {
padding-left: 2rem;
padding-top: 1rem;
color: #fff;
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
.nextandline1 a {
position: absolute;
top: 5rem;
left: 20rem;
background-color: #fff;
border-radius: 50%;
color: #000;
padding: 0.7rem;
}
/_ next_event 2 _/
#next_event2 {
text-transform: uppercase;
border-radius: 20px;
border: 0.918px solid #525560;
background: #a73554;
width: 500px;
height: 223px;
margin-right: 15rem;
display: flex;
}
#next_event2 p:nth-child(1) {
padding: 1rem 1.5rem 0 2rem;
font-size: 3rem;
top: 4335.99px;
left: 134.72px;
gap: 0px;
border: 0.92px 0px 0px 0px;
opacity: 0px;
color: #fff;
}
#next_event2 span {
font-size: 1rem;
padding-left: 0.8rem;
}
.nextandline2 {
position: relative;
}
.nextandline2 h4 {
margin-top: 2rem;
color: #eee5e5c2;
opacity: 0.5rem;
}
.nextandline2 p {
position: absolute;
top: 3rem;
margin-left: 7rem;
width: 15%;
height: 1px;
background: #525560;
border: 1px solid #525560;
}
.nextandline2 h3 {
padding-left: 2rem;
padding-top: 1rem;
padding-right: 3rem;
color: #fff;
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
.nextandline2 a {
position: absolute;
top: 5.5rem;
left: 21rem;
background-color: #fff;
border-radius: 50%;
color: #000;
padding: 0.7rem;
}
/_ footerHome _/
.footerHome {
display: flex;

height: 385.38px;
background: #642ab6;
width: 1540px;
margin-left: -5rem;
}

.foot_img img {
width: 149.091px;
justify-content: center;
align-items: center;
align-content: center;
margin: 4rem;
}
.foot_links1 {
margin-top: 5rem;
font-family: Montserrat;
font-size: 1rem;
font-weight: 400;
line-height: 18.7px;
text-align: left;
}
.foot_links1 li {
padding: 1rem;
}
.foot_links1 li a {
color: #c7bcbc;
}
.foot_links1 li a:hover {
color: #fff;
}
.foot_links2 {
margin-top: 5rem;
font-family: Montserrat;
font-size: 1rem;
font-weight: 400;
line-height: 18.7px;
text-align: left;
}
.foot_links2 li {
padding: 1rem;
margin-left: 6rem;
}
.foot_links2 li a {
color: #c7bcbc;
}
.foot_links2 li a:hover {
color: #fff;
}
.foot_links3 {
margin-top: 5rem;
font-family: Montserrat;
font-size: 1rem;
font-weight: 400;
line-height: 18.7px;
text-align: left;
}
.foot_links3 li {
padding: 1rem;
margin-left: 6rem;
}
.foot_links3 li a {
color: #c7bcbc;
}
.foot_links3 li a:hover {
color: #fff;
}
.foot_sub h2 {
font-family: Montserrat;
font-size: 2.5rem;
font-weight: 700;
line-height: 46.74px;
text-align: left;
color: #fff;
padding-top: 9rem;
width: 23rem;
}
.foot_sub {
padding-left: 5rem;
}
.foot_sub form {
margin-top: 2rem;
}
.subform {
position: relative;
}
.foot_sub input {
position: absolute;

padding: 1rem;
width: 70%;
background: #642ab6;
margin-right: 7rem;
}
.foot_sub input::placeholder {
padding-left: 40%;
}
.foot_sub button {
position: absolute;
margin-left: 30.1rem;
margin-top: 1.6rem;
padding: 1rem;
width: 10%;
}

<!-- this is home -->
