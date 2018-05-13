/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "imperial",

	modules: [
		/*{
			widget: "alert",
		},*/
		{
			module: "alert",
			config: {
					position: "left",
				}
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left",
			config: {
					timezone: "America/Chicago",
					secondsColor: "#66ff33"
				}
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check-o ",
						url: "webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third",
			config: {
			compliments: {
				anytime: [
					"Hey there Mom !"
				],
				morning: [
					"Good morning, Mom!",
					"Enjoy your day!",
					"How was your sleep?"
				],
				afternoon: [
					"Hello, Mom !",
					"You look awesome!",
					"Looking good today!"
				],
				evening: [
					"Wow, you look ravishing!",
					"You look nice!",
					"Hi, Mom!"
					]
				}
			}
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Frisco",
				locationID: "4692559",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "1d539af6a09c1eb9d406ae3229889905"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "New York",
				locationID: "5128581",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "YOUR_OPENWEATHER_API_KEY"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					/*{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					},*/
					{
						title: "NBC DFW",
						url: "https://www.nbcdfw.com/news/top-stories/?rss=y&summary=y"
						/*url: "https://timesofindia.indiatimes.com/rssfeedstopstories.cms?x=1"*/
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
		/*{
			module: 'DailyXKCD',
			position: 'bottom_left',
			config: {
					invertColors: true,
					title: true,
					altText: false,
					limitComicHeight: 150
				}
		},*/
		{
    			module: 'MMM-Assistant',
    			disabled: false,
    			position: 'bottom_left',
    			config: {
        			assistant: {
            				   auth: {
                				 	keyFilePath:     "./assets/google-client-secret.json",  // REQUIRED (Google Assistant API) -- OAuth2 x509 cert
                				 	savedTokensPath: "./assets/google-access-tokens.json"   // REQUIRED (Google Assistant API) -- accesss_token & refresh_token
            					 },
            				   conversation: {
                			   			lang: 'en-US',
                						audio: {
                    						encodingIn: "LINEAR16",             // Default. No need to change.
                    						sampleRateOut: 16000                // Default. No need to change.
                					}
            				  },
       				 },
        			 snowboy: {
            				  models: [
                				  	{
                    						file: "./resources/smart_mirror.umdl",// This file define your MM wake word. (See doc notes.)
                    						sensitivity: 0.5,
                    						hotwords : "MIRROR"                 // Default model: "MIRROR". (This is not the wake word!)
                				  	},
                				  	{
                    						file: "resources/snowboy.umdl",     // This file define your GA wake word. (See doc notes.)
                    						sensitivity: 0.5,
                    						hotwords : "ASSISTANT"              // Default model: "ASSISTANT". (This is not the wake word!)
                				  	}
            					  ]
        				   },
        			  record: {
            				  	threshold: 0,                 // Default. No need to change.
            				  	verbose: false,               // Deafult: true  -- for checking recording status.
            				  	recordProgram: 'rec',         // You can use 'arecord', 'sox', but we recommend 'rec'
            				  	silence: 2.0                  // Default. No need to change.
        				  },
        			  stt: {
            				auth: [
					      {                                             // You can use multiple accounts to save money
                				projectId:   'magicmirror-3a098',                  // REQUIRED (Google Voice API) -- project_id
                				keyFilename: './assets/google-private-key.json'  // REQUIRED (Google Voice API) -- service_account / private_key
            				}],
            			  request: {
                				encoding: 'LINEAR16',     // Default. No need to change.
                				sampleRateHertz: 16000,   // Default. No need to change.
                				languageCode: 'en-US'     // [en-US]  To set the default GA speech request language.
                                          	// (See: https://cloud.google.com/speech/docs/languages)
            				   },
        			},
        			speak: 	{
            					useAlert: true,               // [true]  Enable this to show the understood text of your speech
            					language: 'en-US',            // [en-US] To set the default GA speech reply language.
        				},
       	 			alias: [{                         // You can use aliases for difficult pronunciation or easy using.
                			"help :command" : ["teach me :command", "what is :command"]
        			}]
    			}
		}, // END
		{
			module: "phone_notification",
            		position: "bottom_right",
            		header: 'Phone Notifications',
            		config:{
                			accessToken: "o.NzU9uNtNuNnvDOTz3jPyBRSSEK6j9Ggl",
                			numberOfNotifications: 2,
                			displayNotificationIcon: true,
                			displayMessage: true,
                			displayCount: false,
                		/*alert: true,*/
                			fade: true,
                			maxCharacters: 50
            			},
		},
    	],
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
