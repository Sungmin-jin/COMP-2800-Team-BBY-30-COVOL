import React from 'react';
import { connect } from 'react-redux';
import './../styles/Home.css';

function Home() {
    return (
      <div className='home'>
          {/* add in the user name function here */}
          <HomePageCreateVolunteerListingBtn />
          <HomePageManageVolunteerListingsBtn />
          <HomePageFindVolunteerListingsBtn />
          <HomePageAccountManagementBtn />
      </div>
    );
}
//function to display the user's name here 

function HomePageCreateVolunteerListingBtn() {
    return (
        <div className='homeBtnDiv'>
            <a className='homeBtn' href='/CreateVolunteerListing'>
                Create Volunteer Listing
            </a>
        </div>
    );
}

function HomePageManageVolunteerListingsBtn() {
    return (
        <div className='homeBtnDiv'>
            <a className='homeBtn' href='/ManageVolunteerListings'>
                Manage Volunteer Listings
            </a>
        </div>
    );
}

function HomePageFindVolunteerListingsBtn() {
    return (
        <div className='homeBtnDiv'>
            <a className='homeBtn' href='/FindVolunteerListings'>
                Find Volunteer Listings
            </a>
        </div>
    );
}

function HomePageAccountManagementBtn() {
    return (
        <div className='homeBtnDiv'>
            <a className='homeBtn' href='/dashboard'>
                Account Management
            </a>
        </div>
    );
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
  });

export default connect(mapStateToProps)(Home);