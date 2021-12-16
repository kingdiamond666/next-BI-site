import { table, minifyRecords } from "./utils/airTable";
import { validateCaptchaResponse } from '../../utils/validateCaptchaResponse';
const { IncomingWebhook } = require('@slack/webhook');
import fetch from 'node-fetch';
import { FB_PIXEL_ID } from "../../lib/fbpixel";
export default async (req, res) => {
  const {
    company_name,
    company_url,
    first_name,
    last_name,
    email,
    phone,
    message_long,
    budget,
    reference,
  } = req.body;
  try {
    const fields = req.body;
    const isValid = await validateCaptchaResponse(fields).catch((err) => {
        console.error(`Unable to call captcha verification service ${err}`);
        res.status(500).json({
            success: false,
            sessionId: sessionId,
            error: "ERR_FRM_CAPTCHA_UNREACHABLE"
        });
        return;
    });

    if (!isValid) {
        console.warn(`Unable to verify captcha for request ${sessionId}`);
        res.status(400).json({
            success: false,
            sessionId: sessionId,
            error: "ERR_FRM_CAPTCHA_FAIL"
        });
        return;
    }

    const createdRecords = await table.create([
      {
        fields: {
          company_name,
          company_url,
          first_name,
          last_name,
          email,
          phone,
          message_long,
          budget,
          reference,
        },
      },
    ]);

    const createdRecord = await {
      id: createdRecords[0].id,
      fields: createdRecords[0].fields,
    };

    let ts = Date.now();

    let date_ob = new Date(ts);
    let date = date_ob.getDate();
    let month = date_ob.getMonth() + 1;
    let year = date_ob.getFullYear();
    const fullUrl = company_url.substring(0,8) !== 'https://' ? `https://${company_url}` : company_url

    const slackLead = {
        "username": "Error notifier",
        "text": "New Lead Submission",
        "icon_emoji": ":bangbang:",
        "blocks": [
            {
                "type": "divider",
                "block_id": "divider2"
            },
            {
                "type": "header",
                "text": {
                    "type": "plain_text",
                    "text": "New Lead",
                    "emoji": true
                }
            },
            {
                "type": "actions",
                "elements": [
                    {
                        "type": "button",
                        "text": {
                            "type": "plain_text",
                            "emoji": true,
                            "text": "View Lead"
                        },
                        "style": "primary",
                        "value": "click_me_123",
                        "url": "https://www.pipedrive.com"
                    },
                    {
              					"type": "button",
              					"text": {
              						"type": "plain_text",
              						"text": "Company Site"
              					},
              					"url": `${fullUrl}`
              			}
                ]
            },
            {
                "type": "section",
                "fields": [
                    {
                        "type": "mrkdwn",
                        "text": `*Submit Date:*\n${month}-${date}-${year}`
                    }
                ]
            },
            {
                "type": "section",
                "fields": [
                    {
                        "type": "mrkdwn",
                        "text": "*Source:* \nDSAS Next Page"
                    },
                    {
                        "type": "mrkdwn",
                        "text": `*Created by:*\n<${company_url}|${company_name}>`
                    }
                ]
            }
        ],
        "attachments": [
            {
                "color": "#eed140",
                "fields": [
                    {
                        "title": "Name",
                        "value": `${first_name} ${last_name}`,
                        "short": true
                    },
                    {
                        "title": "Company Name",
                        "value": `${company_name}`,
                        "short": true
                    },
                    {
                        "title": "Email Address",
                        "value": `${email}`,
                        "short": true
                    },
                    {
                        "type": "divider",
                        "block_id": "divider1"
                    }
                ]
            }
        ]
    }
    const url = process.env.SLACK_URL



    const sentSlack = JSON.stringify(slackLead)
    const slackNotif = await fetch(url, {
        method: 'POST',
        header: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(slackLead)

    }).then(response => console.log(response))


//TODO: Prob use a response object to see what error mesage you are getting when trying to send the fetch post req to the slack API endpoint.
// Also make sure you are using the fetch API correctly.


    // console.log("this is the request");
    // console.log(req.body);

    let current_timestamp = Math.floor(new Date() / 1000);

        // const fbEvnt = await fetch(`https://graph.facebook.com/v13.0/${FB_PIXEL_ID}/events?access_token=${process.env.FB_ACCESS_TOKEN}`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         "data": [
        //         {
        //             "event_name": "Purchase",
        //             "event_time": 1639540843,
        //             "event_id": "event.id.123",
        //             "event_source_url": "http:\/\/theclubagency.com\/",         
        //             "action_source": "website",
        //             "user_data": {
        //                 "client_ip_address": "192.19.9.9",
        //                 "client_user_agent": "test ua",
        //                 "em": [
        //                     "309a0a5c3e211326ae75ca18196d301a9bdbd1a882a4d2569511033da23f0abd"
        //                 ],
        //                 "ph": [
        //                     "254aa248acb47dd654ca3ea53f48c2c26d641d23d7e2e93a1ec56258df7674c4",
        //                     "6f4fcb9deaeadc8f9746ae76d97ce1239e98b404efe5da3ee0b7149740f89ad6"
        //                 ],
        //                 "fbc": "fb.1.1554763741205.AbCdEfGhIjKlMnOpQrStUvWxYz1234567890",
        //                 "fbp": "fb.1.1558571054389.1098115397"
        //             },
        //             "custom_data": {
        //                 "value": 100.2,
        //                 "currency": "USD",
        //                 "content_ids": [
        //                     "product.id.123"
        //                 ],
        //                 "content_type": "product"
        //             },
        //             "opt_out": false
        //         },
        //         ]
        //     })
        // }).then(response => console.log(response))

    res.statusCode = 200;
    res.json(createdRecord);
  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    res.json({ msg: "Somethin went awry" });
  }
};
