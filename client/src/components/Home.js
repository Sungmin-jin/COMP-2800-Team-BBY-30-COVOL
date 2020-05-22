import React from 'react';
import { connect } from 'react-redux';

//CSS
import './../styles/Home.css';

//Images
import volunteerPic from './../image/volunteer.jpg';

//Creates the home page with smaller components
const Home = ({ auth: { user } }) => {
  return (
    <div className='home'>
      <p className='lead'>Welcome {user && user.name}</p>
      <CovolInfo />
      <HomePageCreateVolunteerListingBtn />
      <HomePageManageVolunteerListingsBtn />
      <HomePageFindVolunteerListingsBtn />
    </div>
  );
};

//Creates the description and picture component for the home page
function CovolInfo() {
  return (
    <div className='homeInfo'>
      <div className='homeInfoDesc'>
        <h3 className='homeInfoDescHeader'>What is Covol?</h3>
        <p>Covol is an easy way for anyone to volunteer. </p> <br></br>
        <p>
          {' '}
          Our aim is to make the process of volunteering and finding volunteers
          easy. You can easily make a posting to find volunteers, manage your
          listed postings, or search through other's postings to find the one
          for you.
        </p>
      </div>

      <div className='homeInfoPic'>
        <img src={volunteerPic} alt='Volunteer picture'></img>
      </div>
    </div>
  );
}

//Creates the Create Volunteer Listing button for the home page
function HomePageCreateVolunteerListingBtn() {
  return (
    <div className='homeBtnDiv'>
      <a className='homeBtn' href='/createvolunteerlisting'>
        Create Volunteer Listing
      </a>
    </div>
  );
}

//Creates the Manage Volunteer Listing button for the home page
function HomePageManageVolunteerListingsBtn() {
  return (
    <div className='homeBtnDiv'>
      <a className='homeBtn' href='/managevolunteerlistings'>
        Manage Volunteer Listings
      </a>
    </div>
  );
}

//Creates the Find Volunteer Listings button for the home page
function HomePageFindVolunteerListingsBtn() {
  return (
    <div className='homeBtnDiv'>
      <a className='homeBtn' href='/findvolunteerlistings'>
        Find Volunteer Listings
      </a>
    </div>
  );
}

//Connects the component to the redux store
const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps)(Home);
