# Dial4dough -- App

Looking for a creative Programers.
- What is a creative programer? 
	A person who is passionate about their craft, they would code for free if their wasn't need for money.
	-- Skilled with PHP, Javascript, php --> Nodejs
	-- Mobile Application Knowledge
	-- famo.us -- Knowledge **Great**
	-- Twilio -- Javascript Knowledge
	-- GeoLocation integration
	-- Google Charts
	-- Paypal Api.



	##Things Needed for the site.
	Api For Pap:
		When user signs up for one of the user.roles send information to pap(campaign)
		campaign.emails -- will be handles by pap.
		when user login -- create user session that will synce with pap.
		I need an api that will access the papApi.php - Data will be displayed in the users Panel.
		-Information to display.
			Payment information
			credits due
			ads that have been clicked
			tracking data of what add has been clicked.

	##Modules --
		Login - should recoginze the type of user that is logging in
		Register/Payment page -- This page should connect to paypal.
		user.Roles determine the cost to be paid to paypal.
		affiliate tracking with the pap api.


	The advertiser site --
	Form will send data to the dialpad.
	The user role will determine how many ads are displayed.
	user.role.platinum = user will have instant access to ads. (maximum.daily amount -- Per year)
	user.role.gold  = user will have access similar to platinum member (maximum.daily amount -- Limited per Month)
	user.role.bronze = user will have limited access. (daily.limits[depends on the amount left from primary list])


	##using Nodejs for expansion to browser apps/Desktop applications.

	#There are 3 Databases. -- Mongodb - For transfering from AdPad
		-- firebase? -- Instant Update list -- For platinum and Gold members
		-- Mongodb -- The list will have some user data, and details of the Ads.

	##Needs Completion 
	-- Login-- The login page is not functioning properly.
	--Register-- needs the user.role selections
		-- user information that will sync properly with Pap.
	-- Dialpad-- This is function will pull from ad.user db and place in rows. 
		The modal pop up(or page change) will.
		Twilio Function will be attached to the modal. The depending on the ad.type -- the twilio functions will synce up
		the affiliate Id and the user.phone. The user will have the options to confirm ad.
		-- After ad - A rating/Review option will asked the user "What do they think of the ad". After selection the gets user.role.credits.


First Step Integrations:
-- The PAP API will be used for the central point for the data.
	The mongod Database is used for the adPad to Dial4dough --for instant updates  --
	-- Instant help integrations
- PAP: php -> nodejs - The api will interact with login/regististration
	- payouts --
	- Add user to appropiate campains e.g. user.role. --Platinum/bronze/gold
	- ip -- Address -- location
	- Affiliate Panel

- Twilio Connection -- 
	- Ater the ad is viewed -- send completion data to PAP.

	