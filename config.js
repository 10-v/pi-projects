/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = 
{
        address: "0.0.0.0", // Address to listen on, can be:
                              // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
                              // - another specific IPv4/6 to listen on a specific interface
                              // - "", "0.0.0.0", "::" to listen on any interface
                              // Default, when address config is left out, is "localhost"
        port: 8080,
        ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1", "76.187.70.226","192.168.86.20","192.168.86.250"], // Set [] to allow all IP addresses
                                                               // or add a specific IPv4 of 192.168.1.5 :
                                                               // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
                                                               // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
                                                               // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

        language: "en",
        timeFormat: 24,
        units: "imperial",
        modules: [
                // Alert module
                {
                        module: "alert",
                        config: 
                        {
                                position: "left",
                        }
                },

                // Update Notification Module
                {
                        module: "updatenotification",
                        position: "top_bar"
                },
                
                // Clock module  
                {
                        module: "clock",
                        position: "top_left",
                        config: 
                        {
                                  timezone: "America/Chicago",
                                  secondsColor: "#66ff33"
                        }
                },

                // Calendar module
                {
                        module: "calendar",
                        header: "US Holidays",
                        position: "top_left",
                        config: 
                        {
                                calendars: 
                                [
                                        {
                                                symbol: "calendar-check-o ",
                                                url: "webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics"
                                        }
                                ]
                        }
                },

                // Compliments module
                {
                        module: "compliments",
                        position: "lower_third",
                        config: 
                        {
                                compliments: 
                                {
                                        anytime: 
                                        [
                                                "Hey there Mom !"
                                        ],
                                        morning: 
                                        [
                                                "Good morning, Mom!",
                                                "Enjoy your day!",
                                                "How was your sleep?"
                                        ],
                                        afternoon: 
                                        [
                                                "Hello, Mom !",
                                                "You look awesome!",
                                                "Looking good today!"
                                        ],
                                        evening: 
                                        [
                                                "Wow, you look ravishing!",
                                                "You look nice!",
                                                "Hi, Mom!"
                                        ]
                                }
                        }
                },
                
                // Current weather module  
                {
                        module: "currentweather",
                        position: "top_right",
                        config: 
                        {
                                location: "Frisco",
                                locationID: "4692559",  //ID from http://www.openweathermap.org/help/city_list.txt
                                appid: "1d539af6a09c1eb9d406ae3229889905"
                        }
                },
                
                // Weather Forecast module
                {
                        module: "weatherforecast",
                        position: "top_right",
                        header: "Weather Forecast",
                        config: 
                        {
                                location: "New York",
                                locationID: "5128581",  //ID from http://www.openweathermap.org/help/city_list.txt
                                appid: "YOUR_OPENWEATHER_API_KEY"
                        }
                },

                // New Feed module                
                {
                        module: "newsfeed",
                        position: "bottom_bar",
                        config: 
                        {
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

                // Chromecast module 
                {
                    module: "MMM-chromecast",
                    position: "top_center",
                },

                // Push Phone Notifications to MM  
                {
                      module: "PushBulletNotes",
                      header: "Notifications",
                      disabled: false,
                      position: "bottom_left", // Or any valid MagicMirror position.
                      config: 
                      {
                          accessToken: "o.NzU9uNtNuNnvDOTz3jPyBRSSEK6j9Ggl",
                          numberOfNotifications: 5,
                          displayNotificationIcon: true,
                          displayMessage: true,
                          displayCount: true,
                          fade: true,
                          maxMsgCharacters: 50,
                          maxHeaderCharacters: 32
                      }
                },                

                /*// Google Maps Traffic   
                {
                    module: 'MMM-GoogleMapsTraffic',
                    position: 'bottom_left',
                    config: 
                    {
                        key: 'AIzaSyCnruVlo8gDr7LaqJbXBXRzEzxz8ZzotKM',                        
                        lat: 33.1013779,
                        lng: -96.8181364,
                        height: '300px',
                        width: '300px'
                    }
                },*/

                
                // Module Phone Notification    
                /*{
                        module: "phone_notification",
                        position: "bottom_right",
                        header: 'Phone Notifications',
                        config:{
                                        accessToken: "o.NzU9uNtNuNnvDOTz3jPyBRSSEK6j9Ggl",
                                        numberOfNotifications: 2,
                                        displayNotificationIcon: true,
                                        displayMessage: true,
                                        displayCount: false,*/
                                        /*alert: true,*/
                                        /*fade: true,
                                        maxCharacters: 50
                                },
                },*/
        ],
}; 

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}