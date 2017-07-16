// 20170716194107
// https://goeuro.atlassian.net/rest/api/2/search?jql=project=AD%20AND%20resolution=unresolved%20AND%20%22story%20points%22=null

export default {
  "expand": "schema,names",
  "startAt": 0,
  "maxResults": 50,
  "total": 118,
  "issues": [
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "88095",
      "self": "https://goeuro.atlassian.net/rest/api/2/issue/88095",
      "key": "AD-1249",
      "fields": {
        "fixVersions": [

        ],
        "resolution": null,
        "customfield_12800": null,
        "customfield_12802": null,
        "customfield_12801": null,
        "customfield_12804": null,
        "customfield_12803": null,
        "customfield_12806": null,
        "customfield_12805": null,
        "customfield_10903": null,
        "lastViewed": "2017-07-16T16:18:53.820+0200",
        "customfield_12000": null,
        "customfield_12400": null,
        "priority": {
          "self": "https://goeuro.atlassian.net/rest/api/2/priority/6",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/priority_major.gif",
          "name": "Normal (P3)",
          "id": "6"
        },
        "customfield_10102": null,
        "customfield_12402": null,
        "labels": [

        ],
        "customfield_12401": null,
        "customfield_11303": null,
        "customfield_11305": null,
        "customfield_11306": null,
        "aggregatetimeoriginalestimate": null,
        "customfield_11307": null,
        "timeestimate": null,
        "customfield_11308": null,
        "versions": [

        ],
        "issuelinks": [

        ],
        "assignee": null,
        "status": {
          "self": "https://goeuro.atlassian.net/rest/api/2/status/1",
          "description": "",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/statuses/open.png",
          "name": "To Do",
          "id": "1",
          "statusCategory": {
            "self": "https://goeuro.atlassian.net/rest/api/2/statuscategory/2",
            "id": 2,
            "key": "new",
            "colorName": "blue-gray",
            "name": "To Do"
          }
        },
        "components": [

        ],
        "customfield_10050": null,
        "customfield_10051": null,
        "customfield_10052": null,
        "customfield_11301": null,
        "customfield_11302": null,
        "customfield_10049": null,
        "customfield_10600": null,
        "customfield_10601": [

        ],
        "customfield_12900": null,
        "customfield_10602": null,
        "aggregatetimeestimate": null,
        "creator": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "subtasks": [

        ],
        "reporter": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "customfield_12100": "{}",
        "aggregateprogress": {
          "progress": 0,
          "total": 0
        },
        "customfield_10200": "1|hzuz74:1m0n3jf",
        "customfield_10201": null,
        "customfield_12500": null,
        "customfield_11800": null,
        "progress": {
          "progress": 0,
          "total": 0
        },
        "votes": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1249/votes",
          "votes": 0,
          "hasVoted": false
        },
        "issuetype": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issuetype/10001",
          "id": "10001",
          "description": "Created by JIRA Agile - do not edit or delete. Issue type for a user story.",
          "iconUrl": "https://goeuro.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10315&avatarType=issuetype",
          "name": "Story",
          "subtask": false,
          "avatarId": 10315
        },
        "timespent": null,
        "project": {
          "self": "https://goeuro.atlassian.net/rest/api/2/project/11801",
          "id": "11801",
          "key": "AD",
          "name": "Advertising",
          "avatarUrls": {
            "48x48": "https://goeuro.atlassian.net/secure/projectavatar?pid=11801&avatarId=18802",
            "24x24": "https://goeuro.atlassian.net/secure/projectavatar?size=small&pid=11801&avatarId=18802",
            "16x16": "https://goeuro.atlassian.net/secure/projectavatar?size=xsmall&pid=11801&avatarId=18802",
            "32x32": "https://goeuro.atlassian.net/secure/projectavatar?size=medium&pid=11801&avatarId=18802"
          }
        },
        "aggregatetimespent": null,
        "customfield_10701": null,
        "resolutiondate": null,
        "workratio": -1,
        "watches": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1249/watchers",
          "watchCount": 1,
          "isWatching": true
        },
        "created": "2017-07-14T16:16:55.000+0200",
        "customfield_10020": null,
        "customfield_10021": null,
        "customfield_12200": null,
        "customfield_10024": null,
        "customfield_10300": null,
        "customfield_12600": null,
        "customfield_10026": null,
        "customfield_10016": null,
        "customfield_10017": null,
        "customfield_11501": null,
        "customfield_10018": null,
        "customfield_10019": null,
        "customfield_11902": "{panel:bgColor=#EAECFF}\r\nh3. Issue Summary\r\n* short summary (5 sentences)\r\n* list the duration along with start and end times (include timezone)\r\n* state the impact (e.g. most user requests resulted in 500 errors, at peak 100%)\r\n* close with root cause\r\n\r\nh3. Timeline\r\n* list the timezone\r\n* covers the outage duration\r\n* when outage began\r\n* when staff was notified\r\n* actions, events, ...\r\n* when service was restored\r\n\r\nh3. Root Cause\r\n\r\nh3. Resolution and recovery\r\n* give detailed explanation of actions taken (includes times)\r\n\r\nh3. Corrective and Preventative Measures\r\n(flag) Action items should be created as a tickets and linked to this report\r\n* itemized list of ways to prevent it from happening again\r\n* what can we do better next time?\r\n{panel}",
        "updated": "2017-07-14T16:17:11.000+0200",
        "timeoriginalestimate": null,
        "description": null,
        "customfield_11100": null,
        "customfield_10012": null,
        "customfield_10013": null,
        "customfield_11500": null,
        "customfield_10014": null,
        "customfield_10015": null,
        "customfield_10005": null,
        "customfield_12701": null,
        "customfield_12700": null,
        "customfield_12703": null,
        "customfield_10007": null,
        "customfield_10008": "AD-1246",
        "customfield_12702": null,
        "customfield_12705": null,
        "customfield_10801": null,
        "customfield_12704": null,
        "customfield_12706": null,
        "summary": "Add An Actual Profile Page",
        "customfield_10001": null,
        "customfield_10002": null,
        "customfield_12300": null,
        "customfield_10003": null,
        "customfield_10400": null,
        "customfield_10004": null,
        "customfield_11600": null,
        "environment": null,
        "duedate": null
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "88094",
      "self": "https://goeuro.atlassian.net/rest/api/2/issue/88094",
      "key": "AD-1248",
      "fields": {
        "fixVersions": [

        ],
        "resolution": null,
        "customfield_12800": null,
        "customfield_12802": null,
        "customfield_12801": null,
        "customfield_12804": null,
        "customfield_12803": null,
        "customfield_12806": null,
        "customfield_12805": null,
        "customfield_10903": null,
        "lastViewed": "2017-07-14T16:16:20.018+0200",
        "customfield_12000": null,
        "priority": {
          "self": "https://goeuro.atlassian.net/rest/api/2/priority/6",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/priority_major.gif",
          "name": "Normal (P3)",
          "id": "6"
        },
        "customfield_12400": null,
        "customfield_10102": null,
        "customfield_12402": null,
        "customfield_12401": null,
        "labels": [

        ],
        "customfield_11303": null,
        "customfield_11305": null,
        "customfield_11306": null,
        "aggregatetimeoriginalestimate": null,
        "timeestimate": null,
        "customfield_11307": null,
        "customfield_11308": null,
        "versions": [

        ],
        "issuelinks": [

        ],
        "assignee": null,
        "status": {
          "self": "https://goeuro.atlassian.net/rest/api/2/status/1",
          "description": "",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/statuses/open.png",
          "name": "To Do",
          "id": "1",
          "statusCategory": {
            "self": "https://goeuro.atlassian.net/rest/api/2/statuscategory/2",
            "id": 2,
            "key": "new",
            "colorName": "blue-gray",
            "name": "To Do"
          }
        },
        "components": [

        ],
        "customfield_10050": null,
        "customfield_10051": null,
        "customfield_10052": null,
        "customfield_11301": null,
        "customfield_11302": null,
        "customfield_10049": null,
        "customfield_10600": null,
        "customfield_10601": [

        ],
        "customfield_10602": null,
        "customfield_12900": null,
        "aggregatetimeestimate": null,
        "creator": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "subtasks": [

        ],
        "reporter": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "aggregateprogress": {
          "progress": 0,
          "total": 0
        },
        "customfield_12100": "{}",
        "customfield_10200": "1|hzuz74:1m0n3jd",
        "customfield_10201": null,
        "customfield_12500": null,
        "customfield_11800": null,
        "progress": {
          "progress": 0,
          "total": 0
        },
        "votes": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1248/votes",
          "votes": 0,
          "hasVoted": false
        },
        "issuetype": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issuetype/10001",
          "id": "10001",
          "description": "Created by JIRA Agile - do not edit or delete. Issue type for a user story.",
          "iconUrl": "https://goeuro.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10315&avatarType=issuetype",
          "name": "Story",
          "subtask": false,
          "avatarId": 10315
        },
        "timespent": null,
        "project": {
          "self": "https://goeuro.atlassian.net/rest/api/2/project/11801",
          "id": "11801",
          "key": "AD",
          "name": "Advertising",
          "avatarUrls": {
            "48x48": "https://goeuro.atlassian.net/secure/projectavatar?pid=11801&avatarId=18802",
            "24x24": "https://goeuro.atlassian.net/secure/projectavatar?size=small&pid=11801&avatarId=18802",
            "16x16": "https://goeuro.atlassian.net/secure/projectavatar?size=xsmall&pid=11801&avatarId=18802",
            "32x32": "https://goeuro.atlassian.net/secure/projectavatar?size=medium&pid=11801&avatarId=18802"
          }
        },
        "aggregatetimespent": null,
        "customfield_10701": null,
        "resolutiondate": null,
        "workratio": -1,
        "watches": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1248/watchers",
          "watchCount": 1,
          "isWatching": true
        },
        "created": "2017-07-14T16:16:19.000+0200",
        "customfield_10020": null,
        "customfield_12200": null,
        "customfield_10021": null,
        "customfield_10024": null,
        "customfield_12600": null,
        "customfield_10300": null,
        "customfield_10026": null,
        "customfield_10016": null,
        "customfield_11501": null,
        "customfield_10017": null,
        "customfield_10018": null,
        "customfield_10019": null,
        "customfield_11902": "{panel:bgColor=#EAECFF}\r\nh3. Issue Summary\r\n* short summary (5 sentences)\r\n* list the duration along with start and end times (include timezone)\r\n* state the impact (e.g. most user requests resulted in 500 errors, at peak 100%)\r\n* close with root cause\r\n\r\nh3. Timeline\r\n* list the timezone\r\n* covers the outage duration\r\n* when outage began\r\n* when staff was notified\r\n* actions, events, ...\r\n* when service was restored\r\n\r\nh3. Root Cause\r\n\r\nh3. Resolution and recovery\r\n* give detailed explanation of actions taken (includes times)\r\n\r\nh3. Corrective and Preventative Measures\r\n(flag) Action items should be created as a tickets and linked to this report\r\n* itemized list of ways to prevent it from happening again\r\n* what can we do better next time?\r\n{panel}",
        "updated": "2017-07-14T16:17:10.000+0200",
        "timeoriginalestimate": null,
        "description": null,
        "customfield_11100": null,
        "customfield_10012": null,
        "customfield_10013": null,
        "customfield_10014": null,
        "customfield_11500": null,
        "customfield_10015": null,
        "customfield_10005": null,
        "customfield_12701": null,
        "customfield_12700": null,
        "customfield_12703": null,
        "customfield_10007": null,
        "customfield_12702": null,
        "customfield_10008": "AD-1246",
        "customfield_12705": null,
        "customfield_10801": null,
        "customfield_12704": null,
        "customfield_12706": null,
        "summary": "Add Social Login To DW",
        "customfield_10001": null,
        "customfield_10002": null,
        "customfield_12300": null,
        "customfield_10003": null,
        "customfield_10004": null,
        "customfield_10400": null,
        "customfield_11600": null,
        "environment": null,
        "duedate": null
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "88093",
      "self": "https://goeuro.atlassian.net/rest/api/2/issue/88093",
      "key": "AD-1247",
      "fields": {
        "fixVersions": [

        ],
        "resolution": null,
        "customfield_12800": null,
        "customfield_12802": null,
        "customfield_12801": null,
        "customfield_12804": null,
        "customfield_12803": null,
        "customfield_12806": null,
        "customfield_10903": null,
        "customfield_12805": null,
        "lastViewed": "2017-07-14T16:15:53.220+0200",
        "customfield_12000": null,
        "priority": {
          "self": "https://goeuro.atlassian.net/rest/api/2/priority/6",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/priority_major.gif",
          "name": "Normal (P3)",
          "id": "6"
        },
        "customfield_12400": null,
        "customfield_12402": null,
        "customfield_10102": null,
        "labels": [

        ],
        "customfield_12401": null,
        "customfield_11303": null,
        "customfield_11305": null,
        "customfield_11306": null,
        "aggregatetimeoriginalestimate": null,
        "customfield_11307": null,
        "timeestimate": null,
        "customfield_11308": null,
        "versions": [

        ],
        "issuelinks": [

        ],
        "assignee": null,
        "status": {
          "self": "https://goeuro.atlassian.net/rest/api/2/status/1",
          "description": "",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/statuses/open.png",
          "name": "To Do",
          "id": "1",
          "statusCategory": {
            "self": "https://goeuro.atlassian.net/rest/api/2/statuscategory/2",
            "id": 2,
            "key": "new",
            "colorName": "blue-gray",
            "name": "To Do"
          }
        },
        "components": [

        ],
        "customfield_10050": null,
        "customfield_10051": null,
        "customfield_10052": null,
        "customfield_11301": null,
        "customfield_11302": null,
        "customfield_10049": null,
        "customfield_10600": null,
        "customfield_10601": [

        ],
        "customfield_12900": null,
        "customfield_10602": null,
        "aggregatetimeestimate": null,
        "creator": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "subtasks": [

        ],
        "reporter": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "customfield_12100": "{}",
        "aggregateprogress": {
          "progress": 0,
          "total": 0
        },
        "customfield_10200": "1|hzuz74:1m0n3j9",
        "customfield_10201": null,
        "customfield_12500": null,
        "customfield_11800": null,
        "progress": {
          "progress": 0,
          "total": 0
        },
        "votes": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1247/votes",
          "votes": 0,
          "hasVoted": false
        },
        "issuetype": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issuetype/10001",
          "id": "10001",
          "description": "Created by JIRA Agile - do not edit or delete. Issue type for a user story.",
          "iconUrl": "https://goeuro.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10315&avatarType=issuetype",
          "name": "Story",
          "subtask": false,
          "avatarId": 10315
        },
        "timespent": null,
        "project": {
          "self": "https://goeuro.atlassian.net/rest/api/2/project/11801",
          "id": "11801",
          "key": "AD",
          "name": "Advertising",
          "avatarUrls": {
            "48x48": "https://goeuro.atlassian.net/secure/projectavatar?pid=11801&avatarId=18802",
            "24x24": "https://goeuro.atlassian.net/secure/projectavatar?size=small&pid=11801&avatarId=18802",
            "16x16": "https://goeuro.atlassian.net/secure/projectavatar?size=xsmall&pid=11801&avatarId=18802",
            "32x32": "https://goeuro.atlassian.net/secure/projectavatar?size=medium&pid=11801&avatarId=18802"
          }
        },
        "aggregatetimespent": null,
        "customfield_10701": null,
        "resolutiondate": null,
        "workratio": -1,
        "watches": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1247/watchers",
          "watchCount": 1,
          "isWatching": true
        },
        "created": "2017-07-14T16:15:52.000+0200",
        "customfield_10020": null,
        "customfield_10021": null,
        "customfield_12200": null,
        "customfield_10024": null,
        "customfield_12600": null,
        "customfield_10300": null,
        "customfield_10026": null,
        "customfield_10016": null,
        "customfield_10017": null,
        "customfield_11501": null,
        "customfield_10018": null,
        "customfield_10019": null,
        "customfield_11902": "{panel:bgColor=#EAECFF}\r\nh3. Issue Summary\r\n* short summary (5 sentences)\r\n* list the duration along with start and end times (include timezone)\r\n* state the impact (e.g. most user requests resulted in 500 errors, at peak 100%)\r\n* close with root cause\r\n\r\nh3. Timeline\r\n* list the timezone\r\n* covers the outage duration\r\n* when outage began\r\n* when staff was notified\r\n* actions, events, ...\r\n* when service was restored\r\n\r\nh3. Root Cause\r\n\r\nh3. Resolution and recovery\r\n* give detailed explanation of actions taken (includes times)\r\n\r\nh3. Corrective and Preventative Measures\r\n(flag) Action items should be created as a tickets and linked to this report\r\n* itemized list of ways to prevent it from happening again\r\n* what can we do better next time?\r\n{panel}",
        "updated": "2017-07-14T16:15:54.000+0200",
        "timeoriginalestimate": null,
        "description": null,
        "customfield_11100": null,
        "customfield_10012": null,
        "customfield_10013": null,
        "customfield_11500": null,
        "customfield_10014": null,
        "customfield_10015": null,
        "customfield_10005": null,
        "customfield_12701": null,
        "customfield_12700": null,
        "customfield_10007": null,
        "customfield_12703": null,
        "customfield_10008": "AD-1239",
        "customfield_12702": null,
        "customfield_12705": null,
        "customfield_10801": null,
        "customfield_12704": null,
        "customfield_12706": null,
        "summary": "Assess Current State of User Profile",
        "customfield_10001": null,
        "customfield_10002": null,
        "customfield_12300": null,
        "customfield_10003": null,
        "customfield_10004": null,
        "customfield_10400": null,
        "customfield_11600": null,
        "environment": null,
        "duedate": null
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "88091",
      "self": "https://goeuro.atlassian.net/rest/api/2/issue/88091",
      "key": "AD-1246",
      "fields": {
        "fixVersions": [

        ],
        "resolution": null,
        "customfield_12800": null,
        "customfield_12802": null,
        "customfield_12801": null,
        "customfield_12804": null,
        "customfield_12803": null,
        "customfield_12806": null,
        "customfield_12805": null,
        "customfield_10903": null,
        "lastViewed": "2017-07-14T16:13:43.480+0200",
        "customfield_12000": null,
        "customfield_12400": null,
        "priority": {
          "self": "https://goeuro.atlassian.net/rest/api/2/priority/6",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/priority_major.gif",
          "name": "Normal (P3)",
          "id": "6"
        },
        "customfield_10102": null,
        "customfield_12402": null,
        "customfield_12401": null,
        "labels": [

        ],
        "customfield_11303": null,
        "customfield_11305": null,
        "customfield_11306": null,
        "timeestimate": null,
        "customfield_11307": null,
        "aggregatetimeoriginalestimate": null,
        "versions": [

        ],
        "customfield_11308": null,
        "issuelinks": [

        ],
        "assignee": null,
        "status": {
          "self": "https://goeuro.atlassian.net/rest/api/2/status/1",
          "description": "",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/statuses/open.png",
          "name": "To Do",
          "id": "1",
          "statusCategory": {
            "self": "https://goeuro.atlassian.net/rest/api/2/statuscategory/2",
            "id": 2,
            "key": "new",
            "colorName": "blue-gray",
            "name": "To Do"
          }
        },
        "components": [

        ],
        "customfield_10050": null,
        "customfield_10051": null,
        "customfield_10052": null,
        "customfield_11301": null,
        "customfield_11302": null,
        "customfield_10049": null,
        "customfield_10600": null,
        "customfield_10601": [

        ],
        "customfield_12900": null,
        "customfield_10602": null,
        "aggregatetimeestimate": null,
        "creator": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "subtasks": [

        ],
        "reporter": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "customfield_12100": "{}",
        "aggregateprogress": {
          "progress": 0,
          "total": 0
        },
        "customfield_10200": "1|i04w07:",
        "customfield_10201": null,
        "customfield_12500": null,
        "customfield_11800": null,
        "progress": {
          "progress": 0,
          "total": 0
        },
        "votes": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1246/votes",
          "votes": 0,
          "hasVoted": false
        },
        "issuetype": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issuetype/10000",
          "id": "10000",
          "description": "Created by JIRA Software - do not edit or delete. Issue type for a big user story that needs to be broken down.",
          "iconUrl": "https://goeuro.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10307&avatarType=issuetype",
          "name": "Epic",
          "subtask": false,
          "avatarId": 10307
        },
        "timespent": null,
        "project": {
          "self": "https://goeuro.atlassian.net/rest/api/2/project/11801",
          "id": "11801",
          "key": "AD",
          "name": "Advertising",
          "avatarUrls": {
            "48x48": "https://goeuro.atlassian.net/secure/projectavatar?pid=11801&avatarId=18802",
            "24x24": "https://goeuro.atlassian.net/secure/projectavatar?size=small&pid=11801&avatarId=18802",
            "16x16": "https://goeuro.atlassian.net/secure/projectavatar?size=xsmall&pid=11801&avatarId=18802",
            "32x32": "https://goeuro.atlassian.net/secure/projectavatar?size=medium&pid=11801&avatarId=18802"
          }
        },
        "aggregatetimespent": null,
        "customfield_10701": null,
        "resolutiondate": null,
        "workratio": -1,
        "watches": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1246/watchers",
          "watchCount": 1,
          "isWatching": true
        },
        "created": "2017-07-14T16:13:43.000+0200",
        "customfield_10020": null,
        "customfield_10021": null,
        "customfield_12200": null,
        "customfield_10024": null,
        "customfield_12600": null,
        "customfield_10300": null,
        "customfield_10026": null,
        "customfield_10016": null,
        "customfield_10017": null,
        "customfield_10018": null,
        "customfield_10019": null,
        "customfield_11902": "{panel:bgColor=#EAECFF}\r\nh3. Issue Summary\r\n* short summary (5 sentences)\r\n* list the duration along with start and end times (include timezone)\r\n* state the impact (e.g. most user requests resulted in 500 errors, at peak 100%)\r\n* close with root cause\r\n\r\nh3. Timeline\r\n* list the timezone\r\n* covers the outage duration\r\n* when outage began\r\n* when staff was notified\r\n* actions, events, ...\r\n* when service was restored\r\n\r\nh3. Root Cause\r\n\r\nh3. Resolution and recovery\r\n* give detailed explanation of actions taken (includes times)\r\n\r\nh3. Corrective and Preventative Measures\r\n(flag) Action items should be created as a tickets and linked to this report\r\n* itemized list of ways to prevent it from happening again\r\n* what can we do better next time?\r\n{panel}",
        "updated": "2017-07-14T16:16:55.000+0200",
        "timeoriginalestimate": null,
        "description": null,
        "customfield_10010": {
          "self": "https://goeuro.atlassian.net/rest/api/2/customFieldOption/10001",
          "value": "To Do",
          "id": "10001"
        },
        "customfield_11100": null,
        "customfield_10011": "ghx-label-14",
        "customfield_10012": null,
        "customfield_10013": null,
        "customfield_10014": null,
        "customfield_10015": null,
        "customfield_12701": null,
        "customfield_10005": null,
        "customfield_12700": null,
        "customfield_12703": null,
        "customfield_10007": null,
        "customfield_12702": null,
        "customfield_10008": null,
        "customfield_10009": "Capture Low-Hanging User Profile Fruits",
        "customfield_12705": null,
        "customfield_10801": null,
        "customfield_12704": null,
        "customfield_12706": null,
        "summary": "Capture Low-Hanging User Profile Fruits",
        "customfield_10001": null,
        "customfield_10002": null,
        "customfield_12300": null,
        "customfield_10003": null,
        "customfield_10400": null,
        "customfield_10004": null,
        "customfield_11600": null,
        "environment": null,
        "duedate": null
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "88090",
      "self": "https://goeuro.atlassian.net/rest/api/2/issue/88090",
      "key": "AD-1245",
      "fields": {
        "fixVersions": [

        ],
        "resolution": null,
        "customfield_12800": null,
        "customfield_12802": null,
        "customfield_12801": null,
        "customfield_12804": null,
        "customfield_12803": null,
        "customfield_12806": null,
        "customfield_10903": null,
        "customfield_12805": null,
        "lastViewed": "2017-07-14T16:12:41.221+0200",
        "customfield_12000": null,
        "priority": {
          "self": "https://goeuro.atlassian.net/rest/api/2/priority/6",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/priority_major.gif",
          "name": "Normal (P3)",
          "id": "6"
        },
        "customfield_12400": null,
        "customfield_10102": null,
        "customfield_12402": null,
        "labels": [

        ],
        "customfield_12401": null,
        "customfield_11303": null,
        "customfield_11305": null,
        "customfield_11306": null,
        "aggregatetimeoriginalestimate": null,
        "customfield_11307": null,
        "timeestimate": null,
        "versions": [

        ],
        "customfield_11308": null,
        "issuelinks": [

        ],
        "assignee": null,
        "status": {
          "self": "https://goeuro.atlassian.net/rest/api/2/status/1",
          "description": "",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/statuses/open.png",
          "name": "To Do",
          "id": "1",
          "statusCategory": {
            "self": "https://goeuro.atlassian.net/rest/api/2/statuscategory/2",
            "id": 2,
            "key": "new",
            "colorName": "blue-gray",
            "name": "To Do"
          }
        },
        "components": [

        ],
        "customfield_10050": null,
        "customfield_10051": null,
        "customfield_10052": null,
        "customfield_11301": null,
        "customfield_11302": null,
        "customfield_10049": null,
        "customfield_10600": null,
        "customfield_10601": [

        ],
        "customfield_12900": null,
        "customfield_10602": null,
        "aggregatetimeestimate": null,
        "creator": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "subtasks": [

        ],
        "reporter": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "customfield_12100": "{}",
        "aggregateprogress": {
          "progress": 0,
          "total": 0
        },
        "customfield_10200": "1|hzuz74:1m0n3jy",
        "customfield_10201": null,
        "customfield_12500": null,
        "customfield_11800": null,
        "progress": {
          "progress": 0,
          "total": 0
        },
        "votes": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1245/votes",
          "votes": 0,
          "hasVoted": false
        },
        "issuetype": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issuetype/10001",
          "id": "10001",
          "description": "Created by JIRA Agile - do not edit or delete. Issue type for a user story.",
          "iconUrl": "https://goeuro.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10315&avatarType=issuetype",
          "name": "Story",
          "subtask": false,
          "avatarId": 10315
        },
        "timespent": null,
        "project": {
          "self": "https://goeuro.atlassian.net/rest/api/2/project/11801",
          "id": "11801",
          "key": "AD",
          "name": "Advertising",
          "avatarUrls": {
            "48x48": "https://goeuro.atlassian.net/secure/projectavatar?pid=11801&avatarId=18802",
            "24x24": "https://goeuro.atlassian.net/secure/projectavatar?size=small&pid=11801&avatarId=18802",
            "16x16": "https://goeuro.atlassian.net/secure/projectavatar?size=xsmall&pid=11801&avatarId=18802",
            "32x32": "https://goeuro.atlassian.net/secure/projectavatar?size=medium&pid=11801&avatarId=18802"
          }
        },
        "aggregatetimespent": null,
        "customfield_10701": null,
        "resolutiondate": null,
        "workratio": -1,
        "watches": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1245/watchers",
          "watchCount": 1,
          "isWatching": true
        },
        "created": "2017-07-14T16:12:40.000+0200",
        "customfield_10020": null,
        "customfield_10021": null,
        "customfield_12200": null,
        "customfield_10024": null,
        "customfield_10300": null,
        "customfield_12600": null,
        "customfield_10026": null,
        "customfield_10016": null,
        "customfield_11501": null,
        "customfield_10017": null,
        "customfield_10018": null,
        "customfield_10019": null,
        "customfield_11902": "{panel:bgColor=#EAECFF}\r\nh3. Issue Summary\r\n* short summary (5 sentences)\r\n* list the duration along with start and end times (include timezone)\r\n* state the impact (e.g. most user requests resulted in 500 errors, at peak 100%)\r\n* close with root cause\r\n\r\nh3. Timeline\r\n* list the timezone\r\n* covers the outage duration\r\n* when outage began\r\n* when staff was notified\r\n* actions, events, ...\r\n* when service was restored\r\n\r\nh3. Root Cause\r\n\r\nh3. Resolution and recovery\r\n* give detailed explanation of actions taken (includes times)\r\n\r\nh3. Corrective and Preventative Measures\r\n(flag) Action items should be created as a tickets and linked to this report\r\n* itemized list of ways to prevent it from happening again\r\n* what can we do better next time?\r\n{panel}",
        "updated": "2017-07-14T16:13:14.000+0200",
        "timeoriginalestimate": null,
        "description": null,
        "customfield_11100": null,
        "customfield_10012": null,
        "customfield_10013": null,
        "customfield_11500": null,
        "customfield_10014": null,
        "customfield_10015": null,
        "customfield_10005": null,
        "customfield_12701": null,
        "customfield_12700": null,
        "customfield_12703": null,
        "customfield_10007": null,
        "customfield_10008": "AD-1239",
        "customfield_12702": null,
        "customfield_10801": null,
        "customfield_12705": null,
        "customfield_12704": null,
        "customfield_12706": null,
        "summary": "Roll Out On-Site Promotion",
        "customfield_10001": null,
        "customfield_12300": null,
        "customfield_10002": null,
        "customfield_10003": null,
        "customfield_10400": null,
        "customfield_10004": null,
        "customfield_11600": null,
        "environment": null,
        "duedate": null
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "88089",
      "self": "https://goeuro.atlassian.net/rest/api/2/issue/88089",
      "key": "AD-1244",
      "fields": {
        "fixVersions": [

        ],
        "resolution": null,
        "customfield_12800": null,
        "customfield_12802": null,
        "customfield_12801": null,
        "customfield_12804": null,
        "customfield_12803": null,
        "customfield_12806": null,
        "customfield_10903": null,
        "customfield_12805": null,
        "lastViewed": "2017-07-14T16:12:28.266+0200",
        "customfield_12000": null,
        "priority": {
          "self": "https://goeuro.atlassian.net/rest/api/2/priority/6",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/priority_major.gif",
          "name": "Normal (P3)",
          "id": "6"
        },
        "customfield_12400": null,
        "customfield_10102": null,
        "customfield_12402": null,
        "customfield_12401": null,
        "labels": [

        ],
        "customfield_11303": null,
        "customfield_11305": null,
        "customfield_11306": null,
        "timeestimate": null,
        "customfield_11307": null,
        "aggregatetimeoriginalestimate": null,
        "customfield_11308": null,
        "versions": [

        ],
        "issuelinks": [

        ],
        "assignee": null,
        "status": {
          "self": "https://goeuro.atlassian.net/rest/api/2/status/1",
          "description": "",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/statuses/open.png",
          "name": "To Do",
          "id": "1",
          "statusCategory": {
            "self": "https://goeuro.atlassian.net/rest/api/2/statuscategory/2",
            "id": 2,
            "key": "new",
            "colorName": "blue-gray",
            "name": "To Do"
          }
        },
        "components": [

        ],
        "customfield_10050": null,
        "customfield_10051": null,
        "customfield_10052": null,
        "customfield_11301": null,
        "customfield_11302": null,
        "customfield_10049": null,
        "customfield_10600": null,
        "customfield_10601": [

        ],
        "customfield_10602": null,
        "customfield_12900": null,
        "aggregatetimeestimate": null,
        "creator": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "subtasks": [

        ],
        "reporter": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "aggregateprogress": {
          "progress": 0,
          "total": 0
        },
        "customfield_12100": "{}",
        "customfield_10200": "1|hzuz74:1m0n3jx",
        "customfield_10201": null,
        "customfield_12500": null,
        "customfield_11800": null,
        "progress": {
          "progress": 0,
          "total": 0
        },
        "votes": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1244/votes",
          "votes": 0,
          "hasVoted": false
        },
        "issuetype": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issuetype/10001",
          "id": "10001",
          "description": "Created by JIRA Agile - do not edit or delete. Issue type for a user story.",
          "iconUrl": "https://goeuro.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10315&avatarType=issuetype",
          "name": "Story",
          "subtask": false,
          "avatarId": 10315
        },
        "timespent": null,
        "project": {
          "self": "https://goeuro.atlassian.net/rest/api/2/project/11801",
          "id": "11801",
          "key": "AD",
          "name": "Advertising",
          "avatarUrls": {
            "48x48": "https://goeuro.atlassian.net/secure/projectavatar?pid=11801&avatarId=18802",
            "24x24": "https://goeuro.atlassian.net/secure/projectavatar?size=small&pid=11801&avatarId=18802",
            "16x16": "https://goeuro.atlassian.net/secure/projectavatar?size=xsmall&pid=11801&avatarId=18802",
            "32x32": "https://goeuro.atlassian.net/secure/projectavatar?size=medium&pid=11801&avatarId=18802"
          }
        },
        "aggregatetimespent": null,
        "customfield_10701": null,
        "resolutiondate": null,
        "workratio": -1,
        "watches": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1244/watchers",
          "watchCount": 1,
          "isWatching": true
        },
        "created": "2017-07-14T16:12:27.000+0200",
        "customfield_10020": null,
        "customfield_12200": null,
        "customfield_10021": null,
        "customfield_10024": null,
        "customfield_10300": null,
        "customfield_12600": null,
        "customfield_10026": null,
        "customfield_10016": null,
        "customfield_11501": null,
        "customfield_10017": null,
        "customfield_10018": null,
        "customfield_10019": null,
        "customfield_11902": "{panel:bgColor=#EAECFF}\r\nh3. Issue Summary\r\n* short summary (5 sentences)\r\n* list the duration along with start and end times (include timezone)\r\n* state the impact (e.g. most user requests resulted in 500 errors, at peak 100%)\r\n* close with root cause\r\n\r\nh3. Timeline\r\n* list the timezone\r\n* covers the outage duration\r\n* when outage began\r\n* when staff was notified\r\n* actions, events, ...\r\n* when service was restored\r\n\r\nh3. Root Cause\r\n\r\nh3. Resolution and recovery\r\n* give detailed explanation of actions taken (includes times)\r\n\r\nh3. Corrective and Preventative Measures\r\n(flag) Action items should be created as a tickets and linked to this report\r\n* itemized list of ways to prevent it from happening again\r\n* what can we do better next time?\r\n{panel}",
        "updated": "2017-07-14T16:13:14.000+0200",
        "timeoriginalestimate": null,
        "description": null,
        "customfield_11100": null,
        "customfield_10012": null,
        "customfield_10013": null,
        "customfield_10014": null,
        "customfield_11500": null,
        "customfield_10015": null,
        "customfield_10005": null,
        "customfield_12701": null,
        "customfield_12700": null,
        "customfield_12703": null,
        "customfield_10007": null,
        "customfield_12702": null,
        "customfield_10008": "AD-1239",
        "customfield_10801": null,
        "customfield_12705": null,
        "customfield_12704": null,
        "customfield_12706": null,
        "summary": "Roll Out MW Button To Install The App ",
        "customfield_10001": null,
        "customfield_12300": null,
        "customfield_10002": null,
        "customfield_10003": null,
        "customfield_10004": null,
        "customfield_10400": null,
        "customfield_11600": null,
        "environment": null,
        "duedate": null
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "88088",
      "self": "https://goeuro.atlassian.net/rest/api/2/issue/88088",
      "key": "AD-1243",
      "fields": {
        "fixVersions": [

        ],
        "resolution": null,
        "customfield_12800": null,
        "customfield_12802": null,
        "customfield_12801": null,
        "customfield_12804": null,
        "customfield_12803": null,
        "customfield_12806": null,
        "customfield_10903": null,
        "customfield_12805": null,
        "lastViewed": "2017-07-14T16:11:39.988+0200",
        "customfield_12000": null,
        "priority": {
          "self": "https://goeuro.atlassian.net/rest/api/2/priority/6",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/priority_major.gif",
          "name": "Normal (P3)",
          "id": "6"
        },
        "customfield_12400": null,
        "customfield_10102": null,
        "customfield_12402": null,
        "labels": [

        ],
        "customfield_12401": null,
        "customfield_11303": null,
        "customfield_11305": null,
        "customfield_11306": null,
        "aggregatetimeoriginalestimate": null,
        "timeestimate": null,
        "customfield_11307": null,
        "customfield_11308": null,
        "versions": [

        ],
        "issuelinks": [

        ],
        "assignee": null,
        "status": {
          "self": "https://goeuro.atlassian.net/rest/api/2/status/1",
          "description": "",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/statuses/open.png",
          "name": "To Do",
          "id": "1",
          "statusCategory": {
            "self": "https://goeuro.atlassian.net/rest/api/2/statuscategory/2",
            "id": 2,
            "key": "new",
            "colorName": "blue-gray",
            "name": "To Do"
          }
        },
        "components": [

        ],
        "customfield_10050": null,
        "customfield_10051": null,
        "customfield_10052": null,
        "customfield_11301": null,
        "customfield_11302": null,
        "customfield_10049": null,
        "customfield_10600": null,
        "customfield_10601": [

        ],
        "customfield_12900": null,
        "customfield_10602": null,
        "aggregatetimeestimate": null,
        "creator": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "subtasks": [

        ],
        "reporter": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "aggregateprogress": {
          "progress": 0,
          "total": 0
        },
        "customfield_12100": "{}",
        "customfield_10200": "1|hzuz74:1m0n3jv",
        "customfield_10201": null,
        "customfield_12500": null,
        "customfield_11800": null,
        "progress": {
          "progress": 0,
          "total": 0
        },
        "votes": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1243/votes",
          "votes": 0,
          "hasVoted": false
        },
        "issuetype": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issuetype/10001",
          "id": "10001",
          "description": "Created by JIRA Agile - do not edit or delete. Issue type for a user story.",
          "iconUrl": "https://goeuro.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10315&avatarType=issuetype",
          "name": "Story",
          "subtask": false,
          "avatarId": 10315
        },
        "timespent": null,
        "project": {
          "self": "https://goeuro.atlassian.net/rest/api/2/project/11801",
          "id": "11801",
          "key": "AD",
          "name": "Advertising",
          "avatarUrls": {
            "48x48": "https://goeuro.atlassian.net/secure/projectavatar?pid=11801&avatarId=18802",
            "24x24": "https://goeuro.atlassian.net/secure/projectavatar?size=small&pid=11801&avatarId=18802",
            "16x16": "https://goeuro.atlassian.net/secure/projectavatar?size=xsmall&pid=11801&avatarId=18802",
            "32x32": "https://goeuro.atlassian.net/secure/projectavatar?size=medium&pid=11801&avatarId=18802"
          }
        },
        "aggregatetimespent": null,
        "customfield_10701": null,
        "resolutiondate": null,
        "workratio": -1,
        "watches": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1243/watchers",
          "watchCount": 1,
          "isWatching": true
        },
        "created": "2017-07-14T16:11:39.000+0200",
        "customfield_10020": null,
        "customfield_12200": null,
        "customfield_10021": null,
        "customfield_10024": null,
        "customfield_12600": null,
        "customfield_10300": null,
        "customfield_10026": null,
        "customfield_10016": null,
        "customfield_10017": null,
        "customfield_11501": null,
        "customfield_10018": null,
        "customfield_10019": null,
        "customfield_11902": "{panel:bgColor=#EAECFF}\r\nh3. Issue Summary\r\n* short summary (5 sentences)\r\n* list the duration along with start and end times (include timezone)\r\n* state the impact (e.g. most user requests resulted in 500 errors, at peak 100%)\r\n* close with root cause\r\n\r\nh3. Timeline\r\n* list the timezone\r\n* covers the outage duration\r\n* when outage began\r\n* when staff was notified\r\n* actions, events, ...\r\n* when service was restored\r\n\r\nh3. Root Cause\r\n\r\nh3. Resolution and recovery\r\n* give detailed explanation of actions taken (includes times)\r\n\r\nh3. Corrective and Preventative Measures\r\n(flag) Action items should be created as a tickets and linked to this report\r\n* itemized list of ways to prevent it from happening again\r\n* what can we do better next time?\r\n{panel}",
        "updated": "2017-07-14T16:13:14.000+0200",
        "timeoriginalestimate": null,
        "description": null,
        "customfield_11100": null,
        "customfield_10012": null,
        "customfield_10013": null,
        "customfield_10014": null,
        "customfield_11500": null,
        "customfield_10015": null,
        "customfield_12701": null,
        "customfield_10005": null,
        "customfield_12700": null,
        "customfield_12703": null,
        "customfield_10007": null,
        "customfield_12702": null,
        "customfield_10008": "AD-1239",
        "customfield_12705": null,
        "customfield_10801": null,
        "customfield_12704": null,
        "customfield_12706": null,
        "summary": "Integrate w2a With Voucher Tickets",
        "customfield_10001": null,
        "customfield_12300": null,
        "customfield_10002": null,
        "customfield_10003": null,
        "customfield_10004": null,
        "customfield_10400": null,
        "customfield_11600": null,
        "environment": null,
        "duedate": null
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "88087",
      "self": "https://goeuro.atlassian.net/rest/api/2/issue/88087",
      "key": "AD-1242",
      "fields": {
        "fixVersions": [

        ],
        "resolution": null,
        "customfield_12800": null,
        "customfield_12802": null,
        "customfield_12801": null,
        "customfield_12804": null,
        "customfield_12803": null,
        "customfield_12806": null,
        "customfield_10903": null,
        "customfield_12805": null,
        "lastViewed": "2017-07-14T16:11:16.491+0200",
        "customfield_12000": null,
        "customfield_12400": null,
        "priority": {
          "self": "https://goeuro.atlassian.net/rest/api/2/priority/6",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/priority_major.gif",
          "name": "Normal (P3)",
          "id": "6"
        },
        "customfield_10102": null,
        "customfield_12402": null,
        "labels": [

        ],
        "customfield_12401": null,
        "customfield_11303": null,
        "customfield_11305": null,
        "customfield_11306": null,
        "timeestimate": null,
        "aggregatetimeoriginalestimate": null,
        "customfield_11307": null,
        "customfield_11308": null,
        "versions": [

        ],
        "issuelinks": [

        ],
        "assignee": null,
        "status": {
          "self": "https://goeuro.atlassian.net/rest/api/2/status/1",
          "description": "",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/statuses/open.png",
          "name": "To Do",
          "id": "1",
          "statusCategory": {
            "self": "https://goeuro.atlassian.net/rest/api/2/statuscategory/2",
            "id": 2,
            "key": "new",
            "colorName": "blue-gray",
            "name": "To Do"
          }
        },
        "components": [

        ],
        "customfield_10050": null,
        "customfield_10051": null,
        "customfield_10052": null,
        "customfield_11301": null,
        "customfield_11302": null,
        "customfield_10049": null,
        "customfield_10600": null,
        "customfield_10601": [

        ],
        "customfield_10602": null,
        "customfield_12900": null,
        "aggregatetimeestimate": null,
        "creator": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "subtasks": [

        ],
        "reporter": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "customfield_12100": "{}",
        "aggregateprogress": {
          "progress": 0,
          "total": 0
        },
        "customfield_10200": "1|hzuz74:1m0n3jr",
        "customfield_10201": null,
        "customfield_12500": null,
        "customfield_11800": null,
        "progress": {
          "progress": 0,
          "total": 0
        },
        "votes": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1242/votes",
          "votes": 0,
          "hasVoted": false
        },
        "issuetype": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issuetype/10001",
          "id": "10001",
          "description": "Created by JIRA Agile - do not edit or delete. Issue type for a user story.",
          "iconUrl": "https://goeuro.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10315&avatarType=issuetype",
          "name": "Story",
          "subtask": false,
          "avatarId": 10315
        },
        "timespent": null,
        "project": {
          "self": "https://goeuro.atlassian.net/rest/api/2/project/11801",
          "id": "11801",
          "key": "AD",
          "name": "Advertising",
          "avatarUrls": {
            "48x48": "https://goeuro.atlassian.net/secure/projectavatar?pid=11801&avatarId=18802",
            "24x24": "https://goeuro.atlassian.net/secure/projectavatar?size=small&pid=11801&avatarId=18802",
            "16x16": "https://goeuro.atlassian.net/secure/projectavatar?size=xsmall&pid=11801&avatarId=18802",
            "32x32": "https://goeuro.atlassian.net/secure/projectavatar?size=medium&pid=11801&avatarId=18802"
          }
        },
        "aggregatetimespent": null,
        "customfield_10701": null,
        "resolutiondate": null,
        "workratio": -1,
        "watches": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1242/watchers",
          "watchCount": 1,
          "isWatching": true
        },
        "created": "2017-07-14T16:11:15.000+0200",
        "customfield_10020": null,
        "customfield_12200": null,
        "customfield_10021": null,
        "customfield_10024": null,
        "customfield_12600": null,
        "customfield_10300": null,
        "customfield_10026": null,
        "customfield_10016": null,
        "customfield_10017": null,
        "customfield_11501": null,
        "customfield_10018": null,
        "customfield_10019": null,
        "customfield_11902": "{panel:bgColor=#EAECFF}\r\nh3. Issue Summary\r\n* short summary (5 sentences)\r\n* list the duration along with start and end times (include timezone)\r\n* state the impact (e.g. most user requests resulted in 500 errors, at peak 100%)\r\n* close with root cause\r\n\r\nh3. Timeline\r\n* list the timezone\r\n* covers the outage duration\r\n* when outage began\r\n* when staff was notified\r\n* actions, events, ...\r\n* when service was restored\r\n\r\nh3. Root Cause\r\n\r\nh3. Resolution and recovery\r\n* give detailed explanation of actions taken (includes times)\r\n\r\nh3. Corrective and Preventative Measures\r\n(flag) Action items should be created as a tickets and linked to this report\r\n* itemized list of ways to prevent it from happening again\r\n* what can we do better next time?\r\n{panel}",
        "updated": "2017-07-14T16:13:13.000+0200",
        "timeoriginalestimate": null,
        "description": null,
        "customfield_11100": null,
        "customfield_10012": null,
        "customfield_10013": null,
        "customfield_11500": null,
        "customfield_10014": null,
        "customfield_10015": null,
        "customfield_12701": null,
        "customfield_10005": null,
        "customfield_12700": null,
        "customfield_10007": null,
        "customfield_12703": null,
        "customfield_10008": "AD-1239",
        "customfield_12702": null,
        "customfield_10801": null,
        "customfield_12705": null,
        "customfield_12704": null,
        "customfield_12706": null,
        "summary": "Create w2a Feature As Booking Componnt",
        "customfield_10001": null,
        "customfield_10002": null,
        "customfield_12300": null,
        "customfield_10003": null,
        "customfield_10004": null,
        "customfield_10400": null,
        "customfield_11600": null,
        "environment": null,
        "duedate": null
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "88086",
      "self": "https://goeuro.atlassian.net/rest/api/2/issue/88086",
      "key": "AD-1241",
      "fields": {
        "fixVersions": [

        ],
        "resolution": null,
        "customfield_12800": null,
        "customfield_12802": null,
        "customfield_12801": null,
        "customfield_12804": null,
        "customfield_12803": null,
        "customfield_12806": null,
        "customfield_12805": null,
        "customfield_10903": null,
        "lastViewed": "2017-07-14T16:11:00.393+0200",
        "customfield_12000": null,
        "customfield_12400": null,
        "priority": {
          "self": "https://goeuro.atlassian.net/rest/api/2/priority/6",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/priority_major.gif",
          "name": "Normal (P3)",
          "id": "6"
        },
        "customfield_10102": null,
        "customfield_12402": null,
        "labels": [

        ],
        "customfield_12401": null,
        "customfield_11303": null,
        "customfield_11305": null,
        "customfield_11306": null,
        "aggregatetimeoriginalestimate": null,
        "customfield_11307": null,
        "timeestimate": null,
        "versions": [

        ],
        "customfield_11308": null,
        "issuelinks": [

        ],
        "assignee": null,
        "status": {
          "self": "https://goeuro.atlassian.net/rest/api/2/status/1",
          "description": "",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/statuses/open.png",
          "name": "To Do",
          "id": "1",
          "statusCategory": {
            "self": "https://goeuro.atlassian.net/rest/api/2/statuscategory/2",
            "id": 2,
            "key": "new",
            "colorName": "blue-gray",
            "name": "To Do"
          }
        },
        "components": [

        ],
        "customfield_10050": null,
        "customfield_10051": null,
        "customfield_10052": null,
        "customfield_11301": null,
        "customfield_11302": null,
        "customfield_10049": null,
        "customfield_10600": null,
        "customfield_10601": [

        ],
        "customfield_12900": null,
        "customfield_10602": null,
        "aggregatetimeestimate": null,
        "creator": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "subtasks": [

        ],
        "reporter": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "aggregateprogress": {
          "progress": 0,
          "total": 0
        },
        "customfield_12100": "{}",
        "customfield_10200": "1|hzuz74:1m0n3ji",
        "customfield_10201": null,
        "customfield_12500": null,
        "customfield_11800": null,
        "progress": {
          "progress": 0,
          "total": 0
        },
        "votes": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1241/votes",
          "votes": 0,
          "hasVoted": false
        },
        "issuetype": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issuetype/10001",
          "id": "10001",
          "description": "Created by JIRA Agile - do not edit or delete. Issue type for a user story.",
          "iconUrl": "https://goeuro.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10315&avatarType=issuetype",
          "name": "Story",
          "subtask": false,
          "avatarId": 10315
        },
        "timespent": null,
        "project": {
          "self": "https://goeuro.atlassian.net/rest/api/2/project/11801",
          "id": "11801",
          "key": "AD",
          "name": "Advertising",
          "avatarUrls": {
            "48x48": "https://goeuro.atlassian.net/secure/projectavatar?pid=11801&avatarId=18802",
            "24x24": "https://goeuro.atlassian.net/secure/projectavatar?size=small&pid=11801&avatarId=18802",
            "16x16": "https://goeuro.atlassian.net/secure/projectavatar?size=xsmall&pid=11801&avatarId=18802",
            "32x32": "https://goeuro.atlassian.net/secure/projectavatar?size=medium&pid=11801&avatarId=18802"
          }
        },
        "aggregatetimespent": null,
        "customfield_10701": null,
        "resolutiondate": null,
        "workratio": -1,
        "watches": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1241/watchers",
          "watchCount": 1,
          "isWatching": true
        },
        "created": "2017-07-14T16:10:59.000+0200",
        "customfield_10020": null,
        "customfield_10021": null,
        "customfield_12200": null,
        "customfield_10024": null,
        "customfield_12600": null,
        "customfield_10300": null,
        "customfield_10026": null,
        "customfield_10016": null,
        "customfield_10017": null,
        "customfield_11501": null,
        "customfield_10018": null,
        "customfield_10019": null,
        "customfield_11902": "{panel:bgColor=#EAECFF}\r\nh3. Issue Summary\r\n* short summary (5 sentences)\r\n* list the duration along with start and end times (include timezone)\r\n* state the impact (e.g. most user requests resulted in 500 errors, at peak 100%)\r\n* close with root cause\r\n\r\nh3. Timeline\r\n* list the timezone\r\n* covers the outage duration\r\n* when outage began\r\n* when staff was notified\r\n* actions, events, ...\r\n* when service was restored\r\n\r\nh3. Root Cause\r\n\r\nh3. Resolution and recovery\r\n* give detailed explanation of actions taken (includes times)\r\n\r\nh3. Corrective and Preventative Measures\r\n(flag) Action items should be created as a tickets and linked to this report\r\n* itemized list of ways to prevent it from happening again\r\n* what can we do better next time?\r\n{panel}",
        "updated": "2017-07-14T16:13:13.000+0200",
        "timeoriginalestimate": null,
        "description": null,
        "customfield_11100": null,
        "customfield_10012": null,
        "customfield_10013": null,
        "customfield_11500": null,
        "customfield_10014": null,
        "customfield_10015": null,
        "customfield_12701": null,
        "customfield_10005": null,
        "customfield_12700": null,
        "customfield_10007": null,
        "customfield_12703": null,
        "customfield_12702": null,
        "customfield_10008": "AD-1239",
        "customfield_10801": null,
        "customfield_12705": null,
        "customfield_12704": null,
        "customfield_12706": null,
        "summary": "Input Validation For BSP w2a Feature",
        "customfield_10001": null,
        "customfield_12300": null,
        "customfield_10002": null,
        "customfield_10003": null,
        "customfield_10004": null,
        "customfield_10400": null,
        "customfield_11600": null,
        "environment": null,
        "duedate": null
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "88085",
      "self": "https://goeuro.atlassian.net/rest/api/2/issue/88085",
      "key": "AD-1240",
      "fields": {
        "fixVersions": [

        ],
        "resolution": null,
        "customfield_12800": null,
        "customfield_12802": null,
        "customfield_12801": null,
        "customfield_12804": null,
        "customfield_12803": null,
        "customfield_12806": null,
        "customfield_12805": null,
        "customfield_10903": null,
        "lastViewed": "2017-07-14T16:10:38.964+0200",
        "customfield_12000": null,
        "customfield_12400": null,
        "priority": {
          "self": "https://goeuro.atlassian.net/rest/api/2/priority/6",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/priority_major.gif",
          "name": "Normal (P3)",
          "id": "6"
        },
        "customfield_10102": null,
        "customfield_12402": null,
        "labels": [

        ],
        "customfield_12401": null,
        "customfield_11303": null,
        "customfield_11305": null,
        "customfield_11306": null,
        "aggregatetimeoriginalestimate": null,
        "customfield_11307": null,
        "timeestimate": null,
        "customfield_11308": null,
        "versions": [

        ],
        "issuelinks": [

        ],
        "assignee": null,
        "status": {
          "self": "https://goeuro.atlassian.net/rest/api/2/status/1",
          "description": "",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/statuses/open.png",
          "name": "To Do",
          "id": "1",
          "statusCategory": {
            "self": "https://goeuro.atlassian.net/rest/api/2/statuscategory/2",
            "id": 2,
            "key": "new",
            "colorName": "blue-gray",
            "name": "To Do"
          }
        },
        "components": [

        ],
        "customfield_10050": null,
        "customfield_10051": null,
        "customfield_10052": null,
        "customfield_11301": null,
        "customfield_11302": null,
        "customfield_10049": null,
        "customfield_10600": null,
        "customfield_10601": [

        ],
        "customfield_10602": null,
        "customfield_12900": null,
        "aggregatetimeestimate": null,
        "creator": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "subtasks": [

        ],
        "reporter": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "aggregateprogress": {
          "progress": 0,
          "total": 0
        },
        "customfield_12100": "{}",
        "customfield_10200": "1|hzuz74:1m0n3j",
        "customfield_10201": null,
        "customfield_12500": null,
        "customfield_11800": null,
        "progress": {
          "progress": 0,
          "total": 0
        },
        "votes": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1240/votes",
          "votes": 0,
          "hasVoted": false
        },
        "issuetype": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issuetype/10001",
          "id": "10001",
          "description": "Created by JIRA Agile - do not edit or delete. Issue type for a user story.",
          "iconUrl": "https://goeuro.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10315&avatarType=issuetype",
          "name": "Story",
          "subtask": false,
          "avatarId": 10315
        },
        "timespent": null,
        "project": {
          "self": "https://goeuro.atlassian.net/rest/api/2/project/11801",
          "id": "11801",
          "key": "AD",
          "name": "Advertising",
          "avatarUrls": {
            "48x48": "https://goeuro.atlassian.net/secure/projectavatar?pid=11801&avatarId=18802",
            "24x24": "https://goeuro.atlassian.net/secure/projectavatar?size=small&pid=11801&avatarId=18802",
            "16x16": "https://goeuro.atlassian.net/secure/projectavatar?size=xsmall&pid=11801&avatarId=18802",
            "32x32": "https://goeuro.atlassian.net/secure/projectavatar?size=medium&pid=11801&avatarId=18802"
          }
        },
        "aggregatetimespent": null,
        "customfield_10701": null,
        "resolutiondate": null,
        "workratio": -1,
        "watches": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1240/watchers",
          "watchCount": 1,
          "isWatching": true
        },
        "created": "2017-07-14T16:10:38.000+0200",
        "customfield_10020": null,
        "customfield_12200": null,
        "customfield_10021": null,
        "customfield_10024": null,
        "customfield_12600": null,
        "customfield_10300": null,
        "customfield_10026": null,
        "customfield_10016": null,
        "customfield_10017": null,
        "customfield_11501": null,
        "customfield_10018": null,
        "customfield_10019": null,
        "customfield_11902": "{panel:bgColor=#EAECFF}\r\nh3. Issue Summary\r\n* short summary (5 sentences)\r\n* list the duration along with start and end times (include timezone)\r\n* state the impact (e.g. most user requests resulted in 500 errors, at peak 100%)\r\n* close with root cause\r\n\r\nh3. Timeline\r\n* list the timezone\r\n* covers the outage duration\r\n* when outage began\r\n* when staff was notified\r\n* actions, events, ...\r\n* when service was restored\r\n\r\nh3. Root Cause\r\n\r\nh3. Resolution and recovery\r\n* give detailed explanation of actions taken (includes times)\r\n\r\nh3. Corrective and Preventative Measures\r\n(flag) Action items should be created as a tickets and linked to this report\r\n* itemized list of ways to prevent it from happening again\r\n* what can we do better next time?\r\n{panel}",
        "updated": "2017-07-14T16:13:13.000+0200",
        "timeoriginalestimate": null,
        "description": null,
        "customfield_11100": null,
        "customfield_10012": null,
        "customfield_10013": null,
        "customfield_10014": null,
        "customfield_11500": null,
        "customfield_10015": null,
        "customfield_12701": null,
        "customfield_10005": null,
        "customfield_12700": null,
        "customfield_10007": null,
        "customfield_12703": null,
        "customfield_12702": null,
        "customfield_10008": "AD-1239",
        "customfield_12705": null,
        "customfield_10801": null,
        "customfield_12704": null,
        "customfield_12706": null,
        "summary": "Do Translations for BSP w2a feature",
        "customfield_10001": null,
        "customfield_12300": null,
        "customfield_10002": null,
        "customfield_10003": null,
        "customfield_10004": null,
        "customfield_10400": null,
        "customfield_11600": null,
        "environment": null,
        "duedate": null
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "88084",
      "self": "https://goeuro.atlassian.net/rest/api/2/issue/88084",
      "key": "AD-1239",
      "fields": {
        "fixVersions": [

        ],
        "resolution": null,
        "customfield_12800": null,
        "customfield_12802": null,
        "customfield_12801": null,
        "customfield_12804": null,
        "customfield_12803": null,
        "customfield_12806": null,
        "customfield_10903": null,
        "customfield_12805": null,
        "lastViewed": "2017-07-14T16:09:41.870+0200",
        "customfield_12000": null,
        "priority": {
          "self": "https://goeuro.atlassian.net/rest/api/2/priority/6",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/priority_major.gif",
          "name": "Normal (P3)",
          "id": "6"
        },
        "customfield_12400": null,
        "customfield_12402": null,
        "customfield_10102": null,
        "labels": [

        ],
        "customfield_12401": null,
        "customfield_11303": null,
        "customfield_11305": null,
        "customfield_11306": null,
        "customfield_11307": null,
        "timeestimate": null,
        "aggregatetimeoriginalestimate": null,
        "customfield_11308": null,
        "versions": [

        ],
        "issuelinks": [

        ],
        "assignee": null,
        "status": {
          "self": "https://goeuro.atlassian.net/rest/api/2/status/1",
          "description": "",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/statuses/open.png",
          "name": "To Do",
          "id": "1",
          "statusCategory": {
            "self": "https://goeuro.atlassian.net/rest/api/2/statuscategory/2",
            "id": 2,
            "key": "new",
            "colorName": "blue-gray",
            "name": "To Do"
          }
        },
        "components": [

        ],
        "customfield_10050": null,
        "customfield_10051": null,
        "customfield_10052": null,
        "customfield_11301": null,
        "customfield_11302": null,
        "customfield_10049": null,
        "customfield_10600": null,
        "customfield_10601": [

        ],
        "customfield_12900": null,
        "customfield_10602": null,
        "aggregatetimeestimate": null,
        "creator": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "subtasks": [

        ],
        "reporter": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "customfield_12100": "{}",
        "aggregateprogress": {
          "progress": 0,
          "total": 0
        },
        "customfield_10200": "1|i04vzz:",
        "customfield_10201": null,
        "customfield_12500": null,
        "customfield_11800": null,
        "progress": {
          "progress": 0,
          "total": 0
        },
        "votes": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1239/votes",
          "votes": 0,
          "hasVoted": false
        },
        "issuetype": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issuetype/10000",
          "id": "10000",
          "description": "Created by JIRA Software - do not edit or delete. Issue type for a big user story that needs to be broken down.",
          "iconUrl": "https://goeuro.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10307&avatarType=issuetype",
          "name": "Epic",
          "subtask": false,
          "avatarId": 10307
        },
        "timespent": null,
        "project": {
          "self": "https://goeuro.atlassian.net/rest/api/2/project/11801",
          "id": "11801",
          "key": "AD",
          "name": "Advertising",
          "avatarUrls": {
            "48x48": "https://goeuro.atlassian.net/secure/projectavatar?pid=11801&avatarId=18802",
            "24x24": "https://goeuro.atlassian.net/secure/projectavatar?size=small&pid=11801&avatarId=18802",
            "16x16": "https://goeuro.atlassian.net/secure/projectavatar?size=xsmall&pid=11801&avatarId=18802",
            "32x32": "https://goeuro.atlassian.net/secure/projectavatar?size=medium&pid=11801&avatarId=18802"
          }
        },
        "aggregatetimespent": null,
        "customfield_10701": null,
        "resolutiondate": null,
        "workratio": -1,
        "watches": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1239/watchers",
          "watchCount": 1,
          "isWatching": true
        },
        "created": "2017-07-14T16:09:41.000+0200",
        "customfield_10020": null,
        "customfield_10021": null,
        "customfield_12200": null,
        "customfield_10024": null,
        "customfield_12600": null,
        "customfield_10300": null,
        "customfield_10026": null,
        "customfield_10016": null,
        "customfield_10017": null,
        "customfield_10018": null,
        "customfield_10019": null,
        "customfield_11902": "{panel:bgColor=#EAECFF}\r\nh3. Issue Summary\r\n* short summary (5 sentences)\r\n* list the duration along with start and end times (include timezone)\r\n* state the impact (e.g. most user requests resulted in 500 errors, at peak 100%)\r\n* close with root cause\r\n\r\nh3. Timeline\r\n* list the timezone\r\n* covers the outage duration\r\n* when outage began\r\n* when staff was notified\r\n* actions, events, ...\r\n* when service was restored\r\n\r\nh3. Root Cause\r\n\r\nh3. Resolution and recovery\r\n* give detailed explanation of actions taken (includes times)\r\n\r\nh3. Corrective and Preventative Measures\r\n(flag) Action items should be created as a tickets and linked to this report\r\n* itemized list of ways to prevent it from happening again\r\n* what can we do better next time?\r\n{panel}",
        "updated": "2017-07-14T16:15:52.000+0200",
        "timeoriginalestimate": null,
        "description": null,
        "customfield_10010": {
          "self": "https://goeuro.atlassian.net/rest/api/2/customFieldOption/10001",
          "value": "To Do",
          "id": "10001"
        },
        "customfield_10011": "ghx-label-12",
        "customfield_11100": null,
        "customfield_10012": null,
        "customfield_10013": null,
        "customfield_10014": null,
        "customfield_10015": null,
        "customfield_10005": null,
        "customfield_12701": null,
        "customfield_12700": null,
        "customfield_12703": null,
        "customfield_10007": null,
        "customfield_12702": null,
        "customfield_10008": null,
        "customfield_10801": null,
        "customfield_12705": null,
        "customfield_10009": "Increase web2App Conversion",
        "customfield_12704": null,
        "customfield_12706": null,
        "summary": "Increase web2App Conversion",
        "customfield_10001": null,
        "customfield_10002": null,
        "customfield_12300": null,
        "customfield_10003": null,
        "customfield_10004": null,
        "customfield_10400": null,
        "customfield_11600": null,
        "environment": null,
        "duedate": null
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "88082",
      "self": "https://goeuro.atlassian.net/rest/api/2/issue/88082",
      "key": "AD-1238",
      "fields": {
        "fixVersions": [

        ],
        "resolution": null,
        "customfield_12800": null,
        "customfield_12802": null,
        "customfield_12801": null,
        "customfield_12804": null,
        "customfield_12803": null,
        "customfield_12806": null,
        "customfield_10903": null,
        "customfield_12805": null,
        "lastViewed": "2017-07-14T15:50:53.165+0200",
        "customfield_12000": null,
        "priority": {
          "self": "https://goeuro.atlassian.net/rest/api/2/priority/6",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/priority_major.gif",
          "name": "Normal (P3)",
          "id": "6"
        },
        "customfield_12400": null,
        "customfield_12402": null,
        "customfield_10102": null,
        "customfield_12401": null,
        "labels": [

        ],
        "customfield_11303": null,
        "customfield_11305": null,
        "customfield_11306": null,
        "timeestimate": null,
        "aggregatetimeoriginalestimate": null,
        "customfield_11307": null,
        "versions": [

        ],
        "customfield_11308": null,
        "issuelinks": [

        ],
        "assignee": null,
        "status": {
          "self": "https://goeuro.atlassian.net/rest/api/2/status/1",
          "description": "",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/statuses/open.png",
          "name": "To Do",
          "id": "1",
          "statusCategory": {
            "self": "https://goeuro.atlassian.net/rest/api/2/statuscategory/2",
            "id": 2,
            "key": "new",
            "colorName": "blue-gray",
            "name": "To Do"
          }
        },
        "components": [

        ],
        "customfield_10050": null,
        "customfield_10051": null,
        "customfield_10052": null,
        "customfield_11301": null,
        "customfield_11302": null,
        "customfield_10049": null,
        "customfield_10600": null,
        "customfield_10601": [

        ],
        "customfield_10602": null,
        "customfield_12900": null,
        "aggregatetimeestimate": null,
        "creator": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "subtasks": [

        ],
        "reporter": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "customfield_12100": "{}",
        "aggregateprogress": {
          "progress": 0,
          "total": 0
        },
        "customfield_10200": "1|hzuz74:1m0n3ky",
        "customfield_10201": null,
        "customfield_12500": null,
        "customfield_11800": null,
        "progress": {
          "progress": 0,
          "total": 0
        },
        "votes": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1238/votes",
          "votes": 0,
          "hasVoted": false
        },
        "issuetype": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issuetype/10001",
          "id": "10001",
          "description": "Created by JIRA Agile - do not edit or delete. Issue type for a user story.",
          "iconUrl": "https://goeuro.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10315&avatarType=issuetype",
          "name": "Story",
          "subtask": false,
          "avatarId": 10315
        },
        "timespent": null,
        "project": {
          "self": "https://goeuro.atlassian.net/rest/api/2/project/11801",
          "id": "11801",
          "key": "AD",
          "name": "Advertising",
          "avatarUrls": {
            "48x48": "https://goeuro.atlassian.net/secure/projectavatar?pid=11801&avatarId=18802",
            "24x24": "https://goeuro.atlassian.net/secure/projectavatar?size=small&pid=11801&avatarId=18802",
            "16x16": "https://goeuro.atlassian.net/secure/projectavatar?size=xsmall&pid=11801&avatarId=18802",
            "32x32": "https://goeuro.atlassian.net/secure/projectavatar?size=medium&pid=11801&avatarId=18802"
          }
        },
        "aggregatetimespent": null,
        "customfield_10701": null,
        "resolutiondate": null,
        "workratio": -1,
        "watches": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1238/watchers",
          "watchCount": 1,
          "isWatching": true
        },
        "created": "2017-07-14T15:50:52.000+0200",
        "customfield_10020": null,
        "customfield_10021": null,
        "customfield_12200": null,
        "customfield_10024": null,
        "customfield_12600": null,
        "customfield_10300": null,
        "customfield_10026": null,
        "customfield_10016": null,
        "customfield_11501": null,
        "customfield_10017": null,
        "customfield_10018": null,
        "customfield_10019": null,
        "customfield_11902": "{panel:bgColor=#EAECFF}\r\nh3. Issue Summary\r\n* short summary (5 sentences)\r\n* list the duration along with start and end times (include timezone)\r\n* state the impact (e.g. most user requests resulted in 500 errors, at peak 100%)\r\n* close with root cause\r\n\r\nh3. Timeline\r\n* list the timezone\r\n* covers the outage duration\r\n* when outage began\r\n* when staff was notified\r\n* actions, events, ...\r\n* when service was restored\r\n\r\nh3. Root Cause\r\n\r\nh3. Resolution and recovery\r\n* give detailed explanation of actions taken (includes times)\r\n\r\nh3. Corrective and Preventative Measures\r\n(flag) Action items should be created as a tickets and linked to this report\r\n* itemized list of ways to prevent it from happening again\r\n* what can we do better next time?\r\n{panel}",
        "updated": "2017-07-14T15:50:55.000+0200",
        "timeoriginalestimate": null,
        "description": null,
        "customfield_11100": null,
        "customfield_10012": null,
        "customfield_10013": null,
        "customfield_10014": null,
        "customfield_11500": null,
        "customfield_10015": null,
        "customfield_10005": null,
        "customfield_12701": null,
        "customfield_12700": null,
        "customfield_10007": null,
        "customfield_12703": null,
        "customfield_10008": "AD-1233",
        "customfield_12702": null,
        "customfield_12705": null,
        "customfield_10801": null,
        "customfield_12704": null,
        "customfield_12706": null,
        "summary": "Add More Cities To ADP",
        "customfield_10001": null,
        "customfield_10002": null,
        "customfield_12300": null,
        "customfield_10003": null,
        "customfield_10004": null,
        "customfield_10400": null,
        "customfield_11600": null,
        "environment": null,
        "duedate": null
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "88081",
      "self": "https://goeuro.atlassian.net/rest/api/2/issue/88081",
      "key": "AD-1237",
      "fields": {
        "fixVersions": [

        ],
        "resolution": null,
        "customfield_12800": null,
        "customfield_12802": null,
        "customfield_12801": null,
        "customfield_12804": null,
        "customfield_12803": null,
        "customfield_12806": null,
        "customfield_10903": null,
        "customfield_12805": null,
        "lastViewed": "2017-07-14T15:49:57.417+0200",
        "customfield_12000": null,
        "customfield_12400": null,
        "priority": {
          "self": "https://goeuro.atlassian.net/rest/api/2/priority/6",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/priority_major.gif",
          "name": "Normal (P3)",
          "id": "6"
        },
        "customfield_12402": null,
        "customfield_10102": null,
        "customfield_12401": null,
        "labels": [

        ],
        "customfield_11303": null,
        "customfield_11305": null,
        "customfield_11306": null,
        "timeestimate": null,
        "customfield_11307": null,
        "aggregatetimeoriginalestimate": null,
        "versions": [

        ],
        "customfield_11308": null,
        "issuelinks": [

        ],
        "assignee": null,
        "status": {
          "self": "https://goeuro.atlassian.net/rest/api/2/status/1",
          "description": "",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/statuses/open.png",
          "name": "To Do",
          "id": "1",
          "statusCategory": {
            "self": "https://goeuro.atlassian.net/rest/api/2/statuscategory/2",
            "id": 2,
            "key": "new",
            "colorName": "blue-gray",
            "name": "To Do"
          }
        },
        "components": [

        ],
        "customfield_10050": null,
        "customfield_10051": null,
        "customfield_10052": null,
        "customfield_11301": null,
        "customfield_11302": null,
        "customfield_10049": null,
        "customfield_10600": null,
        "customfield_10601": [

        ],
        "customfield_10602": null,
        "customfield_12900": null,
        "aggregatetimeestimate": null,
        "creator": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "subtasks": [

        ],
        "reporter": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "aggregateprogress": {
          "progress": 0,
          "total": 0
        },
        "customfield_12100": "{}",
        "customfield_10200": "1|hzuz74:1m0n3kx",
        "customfield_10201": null,
        "customfield_12500": null,
        "customfield_11800": null,
        "progress": {
          "progress": 0,
          "total": 0
        },
        "votes": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1237/votes",
          "votes": 0,
          "hasVoted": false
        },
        "issuetype": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issuetype/10001",
          "id": "10001",
          "description": "Created by JIRA Agile - do not edit or delete. Issue type for a user story.",
          "iconUrl": "https://goeuro.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10315&avatarType=issuetype",
          "name": "Story",
          "subtask": false,
          "avatarId": 10315
        },
        "timespent": null,
        "project": {
          "self": "https://goeuro.atlassian.net/rest/api/2/project/11801",
          "id": "11801",
          "key": "AD",
          "name": "Advertising",
          "avatarUrls": {
            "48x48": "https://goeuro.atlassian.net/secure/projectavatar?pid=11801&avatarId=18802",
            "24x24": "https://goeuro.atlassian.net/secure/projectavatar?size=small&pid=11801&avatarId=18802",
            "16x16": "https://goeuro.atlassian.net/secure/projectavatar?size=xsmall&pid=11801&avatarId=18802",
            "32x32": "https://goeuro.atlassian.net/secure/projectavatar?size=medium&pid=11801&avatarId=18802"
          }
        },
        "aggregatetimespent": null,
        "customfield_10701": null,
        "resolutiondate": null,
        "workratio": -1,
        "watches": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1237/watchers",
          "watchCount": 1,
          "isWatching": true
        },
        "created": "2017-07-14T15:49:56.000+0200",
        "customfield_10020": null,
        "customfield_12200": null,
        "customfield_10021": null,
        "customfield_10024": null,
        "customfield_12600": null,
        "customfield_10300": null,
        "customfield_10026": null,
        "customfield_10016": null,
        "customfield_10017": null,
        "customfield_11501": null,
        "customfield_10018": null,
        "customfield_10019": null,
        "customfield_11902": "{panel:bgColor=#EAECFF}\r\nh3. Issue Summary\r\n* short summary (5 sentences)\r\n* list the duration along with start and end times (include timezone)\r\n* state the impact (e.g. most user requests resulted in 500 errors, at peak 100%)\r\n* close with root cause\r\n\r\nh3. Timeline\r\n* list the timezone\r\n* covers the outage duration\r\n* when outage began\r\n* when staff was notified\r\n* actions, events, ...\r\n* when service was restored\r\n\r\nh3. Root Cause\r\n\r\nh3. Resolution and recovery\r\n* give detailed explanation of actions taken (includes times)\r\n\r\nh3. Corrective and Preventative Measures\r\n(flag) Action items should be created as a tickets and linked to this report\r\n* itemized list of ways to prevent it from happening again\r\n* what can we do better next time?\r\n{panel}",
        "updated": "2017-07-14T15:50:54.000+0200",
        "timeoriginalestimate": null,
        "description": null,
        "customfield_11100": null,
        "customfield_10012": null,
        "customfield_10013": null,
        "customfield_10014": null,
        "customfield_11500": null,
        "customfield_10015": null,
        "customfield_12701": null,
        "customfield_10005": null,
        "customfield_12700": null,
        "customfield_10007": null,
        "customfield_12703": null,
        "customfield_10008": "AD-1233",
        "customfield_12702": null,
        "customfield_12705": null,
        "customfield_10801": null,
        "customfield_12704": null,
        "customfield_12706": null,
        "summary": "Add ADP Button To BCE",
        "customfield_10001": null,
        "customfield_10002": null,
        "customfield_12300": null,
        "customfield_10003": null,
        "customfield_10004": null,
        "customfield_10400": null,
        "customfield_11600": null,
        "environment": null,
        "duedate": null
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "88080",
      "self": "https://goeuro.atlassian.net/rest/api/2/issue/88080",
      "key": "AD-1236",
      "fields": {
        "fixVersions": [

        ],
        "resolution": null,
        "customfield_12800": null,
        "customfield_12802": null,
        "customfield_12801": null,
        "customfield_12804": null,
        "customfield_12803": null,
        "customfield_12806": null,
        "customfield_10903": null,
        "customfield_12805": null,
        "lastViewed": "2017-07-14T15:49:46.587+0200",
        "customfield_12000": null,
        "priority": {
          "self": "https://goeuro.atlassian.net/rest/api/2/priority/6",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/priority_major.gif",
          "name": "Normal (P3)",
          "id": "6"
        },
        "customfield_12400": null,
        "customfield_10102": null,
        "customfield_12402": null,
        "labels": [

        ],
        "customfield_12401": null,
        "customfield_11303": null,
        "customfield_11305": null,
        "customfield_11306": null,
        "customfield_11307": null,
        "aggregatetimeoriginalestimate": null,
        "timeestimate": null,
        "versions": [

        ],
        "customfield_11308": null,
        "issuelinks": [

        ],
        "assignee": null,
        "status": {
          "self": "https://goeuro.atlassian.net/rest/api/2/status/1",
          "description": "",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/statuses/open.png",
          "name": "To Do",
          "id": "1",
          "statusCategory": {
            "self": "https://goeuro.atlassian.net/rest/api/2/statuscategory/2",
            "id": 2,
            "key": "new",
            "colorName": "blue-gray",
            "name": "To Do"
          }
        },
        "components": [

        ],
        "customfield_10050": null,
        "customfield_10051": null,
        "customfield_10052": null,
        "customfield_11301": null,
        "customfield_11302": null,
        "customfield_10049": null,
        "customfield_10600": null,
        "customfield_10601": [

        ],
        "customfield_12900": null,
        "customfield_10602": null,
        "aggregatetimeestimate": null,
        "creator": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "subtasks": [

        ],
        "reporter": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "aggregateprogress": {
          "progress": 0,
          "total": 0
        },
        "customfield_12100": "{}",
        "customfield_10200": "1|hzuz74:1m0n3kv",
        "customfield_10201": null,
        "customfield_12500": null,
        "customfield_11800": null,
        "progress": {
          "progress": 0,
          "total": 0
        },
        "votes": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1236/votes",
          "votes": 0,
          "hasVoted": false
        },
        "issuetype": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issuetype/10001",
          "id": "10001",
          "description": "Created by JIRA Agile - do not edit or delete. Issue type for a user story.",
          "iconUrl": "https://goeuro.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10315&avatarType=issuetype",
          "name": "Story",
          "subtask": false,
          "avatarId": 10315
        },
        "timespent": null,
        "project": {
          "self": "https://goeuro.atlassian.net/rest/api/2/project/11801",
          "id": "11801",
          "key": "AD",
          "name": "Advertising",
          "avatarUrls": {
            "48x48": "https://goeuro.atlassian.net/secure/projectavatar?pid=11801&avatarId=18802",
            "24x24": "https://goeuro.atlassian.net/secure/projectavatar?size=small&pid=11801&avatarId=18802",
            "16x16": "https://goeuro.atlassian.net/secure/projectavatar?size=xsmall&pid=11801&avatarId=18802",
            "32x32": "https://goeuro.atlassian.net/secure/projectavatar?size=medium&pid=11801&avatarId=18802"
          }
        },
        "aggregatetimespent": null,
        "customfield_10701": null,
        "resolutiondate": null,
        "workratio": -1,
        "watches": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1236/watchers",
          "watchCount": 1,
          "isWatching": true
        },
        "created": "2017-07-14T15:49:45.000+0200",
        "customfield_10020": null,
        "customfield_10021": null,
        "customfield_12200": null,
        "customfield_10024": null,
        "customfield_12600": null,
        "customfield_10300": null,
        "customfield_10026": null,
        "customfield_10016": null,
        "customfield_10017": null,
        "customfield_11501": null,
        "customfield_10018": null,
        "customfield_10019": null,
        "customfield_11902": "{panel:bgColor=#EAECFF}\r\nh3. Issue Summary\r\n* short summary (5 sentences)\r\n* list the duration along with start and end times (include timezone)\r\n* state the impact (e.g. most user requests resulted in 500 errors, at peak 100%)\r\n* close with root cause\r\n\r\nh3. Timeline\r\n* list the timezone\r\n* covers the outage duration\r\n* when outage began\r\n* when staff was notified\r\n* actions, events, ...\r\n* when service was restored\r\n\r\nh3. Root Cause\r\n\r\nh3. Resolution and recovery\r\n* give detailed explanation of actions taken (includes times)\r\n\r\nh3. Corrective and Preventative Measures\r\n(flag) Action items should be created as a tickets and linked to this report\r\n* itemized list of ways to prevent it from happening again\r\n* what can we do better next time?\r\n{panel}",
        "updated": "2017-07-14T15:50:54.000+0200",
        "timeoriginalestimate": null,
        "description": null,
        "customfield_11100": null,
        "customfield_10012": null,
        "customfield_10013": null,
        "customfield_10014": null,
        "customfield_11500": null,
        "customfield_10015": null,
        "customfield_10005": null,
        "customfield_12701": null,
        "customfield_12700": null,
        "customfield_12703": null,
        "customfield_10007": null,
        "customfield_10008": "AD-1233",
        "customfield_12702": null,
        "customfield_10801": null,
        "customfield_12705": null,
        "customfield_12704": null,
        "customfield_12706": null,
        "summary": "Add ADP Button to BSP",
        "customfield_10001": null,
        "customfield_12300": null,
        "customfield_10002": null,
        "customfield_10003": null,
        "customfield_10400": null,
        "customfield_10004": null,
        "customfield_11600": null,
        "environment": null,
        "duedate": null
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "88079",
      "self": "https://goeuro.atlassian.net/rest/api/2/issue/88079",
      "key": "AD-1235",
      "fields": {
        "fixVersions": [

        ],
        "resolution": null,
        "customfield_12800": null,
        "customfield_12802": null,
        "customfield_12801": null,
        "customfield_12804": null,
        "customfield_12803": null,
        "customfield_12806": null,
        "customfield_12805": null,
        "customfield_10903": null,
        "lastViewed": "2017-07-14T15:49:36.858+0200",
        "customfield_12000": null,
        "priority": {
          "self": "https://goeuro.atlassian.net/rest/api/2/priority/6",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/priority_major.gif",
          "name": "Normal (P3)",
          "id": "6"
        },
        "customfield_12400": null,
        "customfield_12402": null,
        "customfield_10102": null,
        "labels": [

        ],
        "customfield_12401": null,
        "customfield_11303": null,
        "customfield_11305": null,
        "customfield_11306": null,
        "timeestimate": null,
        "aggregatetimeoriginalestimate": null,
        "customfield_11307": null,
        "customfield_11308": null,
        "versions": [

        ],
        "issuelinks": [

        ],
        "assignee": null,
        "status": {
          "self": "https://goeuro.atlassian.net/rest/api/2/status/1",
          "description": "",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/statuses/open.png",
          "name": "To Do",
          "id": "1",
          "statusCategory": {
            "self": "https://goeuro.atlassian.net/rest/api/2/statuscategory/2",
            "id": 2,
            "key": "new",
            "colorName": "blue-gray",
            "name": "To Do"
          }
        },
        "components": [

        ],
        "customfield_10050": null,
        "customfield_10051": null,
        "customfield_10052": null,
        "customfield_11301": null,
        "customfield_11302": null,
        "customfield_10049": null,
        "customfield_10600": null,
        "customfield_10601": [

        ],
        "customfield_12900": null,
        "customfield_10602": null,
        "aggregatetimeestimate": null,
        "creator": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "subtasks": [

        ],
        "reporter": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "customfield_12100": "{}",
        "aggregateprogress": {
          "progress": 0,
          "total": 0
        },
        "customfield_10200": "1|hzuz74:1m0n3kr",
        "customfield_10201": null,
        "customfield_12500": null,
        "customfield_11800": null,
        "progress": {
          "progress": 0,
          "total": 0
        },
        "votes": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1235/votes",
          "votes": 0,
          "hasVoted": false
        },
        "issuetype": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issuetype/10001",
          "id": "10001",
          "description": "Created by JIRA Agile - do not edit or delete. Issue type for a user story.",
          "iconUrl": "https://goeuro.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10315&avatarType=issuetype",
          "name": "Story",
          "subtask": false,
          "avatarId": 10315
        },
        "timespent": null,
        "project": {
          "self": "https://goeuro.atlassian.net/rest/api/2/project/11801",
          "id": "11801",
          "key": "AD",
          "name": "Advertising",
          "avatarUrls": {
            "48x48": "https://goeuro.atlassian.net/secure/projectavatar?pid=11801&avatarId=18802",
            "24x24": "https://goeuro.atlassian.net/secure/projectavatar?size=small&pid=11801&avatarId=18802",
            "16x16": "https://goeuro.atlassian.net/secure/projectavatar?size=xsmall&pid=11801&avatarId=18802",
            "32x32": "https://goeuro.atlassian.net/secure/projectavatar?size=medium&pid=11801&avatarId=18802"
          }
        },
        "aggregatetimespent": null,
        "customfield_10701": null,
        "resolutiondate": null,
        "workratio": -1,
        "watches": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1235/watchers",
          "watchCount": 1,
          "isWatching": true
        },
        "created": "2017-07-14T15:49:36.000+0200",
        "customfield_10020": null,
        "customfield_10021": null,
        "customfield_12200": null,
        "customfield_10024": null,
        "customfield_10300": null,
        "customfield_12600": null,
        "customfield_10026": null,
        "customfield_10016": null,
        "customfield_10017": null,
        "customfield_11501": null,
        "customfield_10018": null,
        "customfield_10019": null,
        "customfield_11902": "{panel:bgColor=#EAECFF}\r\nh3. Issue Summary\r\n* short summary (5 sentences)\r\n* list the duration along with start and end times (include timezone)\r\n* state the impact (e.g. most user requests resulted in 500 errors, at peak 100%)\r\n* close with root cause\r\n\r\nh3. Timeline\r\n* list the timezone\r\n* covers the outage duration\r\n* when outage began\r\n* when staff was notified\r\n* actions, events, ...\r\n* when service was restored\r\n\r\nh3. Root Cause\r\n\r\nh3. Resolution and recovery\r\n* give detailed explanation of actions taken (includes times)\r\n\r\nh3. Corrective and Preventative Measures\r\n(flag) Action items should be created as a tickets and linked to this report\r\n* itemized list of ways to prevent it from happening again\r\n* what can we do better next time?\r\n{panel}",
        "updated": "2017-07-14T15:50:54.000+0200",
        "timeoriginalestimate": null,
        "description": null,
        "customfield_11100": null,
        "customfield_10012": null,
        "customfield_10013": null,
        "customfield_10014": null,
        "customfield_11500": null,
        "customfield_10015": null,
        "customfield_10005": null,
        "customfield_12701": null,
        "customfield_12700": null,
        "customfield_12703": null,
        "customfield_10007": null,
        "customfield_12702": null,
        "customfield_10008": "AD-1233",
        "customfield_10801": null,
        "customfield_12705": null,
        "customfield_12704": null,
        "customfield_12706": null,
        "summary": "Add More Partners To Side Widget",
        "customfield_10001": null,
        "customfield_10002": null,
        "customfield_12300": null,
        "customfield_10003": null,
        "customfield_10400": null,
        "customfield_10004": null,
        "customfield_11600": null,
        "environment": null,
        "duedate": null
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "88077",
      "self": "https://goeuro.atlassian.net/rest/api/2/issue/88077",
      "key": "AD-1234",
      "fields": {
        "fixVersions": [

        ],
        "resolution": null,
        "customfield_12800": null,
        "customfield_12802": null,
        "customfield_12801": null,
        "customfield_12804": null,
        "customfield_12803": null,
        "customfield_12806": null,
        "customfield_12805": null,
        "customfield_10903": null,
        "lastViewed": "2017-07-14T15:49:06.334+0200",
        "customfield_12000": null,
        "customfield_12400": null,
        "priority": {
          "self": "https://goeuro.atlassian.net/rest/api/2/priority/6",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/priority_major.gif",
          "name": "Normal (P3)",
          "id": "6"
        },
        "customfield_10102": null,
        "customfield_12402": null,
        "labels": [

        ],
        "customfield_12401": null,
        "customfield_11303": null,
        "customfield_11305": null,
        "customfield_11306": null,
        "customfield_11307": null,
        "timeestimate": null,
        "aggregatetimeoriginalestimate": null,
        "versions": [

        ],
        "customfield_11308": null,
        "issuelinks": [

        ],
        "assignee": null,
        "status": {
          "self": "https://goeuro.atlassian.net/rest/api/2/status/1",
          "description": "",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/statuses/open.png",
          "name": "To Do",
          "id": "1",
          "statusCategory": {
            "self": "https://goeuro.atlassian.net/rest/api/2/statuscategory/2",
            "id": 2,
            "key": "new",
            "colorName": "blue-gray",
            "name": "To Do"
          }
        },
        "components": [

        ],
        "customfield_10050": null,
        "customfield_10051": null,
        "customfield_10052": null,
        "customfield_11301": null,
        "customfield_11302": null,
        "customfield_10049": null,
        "customfield_10600": null,
        "customfield_10601": [

        ],
        "customfield_12900": null,
        "customfield_10602": null,
        "aggregatetimeestimate": null,
        "creator": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "subtasks": [

        ],
        "reporter": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "aggregateprogress": {
          "progress": 0,
          "total": 0
        },
        "customfield_12100": "{}",
        "customfield_10200": "1|hzuz74:1m0n3ki",
        "customfield_10201": null,
        "customfield_12500": null,
        "customfield_11800": null,
        "progress": {
          "progress": 0,
          "total": 0
        },
        "votes": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1234/votes",
          "votes": 0,
          "hasVoted": false
        },
        "issuetype": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issuetype/10001",
          "id": "10001",
          "description": "Created by JIRA Agile - do not edit or delete. Issue type for a user story.",
          "iconUrl": "https://goeuro.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10315&avatarType=issuetype",
          "name": "Story",
          "subtask": false,
          "avatarId": 10315
        },
        "timespent": null,
        "project": {
          "self": "https://goeuro.atlassian.net/rest/api/2/project/11801",
          "id": "11801",
          "key": "AD",
          "name": "Advertising",
          "avatarUrls": {
            "48x48": "https://goeuro.atlassian.net/secure/projectavatar?pid=11801&avatarId=18802",
            "24x24": "https://goeuro.atlassian.net/secure/projectavatar?size=small&pid=11801&avatarId=18802",
            "16x16": "https://goeuro.atlassian.net/secure/projectavatar?size=xsmall&pid=11801&avatarId=18802",
            "32x32": "https://goeuro.atlassian.net/secure/projectavatar?size=medium&pid=11801&avatarId=18802"
          }
        },
        "aggregatetimespent": null,
        "customfield_10701": null,
        "resolutiondate": null,
        "workratio": -1,
        "watches": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1234/watchers",
          "watchCount": 1,
          "isWatching": true
        },
        "created": "2017-07-14T15:49:05.000+0200",
        "customfield_10020": null,
        "customfield_12200": null,
        "customfield_10021": null,
        "customfield_10024": null,
        "customfield_12600": null,
        "customfield_10300": null,
        "customfield_10026": null,
        "customfield_10016": null,
        "customfield_11501": null,
        "customfield_10017": null,
        "customfield_10018": null,
        "customfield_10019": null,
        "customfield_11902": "{panel:bgColor=#EAECFF}\r\nh3. Issue Summary\r\n* short summary (5 sentences)\r\n* list the duration along with start and end times (include timezone)\r\n* state the impact (e.g. most user requests resulted in 500 errors, at peak 100%)\r\n* close with root cause\r\n\r\nh3. Timeline\r\n* list the timezone\r\n* covers the outage duration\r\n* when outage began\r\n* when staff was notified\r\n* actions, events, ...\r\n* when service was restored\r\n\r\nh3. Root Cause\r\n\r\nh3. Resolution and recovery\r\n* give detailed explanation of actions taken (includes times)\r\n\r\nh3. Corrective and Preventative Measures\r\n(flag) Action items should be created as a tickets and linked to this report\r\n* itemized list of ways to prevent it from happening again\r\n* what can we do better next time?\r\n{panel}",
        "updated": "2017-07-14T15:50:54.000+0200",
        "timeoriginalestimate": null,
        "description": null,
        "customfield_11100": null,
        "customfield_10012": null,
        "customfield_10013": null,
        "customfield_11500": null,
        "customfield_10014": null,
        "customfield_10015": null,
        "customfield_10005": null,
        "customfield_12701": null,
        "customfield_12700": null,
        "customfield_12703": null,
        "customfield_10007": null,
        "customfield_12702": null,
        "customfield_10008": "AD-1233",
        "customfield_10801": null,
        "customfield_12705": null,
        "customfield_12704": null,
        "customfield_12706": null,
        "summary": "Create Ads Component Repo",
        "customfield_10001": null,
        "customfield_12300": null,
        "customfield_10002": null,
        "customfield_10003": null,
        "customfield_10004": null,
        "customfield_10400": null,
        "customfield_11600": null,
        "environment": null,
        "duedate": null
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "88076",
      "self": "https://goeuro.atlassian.net/rest/api/2/issue/88076",
      "key": "AD-1233",
      "fields": {
        "fixVersions": [

        ],
        "resolution": null,
        "customfield_12800": null,
        "customfield_12802": null,
        "customfield_12801": null,
        "customfield_12804": null,
        "customfield_12803": null,
        "customfield_12806": null,
        "customfield_10903": null,
        "customfield_12805": null,
        "lastViewed": "2017-07-14T15:48:22.844+0200",
        "customfield_12000": null,
        "priority": {
          "self": "https://goeuro.atlassian.net/rest/api/2/priority/6",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/priority_major.gif",
          "name": "Normal (P3)",
          "id": "6"
        },
        "customfield_12400": null,
        "customfield_12402": null,
        "customfield_10102": null,
        "labels": [

        ],
        "customfield_12401": null,
        "customfield_11303": null,
        "customfield_11305": null,
        "customfield_11306": null,
        "timeestimate": null,
        "aggregatetimeoriginalestimate": null,
        "customfield_11307": null,
        "versions": [

        ],
        "customfield_11308": null,
        "issuelinks": [

        ],
        "assignee": null,
        "status": {
          "self": "https://goeuro.atlassian.net/rest/api/2/status/1",
          "description": "",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/statuses/open.png",
          "name": "To Do",
          "id": "1",
          "statusCategory": {
            "self": "https://goeuro.atlassian.net/rest/api/2/statuscategory/2",
            "id": 2,
            "key": "new",
            "colorName": "blue-gray",
            "name": "To Do"
          }
        },
        "components": [

        ],
        "customfield_10050": null,
        "customfield_10051": null,
        "customfield_10052": null,
        "customfield_11301": null,
        "customfield_11302": null,
        "customfield_10049": null,
        "customfield_10600": null,
        "customfield_10601": [

        ],
        "customfield_10602": null,
        "customfield_12900": null,
        "aggregatetimeestimate": null,
        "creator": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "subtasks": [

        ],
        "reporter": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "customfield_12100": "{}",
        "aggregateprogress": {
          "progress": 0,
          "total": 0
        },
        "customfield_10200": "1|i04vzj:",
        "customfield_10201": null,
        "customfield_12500": null,
        "customfield_11800": null,
        "progress": {
          "progress": 0,
          "total": 0
        },
        "votes": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1233/votes",
          "votes": 0,
          "hasVoted": false
        },
        "issuetype": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issuetype/10000",
          "id": "10000",
          "description": "Created by JIRA Software - do not edit or delete. Issue type for a big user story that needs to be broken down.",
          "iconUrl": "https://goeuro.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10307&avatarType=issuetype",
          "name": "Epic",
          "subtask": false,
          "avatarId": 10307
        },
        "timespent": null,
        "project": {
          "self": "https://goeuro.atlassian.net/rest/api/2/project/11801",
          "id": "11801",
          "key": "AD",
          "name": "Advertising",
          "avatarUrls": {
            "48x48": "https://goeuro.atlassian.net/secure/projectavatar?pid=11801&avatarId=18802",
            "24x24": "https://goeuro.atlassian.net/secure/projectavatar?size=small&pid=11801&avatarId=18802",
            "16x16": "https://goeuro.atlassian.net/secure/projectavatar?size=xsmall&pid=11801&avatarId=18802",
            "32x32": "https://goeuro.atlassian.net/secure/projectavatar?size=medium&pid=11801&avatarId=18802"
          }
        },
        "aggregatetimespent": null,
        "customfield_10701": null,
        "resolutiondate": null,
        "workratio": -1,
        "watches": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1233/watchers",
          "watchCount": 1,
          "isWatching": true
        },
        "created": "2017-07-14T15:48:22.000+0200",
        "customfield_10020": null,
        "customfield_10021": null,
        "customfield_12200": null,
        "customfield_10024": null,
        "customfield_10300": null,
        "customfield_12600": null,
        "customfield_10026": null,
        "customfield_10016": null,
        "customfield_10017": null,
        "customfield_10018": null,
        "customfield_10019": null,
        "customfield_11902": "{panel:bgColor=#EAECFF}\r\nh3. Issue Summary\r\n* short summary (5 sentences)\r\n* list the duration along with start and end times (include timezone)\r\n* state the impact (e.g. most user requests resulted in 500 errors, at peak 100%)\r\n* close with root cause\r\n\r\nh3. Timeline\r\n* list the timezone\r\n* covers the outage duration\r\n* when outage began\r\n* when staff was notified\r\n* actions, events, ...\r\n* when service was restored\r\n\r\nh3. Root Cause\r\n\r\nh3. Resolution and recovery\r\n* give detailed explanation of actions taken (includes times)\r\n\r\nh3. Corrective and Preventative Measures\r\n(flag) Action items should be created as a tickets and linked to this report\r\n* itemized list of ways to prevent it from happening again\r\n* what can we do better next time?\r\n{panel}",
        "updated": "2017-07-14T15:52:46.000+0200",
        "timeoriginalestimate": null,
        "description": null,
        "customfield_10010": {
          "self": "https://goeuro.atlassian.net/rest/api/2/customFieldOption/10001",
          "value": "To Do",
          "id": "10001"
        },
        "customfield_11100": null,
        "customfield_10011": "ghx-label-6",
        "customfield_10012": null,
        "customfield_10013": null,
        "customfield_10014": null,
        "customfield_10015": null,
        "customfield_10005": null,
        "customfield_12701": null,
        "customfield_12700": null,
        "customfield_12703": null,
        "customfield_10007": null,
        "customfield_10008": null,
        "customfield_12702": null,
        "customfield_10009": "Improve the Post-Booking Experience",
        "customfield_10801": null,
        "customfield_12705": null,
        "customfield_12704": null,
        "customfield_12706": null,
        "summary": "Improve the Post-Booking Experience",
        "customfield_10001": null,
        "customfield_12300": null,
        "customfield_10002": null,
        "customfield_10003": null,
        "customfield_10004": null,
        "customfield_10400": null,
        "customfield_11600": null,
        "environment": null,
        "duedate": null
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "88075",
      "self": "https://goeuro.atlassian.net/rest/api/2/issue/88075",
      "key": "AD-1232",
      "fields": {
        "fixVersions": [

        ],
        "resolution": null,
        "customfield_12800": null,
        "customfield_12802": null,
        "customfield_12801": null,
        "customfield_12804": null,
        "customfield_12803": null,
        "customfield_12806": null,
        "customfield_12805": null,
        "customfield_10903": null,
        "lastViewed": "2017-07-14T15:47:29.032+0200",
        "customfield_12000": null,
        "customfield_12400": null,
        "priority": {
          "self": "https://goeuro.atlassian.net/rest/api/2/priority/6",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/priority_major.gif",
          "name": "Normal (P3)",
          "id": "6"
        },
        "customfield_10102": null,
        "customfield_12402": null,
        "labels": [

        ],
        "customfield_12401": null,
        "customfield_11303": null,
        "customfield_11305": null,
        "customfield_11306": null,
        "aggregatetimeoriginalestimate": null,
        "timeestimate": null,
        "customfield_11307": null,
        "customfield_11308": null,
        "versions": [

        ],
        "issuelinks": [

        ],
        "assignee": null,
        "status": {
          "self": "https://goeuro.atlassian.net/rest/api/2/status/1",
          "description": "",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/statuses/open.png",
          "name": "To Do",
          "id": "1",
          "statusCategory": {
            "self": "https://goeuro.atlassian.net/rest/api/2/statuscategory/2",
            "id": 2,
            "key": "new",
            "colorName": "blue-gray",
            "name": "To Do"
          }
        },
        "components": [

        ],
        "customfield_10050": null,
        "customfield_10051": null,
        "customfield_10052": null,
        "customfield_11301": null,
        "customfield_11302": null,
        "customfield_10049": null,
        "customfield_10600": null,
        "customfield_10601": [

        ],
        "customfield_12900": null,
        "customfield_10602": null,
        "aggregatetimeestimate": null,
        "creator": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "subtasks": [

        ],
        "reporter": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "customfield_12100": "{}",
        "aggregateprogress": {
          "progress": 0,
          "total": 0
        },
        "customfield_10200": "1|hzuz74:1m0n3li",
        "customfield_10201": null,
        "customfield_12500": null,
        "customfield_11800": null,
        "progress": {
          "progress": 0,
          "total": 0
        },
        "votes": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1232/votes",
          "votes": 0,
          "hasVoted": false
        },
        "issuetype": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issuetype/10001",
          "id": "10001",
          "description": "Created by JIRA Agile - do not edit or delete. Issue type for a user story.",
          "iconUrl": "https://goeuro.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10315&avatarType=issuetype",
          "name": "Story",
          "subtask": false,
          "avatarId": 10315
        },
        "timespent": null,
        "project": {
          "self": "https://goeuro.atlassian.net/rest/api/2/project/11801",
          "id": "11801",
          "key": "AD",
          "name": "Advertising",
          "avatarUrls": {
            "48x48": "https://goeuro.atlassian.net/secure/projectavatar?pid=11801&avatarId=18802",
            "24x24": "https://goeuro.atlassian.net/secure/projectavatar?size=small&pid=11801&avatarId=18802",
            "16x16": "https://goeuro.atlassian.net/secure/projectavatar?size=xsmall&pid=11801&avatarId=18802",
            "32x32": "https://goeuro.atlassian.net/secure/projectavatar?size=medium&pid=11801&avatarId=18802"
          }
        },
        "aggregatetimespent": null,
        "customfield_10701": null,
        "resolutiondate": null,
        "workratio": -1,
        "watches": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1232/watchers",
          "watchCount": 1,
          "isWatching": true
        },
        "created": "2017-07-14T15:47:28.000+0200",
        "customfield_10020": null,
        "customfield_10021": null,
        "customfield_12200": null,
        "customfield_10024": null,
        "customfield_12600": null,
        "customfield_10300": null,
        "customfield_10026": null,
        "customfield_10016": null,
        "customfield_11501": null,
        "customfield_10017": null,
        "customfield_10018": null,
        "customfield_10019": null,
        "customfield_11902": "{panel:bgColor=#EAECFF}\r\nh3. Issue Summary\r\n* short summary (5 sentences)\r\n* list the duration along with start and end times (include timezone)\r\n* state the impact (e.g. most user requests resulted in 500 errors, at peak 100%)\r\n* close with root cause\r\n\r\nh3. Timeline\r\n* list the timezone\r\n* covers the outage duration\r\n* when outage began\r\n* when staff was notified\r\n* actions, events, ...\r\n* when service was restored\r\n\r\nh3. Root Cause\r\n\r\nh3. Resolution and recovery\r\n* give detailed explanation of actions taken (includes times)\r\n\r\nh3. Corrective and Preventative Measures\r\n(flag) Action items should be created as a tickets and linked to this report\r\n* itemized list of ways to prevent it from happening again\r\n* what can we do better next time?\r\n{panel}",
        "updated": "2017-07-14T15:47:30.000+0200",
        "timeoriginalestimate": null,
        "description": null,
        "customfield_11100": null,
        "customfield_10012": null,
        "customfield_10013": null,
        "customfield_10014": null,
        "customfield_11500": null,
        "customfield_10015": null,
        "customfield_12701": null,
        "customfield_10005": null,
        "customfield_12700": null,
        "customfield_10007": null,
        "customfield_12703": null,
        "customfield_10008": "AD-1229",
        "customfield_12702": null,
        "customfield_12705": null,
        "customfield_10801": null,
        "customfield_12704": null,
        "customfield_12706": null,
        "summary": "Create Affiliate Data Pipeline",
        "customfield_10001": null,
        "customfield_12300": null,
        "customfield_10002": null,
        "customfield_10003": null,
        "customfield_10004": null,
        "customfield_10400": null,
        "customfield_11600": null,
        "environment": null,
        "duedate": null
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "88074",
      "self": "https://goeuro.atlassian.net/rest/api/2/issue/88074",
      "key": "AD-1231",
      "fields": {
        "fixVersions": [

        ],
        "resolution": null,
        "customfield_12800": null,
        "customfield_12802": null,
        "customfield_12801": null,
        "customfield_12804": null,
        "customfield_12803": null,
        "customfield_12806": null,
        "customfield_10903": null,
        "customfield_12805": null,
        "lastViewed": "2017-07-14T15:47:13.613+0200",
        "customfield_12000": null,
        "priority": {
          "self": "https://goeuro.atlassian.net/rest/api/2/priority/6",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/priority_major.gif",
          "name": "Normal (P3)",
          "id": "6"
        },
        "customfield_12400": null,
        "customfield_10102": null,
        "customfield_12402": null,
        "labels": [

        ],
        "customfield_12401": null,
        "customfield_11303": null,
        "customfield_11305": null,
        "customfield_11306": null,
        "aggregatetimeoriginalestimate": null,
        "timeestimate": null,
        "customfield_11307": null,
        "versions": [

        ],
        "customfield_11308": null,
        "issuelinks": [

        ],
        "assignee": null,
        "status": {
          "self": "https://goeuro.atlassian.net/rest/api/2/status/1",
          "description": "",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/statuses/open.png",
          "name": "To Do",
          "id": "1",
          "statusCategory": {
            "self": "https://goeuro.atlassian.net/rest/api/2/statuscategory/2",
            "id": 2,
            "key": "new",
            "colorName": "blue-gray",
            "name": "To Do"
          }
        },
        "components": [

        ],
        "customfield_10050": null,
        "customfield_10051": null,
        "customfield_10052": null,
        "customfield_11301": null,
        "customfield_11302": null,
        "customfield_10049": null,
        "customfield_10600": null,
        "customfield_10601": [

        ],
        "customfield_10602": null,
        "customfield_12900": null,
        "aggregatetimeestimate": null,
        "creator": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "subtasks": [

        ],
        "reporter": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "aggregateprogress": {
          "progress": 0,
          "total": 0
        },
        "customfield_12100": "{}",
        "customfield_10200": "1|hzuz74:1m0n3l",
        "customfield_10201": null,
        "customfield_12500": null,
        "customfield_11800": null,
        "progress": {
          "progress": 0,
          "total": 0
        },
        "votes": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1231/votes",
          "votes": 0,
          "hasVoted": false
        },
        "issuetype": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issuetype/10001",
          "id": "10001",
          "description": "Created by JIRA Agile - do not edit or delete. Issue type for a user story.",
          "iconUrl": "https://goeuro.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10315&avatarType=issuetype",
          "name": "Story",
          "subtask": false,
          "avatarId": 10315
        },
        "timespent": null,
        "project": {
          "self": "https://goeuro.atlassian.net/rest/api/2/project/11801",
          "id": "11801",
          "key": "AD",
          "name": "Advertising",
          "avatarUrls": {
            "48x48": "https://goeuro.atlassian.net/secure/projectavatar?pid=11801&avatarId=18802",
            "24x24": "https://goeuro.atlassian.net/secure/projectavatar?size=small&pid=11801&avatarId=18802",
            "16x16": "https://goeuro.atlassian.net/secure/projectavatar?size=xsmall&pid=11801&avatarId=18802",
            "32x32": "https://goeuro.atlassian.net/secure/projectavatar?size=medium&pid=11801&avatarId=18802"
          }
        },
        "aggregatetimespent": null,
        "customfield_10701": null,
        "resolutiondate": null,
        "workratio": -1,
        "watches": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1231/watchers",
          "watchCount": 1,
          "isWatching": true
        },
        "created": "2017-07-14T15:47:12.000+0200",
        "customfield_10020": null,
        "customfield_12200": null,
        "customfield_10021": null,
        "customfield_10024": null,
        "customfield_10300": null,
        "customfield_12600": null,
        "customfield_10026": null,
        "customfield_10016": null,
        "customfield_10017": null,
        "customfield_11501": null,
        "customfield_10018": null,
        "customfield_10019": null,
        "customfield_11902": "{panel:bgColor=#EAECFF}\r\nh3. Issue Summary\r\n* short summary (5 sentences)\r\n* list the duration along with start and end times (include timezone)\r\n* state the impact (e.g. most user requests resulted in 500 errors, at peak 100%)\r\n* close with root cause\r\n\r\nh3. Timeline\r\n* list the timezone\r\n* covers the outage duration\r\n* when outage began\r\n* when staff was notified\r\n* actions, events, ...\r\n* when service was restored\r\n\r\nh3. Root Cause\r\n\r\nh3. Resolution and recovery\r\n* give detailed explanation of actions taken (includes times)\r\n\r\nh3. Corrective and Preventative Measures\r\n(flag) Action items should be created as a tickets and linked to this report\r\n* itemized list of ways to prevent it from happening again\r\n* what can we do better next time?\r\n{panel}",
        "updated": "2017-07-14T15:47:30.000+0200",
        "timeoriginalestimate": null,
        "description": null,
        "customfield_11100": null,
        "customfield_10012": null,
        "customfield_10013": null,
        "customfield_11500": null,
        "customfield_10014": null,
        "customfield_10015": null,
        "customfield_12701": null,
        "customfield_10005": null,
        "customfield_12700": null,
        "customfield_12703": null,
        "customfield_10007": null,
        "customfield_10008": "AD-1229",
        "customfield_12702": null,
        "customfield_10801": null,
        "customfield_12705": null,
        "customfield_12704": null,
        "customfield_12706": null,
        "summary": "Create Widget Generator",
        "customfield_10001": null,
        "customfield_12300": null,
        "customfield_10002": null,
        "customfield_10003": null,
        "customfield_10004": null,
        "customfield_10400": null,
        "customfield_11600": null,
        "environment": null,
        "duedate": null
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "88073",
      "self": "https://goeuro.atlassian.net/rest/api/2/issue/88073",
      "key": "AD-1230",
      "fields": {
        "fixVersions": [

        ],
        "resolution": null,
        "customfield_12800": null,
        "customfield_12802": null,
        "customfield_12801": null,
        "customfield_12804": null,
        "customfield_12803": null,
        "customfield_12806": null,
        "customfield_12805": null,
        "customfield_10903": null,
        "lastViewed": "2017-07-14T15:47:01.531+0200",
        "customfield_12000": null,
        "customfield_12400": null,
        "priority": {
          "self": "https://goeuro.atlassian.net/rest/api/2/priority/6",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/priority_major.gif",
          "name": "Normal (P3)",
          "id": "6"
        },
        "customfield_12402": null,
        "customfield_10102": null,
        "customfield_12401": null,
        "labels": [

        ],
        "customfield_11303": null,
        "customfield_11305": null,
        "customfield_11306": null,
        "aggregatetimeoriginalestimate": null,
        "customfield_11307": null,
        "timeestimate": null,
        "customfield_11308": null,
        "versions": [

        ],
        "issuelinks": [

        ],
        "assignee": null,
        "status": {
          "self": "https://goeuro.atlassian.net/rest/api/2/status/1",
          "description": "",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/statuses/open.png",
          "name": "To Do",
          "id": "1",
          "statusCategory": {
            "self": "https://goeuro.atlassian.net/rest/api/2/statuscategory/2",
            "id": 2,
            "key": "new",
            "colorName": "blue-gray",
            "name": "To Do"
          }
        },
        "components": [

        ],
        "customfield_10050": null,
        "customfield_10051": null,
        "customfield_10052": null,
        "customfield_11301": null,
        "customfield_11302": null,
        "customfield_10049": null,
        "customfield_10600": null,
        "customfield_10601": [

        ],
        "customfield_12900": null,
        "customfield_10602": null,
        "aggregatetimeestimate": null,
        "creator": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "subtasks": [

        ],
        "reporter": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "customfield_12100": "{}",
        "aggregateprogress": {
          "progress": 0,
          "total": 0
        },
        "customfield_10200": "1|hzuz74:1m0n3k",
        "customfield_10201": null,
        "customfield_12500": null,
        "customfield_11800": null,
        "progress": {
          "progress": 0,
          "total": 0
        },
        "votes": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1230/votes",
          "votes": 0,
          "hasVoted": false
        },
        "issuetype": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issuetype/10001",
          "id": "10001",
          "description": "Created by JIRA Agile - do not edit or delete. Issue type for a user story.",
          "iconUrl": "https://goeuro.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10315&avatarType=issuetype",
          "name": "Story",
          "subtask": false,
          "avatarId": 10315
        },
        "timespent": null,
        "project": {
          "self": "https://goeuro.atlassian.net/rest/api/2/project/11801",
          "id": "11801",
          "key": "AD",
          "name": "Advertising",
          "avatarUrls": {
            "48x48": "https://goeuro.atlassian.net/secure/projectavatar?pid=11801&avatarId=18802",
            "24x24": "https://goeuro.atlassian.net/secure/projectavatar?size=small&pid=11801&avatarId=18802",
            "16x16": "https://goeuro.atlassian.net/secure/projectavatar?size=xsmall&pid=11801&avatarId=18802",
            "32x32": "https://goeuro.atlassian.net/secure/projectavatar?size=medium&pid=11801&avatarId=18802"
          }
        },
        "aggregatetimespent": null,
        "customfield_10701": null,
        "resolutiondate": null,
        "workratio": -1,
        "watches": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1230/watchers",
          "watchCount": 1,
          "isWatching": true
        },
        "created": "2017-07-14T15:47:00.000+0200",
        "customfield_10020": null,
        "customfield_12200": null,
        "customfield_10021": null,
        "customfield_10024": null,
        "customfield_10300": null,
        "customfield_12600": null,
        "customfield_10026": null,
        "customfield_10016": null,
        "customfield_10017": null,
        "customfield_11501": null,
        "customfield_10018": null,
        "customfield_10019": null,
        "customfield_11902": "{panel:bgColor=#EAECFF}\r\nh3. Issue Summary\r\n* short summary (5 sentences)\r\n* list the duration along with start and end times (include timezone)\r\n* state the impact (e.g. most user requests resulted in 500 errors, at peak 100%)\r\n* close with root cause\r\n\r\nh3. Timeline\r\n* list the timezone\r\n* covers the outage duration\r\n* when outage began\r\n* when staff was notified\r\n* actions, events, ...\r\n* when service was restored\r\n\r\nh3. Root Cause\r\n\r\nh3. Resolution and recovery\r\n* give detailed explanation of actions taken (includes times)\r\n\r\nh3. Corrective and Preventative Measures\r\n(flag) Action items should be created as a tickets and linked to this report\r\n* itemized list of ways to prevent it from happening again\r\n* what can we do better next time?\r\n{panel}",
        "updated": "2017-07-14T15:47:30.000+0200",
        "timeoriginalestimate": null,
        "description": null,
        "customfield_11100": null,
        "customfield_10012": null,
        "customfield_10013": null,
        "customfield_11500": null,
        "customfield_10014": null,
        "customfield_10015": null,
        "customfield_12701": null,
        "customfield_10005": null,
        "customfield_12700": null,
        "customfield_10007": null,
        "customfield_12703": null,
        "customfield_12702": null,
        "customfield_10008": "AD-1229",
        "customfield_12705": null,
        "customfield_10801": null,
        "customfield_12704": null,
        "customfield_12706": null,
        "summary": "Create Affiliate Widget Documentation",
        "customfield_10001": null,
        "customfield_12300": null,
        "customfield_10002": null,
        "customfield_10003": null,
        "customfield_10400": null,
        "customfield_10004": null,
        "customfield_11600": null,
        "environment": null,
        "duedate": null
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "88071",
      "self": "https://goeuro.atlassian.net/rest/api/2/issue/88071",
      "key": "AD-1229",
      "fields": {
        "fixVersions": [

        ],
        "resolution": null,
        "customfield_12800": null,
        "customfield_12802": null,
        "customfield_12801": null,
        "customfield_12804": null,
        "customfield_12803": null,
        "customfield_12806": null,
        "customfield_10903": null,
        "customfield_12805": null,
        "lastViewed": "2017-07-14T15:46:08.169+0200",
        "customfield_12000": null,
        "customfield_12400": null,
        "priority": {
          "self": "https://goeuro.atlassian.net/rest/api/2/priority/6",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/priority_major.gif",
          "name": "Normal (P3)",
          "id": "6"
        },
        "customfield_12402": null,
        "customfield_10102": null,
        "labels": [

        ],
        "customfield_12401": null,
        "customfield_11303": null,
        "customfield_11305": null,
        "customfield_11306": null,
        "customfield_11307": null,
        "aggregatetimeoriginalestimate": null,
        "timeestimate": null,
        "versions": [

        ],
        "customfield_11308": null,
        "issuelinks": [

        ],
        "assignee": null,
        "status": {
          "self": "https://goeuro.atlassian.net/rest/api/2/status/1",
          "description": "",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/statuses/open.png",
          "name": "To Do",
          "id": "1",
          "statusCategory": {
            "self": "https://goeuro.atlassian.net/rest/api/2/statuscategory/2",
            "id": 2,
            "key": "new",
            "colorName": "blue-gray",
            "name": "To Do"
          }
        },
        "components": [

        ],
        "customfield_10050": null,
        "customfield_10051": null,
        "customfield_10052": null,
        "customfield_11301": null,
        "customfield_11302": null,
        "customfield_10049": null,
        "customfield_10600": null,
        "customfield_10601": [

        ],
        "customfield_10602": null,
        "customfield_12900": null,
        "aggregatetimeestimate": null,
        "creator": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "subtasks": [

        ],
        "reporter": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "customfield_12100": "{}",
        "aggregateprogress": {
          "progress": 0,
          "total": 0
        },
        "customfield_10200": "1|i04vz3:",
        "customfield_10201": null,
        "customfield_12500": null,
        "customfield_11800": null,
        "progress": {
          "progress": 0,
          "total": 0
        },
        "votes": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1229/votes",
          "votes": 0,
          "hasVoted": false
        },
        "issuetype": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issuetype/10000",
          "id": "10000",
          "description": "Created by JIRA Software - do not edit or delete. Issue type for a big user story that needs to be broken down.",
          "iconUrl": "https://goeuro.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10307&avatarType=issuetype",
          "name": "Epic",
          "subtask": false,
          "avatarId": 10307
        },
        "timespent": null,
        "project": {
          "self": "https://goeuro.atlassian.net/rest/api/2/project/11801",
          "id": "11801",
          "key": "AD",
          "name": "Advertising",
          "avatarUrls": {
            "48x48": "https://goeuro.atlassian.net/secure/projectavatar?pid=11801&avatarId=18802",
            "24x24": "https://goeuro.atlassian.net/secure/projectavatar?size=small&pid=11801&avatarId=18802",
            "16x16": "https://goeuro.atlassian.net/secure/projectavatar?size=xsmall&pid=11801&avatarId=18802",
            "32x32": "https://goeuro.atlassian.net/secure/projectavatar?size=medium&pid=11801&avatarId=18802"
          }
        },
        "aggregatetimespent": null,
        "customfield_10701": null,
        "resolutiondate": null,
        "workratio": -1,
        "watches": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1229/watchers",
          "watchCount": 1,
          "isWatching": true
        },
        "created": "2017-07-14T15:46:07.000+0200",
        "customfield_10020": null,
        "customfield_10021": null,
        "customfield_12200": null,
        "customfield_10024": null,
        "customfield_10300": null,
        "customfield_12600": null,
        "customfield_10026": null,
        "customfield_10016": null,
        "customfield_10017": null,
        "customfield_10018": null,
        "customfield_10019": null,
        "customfield_11902": "{panel:bgColor=#EAECFF}\r\nh3. Issue Summary\r\n* short summary (5 sentences)\r\n* list the duration along with start and end times (include timezone)\r\n* state the impact (e.g. most user requests resulted in 500 errors, at peak 100%)\r\n* close with root cause\r\n\r\nh3. Timeline\r\n* list the timezone\r\n* covers the outage duration\r\n* when outage began\r\n* when staff was notified\r\n* actions, events, ...\r\n* when service was restored\r\n\r\nh3. Root Cause\r\n\r\nh3. Resolution and recovery\r\n* give detailed explanation of actions taken (includes times)\r\n\r\nh3. Corrective and Preventative Measures\r\n(flag) Action items should be created as a tickets and linked to this report\r\n* itemized list of ways to prevent it from happening again\r\n* what can we do better next time?\r\n{panel}",
        "updated": "2017-07-14T15:47:28.000+0200",
        "timeoriginalestimate": null,
        "description": null,
        "customfield_10010": {
          "self": "https://goeuro.atlassian.net/rest/api/2/customFieldOption/10001",
          "value": "To Do",
          "id": "10001"
        },
        "customfield_10011": "ghx-label-6",
        "customfield_11100": null,
        "customfield_10012": null,
        "customfield_10013": null,
        "customfield_10014": null,
        "customfield_10015": null,
        "customfield_10005": null,
        "customfield_12701": null,
        "customfield_12700": null,
        "customfield_10007": null,
        "customfield_12703": null,
        "customfield_12702": null,
        "customfield_10008": null,
        "customfield_10009": "Boost The GoEuro Affiliate Network",
        "customfield_12705": null,
        "customfield_10801": null,
        "customfield_12704": null,
        "customfield_12706": null,
        "summary": "Boost The GoEuro Affiliate Network",
        "customfield_10001": null,
        "customfield_10002": null,
        "customfield_12300": null,
        "customfield_10003": null,
        "customfield_10004": null,
        "customfield_10400": null,
        "customfield_11600": null,
        "environment": null,
        "duedate": null
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "87845",
      "self": "https://goeuro.atlassian.net/rest/api/2/issue/87845",
      "key": "AD-1227",
      "fields": {
        "fixVersions": [

        ],
        "resolution": null,
        "customfield_12800": null,
        "customfield_12802": null,
        "customfield_12801": null,
        "customfield_12804": null,
        "customfield_12803": null,
        "customfield_12806": null,
        "customfield_10903": null,
        "customfield_12805": null,
        "lastViewed": null,
        "customfield_12000": null,
        "priority": {
          "self": "https://goeuro.atlassian.net/rest/api/2/priority/6",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/priority_major.gif",
          "name": "Normal (P3)",
          "id": "6"
        },
        "customfield_12400": null,
        "customfield_12402": null,
        "customfield_10102": null,
        "customfield_12401": null,
        "labels": [

        ],
        "customfield_11303": null,
        "customfield_11305": null,
        "customfield_11306": null,
        "timeestimate": null,
        "aggregatetimeoriginalestimate": null,
        "customfield_11307": null,
        "versions": [

        ],
        "customfield_11308": null,
        "issuelinks": [

        ],
        "assignee": null,
        "status": {
          "self": "https://goeuro.atlassian.net/rest/api/2/status/1",
          "description": "",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/statuses/open.png",
          "name": "To Do",
          "id": "1",
          "statusCategory": {
            "self": "https://goeuro.atlassian.net/rest/api/2/statuscategory/2",
            "id": 2,
            "key": "new",
            "colorName": "blue-gray",
            "name": "To Do"
          }
        },
        "components": [

        ],
        "customfield_10050": null,
        "customfield_10051": null,
        "customfield_10052": null,
        "customfield_11301": null,
        "customfield_11302": null,
        "customfield_10049": null,
        "customfield_10600": null,
        "customfield_10601": [

        ],
        "customfield_10602": null,
        "customfield_12900": null,
        "aggregatetimeestimate": null,
        "creator": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=cristiano.sanchez",
          "name": "cristiano.sanchez",
          "key": "cristiano.sanchez",
          "accountId": "557058:25d2f2be-2415-4b90-afa4-7e07e24b6ca4",
          "emailAddress": "cristiano.sanchez@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/3522dc54efcbbf47802e3a3ef52defab?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Dcristiano.sanchez%26avatarId%3D16701%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/3522dc54efcbbf47802e3a3ef52defab?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Dcristiano.sanchez%26avatarId%3D16701%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/3522dc54efcbbf47802e3a3ef52defab?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Dcristiano.sanchez%26avatarId%3D16701%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/3522dc54efcbbf47802e3a3ef52defab?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Dcristiano.sanchez%26avatarId%3D16701%26noRedirect%3Dtrue"
          },
          "displayName": "Cristiano Sanchez",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "subtasks": [

        ],
        "reporter": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=cristiano.sanchez",
          "name": "cristiano.sanchez",
          "key": "cristiano.sanchez",
          "accountId": "557058:25d2f2be-2415-4b90-afa4-7e07e24b6ca4",
          "emailAddress": "cristiano.sanchez@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/3522dc54efcbbf47802e3a3ef52defab?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Dcristiano.sanchez%26avatarId%3D16701%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/3522dc54efcbbf47802e3a3ef52defab?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Dcristiano.sanchez%26avatarId%3D16701%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/3522dc54efcbbf47802e3a3ef52defab?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Dcristiano.sanchez%26avatarId%3D16701%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/3522dc54efcbbf47802e3a3ef52defab?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Dcristiano.sanchez%26avatarId%3D16701%26noRedirect%3Dtrue"
          },
          "displayName": "Cristiano Sanchez",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "aggregateprogress": {
          "progress": 0,
          "total": 0
        },
        "customfield_12100": "{}",
        "customfield_10200": "1|i04v8v:",
        "customfield_10201": null,
        "customfield_12500": null,
        "customfield_11800": null,
        "progress": {
          "progress": 0,
          "total": 0
        },
        "votes": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1227/votes",
          "votes": 0,
          "hasVoted": false
        },
        "issuetype": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issuetype/10001",
          "id": "10001",
          "description": "Created by JIRA Agile - do not edit or delete. Issue type for a user story.",
          "iconUrl": "https://goeuro.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10315&avatarType=issuetype",
          "name": "Story",
          "subtask": false,
          "avatarId": 10315
        },
        "timespent": null,
        "project": {
          "self": "https://goeuro.atlassian.net/rest/api/2/project/11801",
          "id": "11801",
          "key": "AD",
          "name": "Advertising",
          "avatarUrls": {
            "48x48": "https://goeuro.atlassian.net/secure/projectavatar?pid=11801&avatarId=18802",
            "24x24": "https://goeuro.atlassian.net/secure/projectavatar?size=small&pid=11801&avatarId=18802",
            "16x16": "https://goeuro.atlassian.net/secure/projectavatar?size=xsmall&pid=11801&avatarId=18802",
            "32x32": "https://goeuro.atlassian.net/secure/projectavatar?size=medium&pid=11801&avatarId=18802"
          }
        },
        "aggregatetimespent": null,
        "customfield_10701": null,
        "resolutiondate": null,
        "workratio": -1,
        "watches": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1227/watchers",
          "watchCount": 1,
          "isWatching": false
        },
        "created": "2017-07-12T18:31:08.000+0200",
        "customfield_10020": null,
        "customfield_12200": null,
        "customfield_10021": null,
        "customfield_10024": null,
        "customfield_12600": null,
        "customfield_10300": null,
        "customfield_10026": null,
        "customfield_10016": null,
        "customfield_11501": null,
        "customfield_10017": null,
        "customfield_10018": null,
        "customfield_10019": null,
        "customfield_11902": "{panel:bgColor=#EAECFF}\r\nh3. Issue Summary\r\n* short summary (5 sentences)\r\n* list the duration along with start and end times (include timezone)\r\n* state the impact (e.g. most user requests resulted in 500 errors, at peak 100%)\r\n* close with root cause\r\n\r\nh3. Timeline\r\n* list the timezone\r\n* covers the outage duration\r\n* when outage began\r\n* when staff was notified\r\n* actions, events, ...\r\n* when service was restored\r\n\r\nh3. Root Cause\r\n\r\nh3. Resolution and recovery\r\n* give detailed explanation of actions taken (includes times)\r\n\r\nh3. Corrective and Preventative Measures\r\n(flag) Action items should be created as a tickets and linked to this report\r\n* itemized list of ways to prevent it from happening again\r\n* what can we do better next time?\r\n{panel}",
        "updated": "2017-07-12T18:31:08.000+0200",
        "timeoriginalestimate": null,
        "description": "As a developer I want to retrieve a set of prices index from Repository and calculate the average price for any given dates (checkin/checkout). ",
        "customfield_11100": null,
        "customfield_10012": null,
        "customfield_10013": null,
        "customfield_10014": null,
        "customfield_11500": null,
        "customfield_10015": null,
        "customfield_12701": null,
        "customfield_10005": null,
        "customfield_12700": null,
        "customfield_10007": [
          "com.atlassian.greenhopper.service.sprint.Sprint@fd0989[id=965,rapidViewId=92,state=ACTIVE,name=AD 31/32 THETA,goal=- DELIVER ADP\n- PRICE ALERT\n- PIX\n- MFG,startDate=2017-07-12T13:00:54.893+02:00,endDate=2017-07-19T13:00:00.000+02:00,completeDate=<null>,sequence=965]"
        ],
        "customfield_12703": null,
        "customfield_12702": null,
        "customfield_10008": "AD-774",
        "customfield_12705": null,
        "customfield_10801": null,
        "customfield_12704": null,
        "customfield_12706": null,
        "summary": "[PIX] Calculate average prices based on Price Index entities.",
        "customfield_10001": null,
        "customfield_10002": null,
        "customfield_12300": null,
        "customfield_10003": null,
        "customfield_10004": null,
        "customfield_10400": null,
        "customfield_11600": null,
        "environment": null,
        "duedate": null
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "87539",
      "self": "https://goeuro.atlassian.net/rest/api/2/issue/87539",
      "key": "AD-1213",
      "fields": {
        "fixVersions": [

        ],
        "resolution": null,
        "customfield_12800": null,
        "customfield_12802": null,
        "customfield_12801": null,
        "customfield_12804": null,
        "customfield_12803": null,
        "customfield_12806": null,
        "customfield_12805": null,
        "customfield_10903": null,
        "lastViewed": "2017-07-11T11:52:03.208+0200",
        "customfield_12000": null,
        "customfield_12400": null,
        "priority": {
          "self": "https://goeuro.atlassian.net/rest/api/2/priority/6",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/priority_major.gif",
          "name": "Normal (P3)",
          "id": "6"
        },
        "customfield_10102": null,
        "customfield_12402": null,
        "customfield_12401": null,
        "labels": [

        ],
        "customfield_11303": null,
        "customfield_11305": null,
        "customfield_11306": null,
        "aggregatetimeoriginalestimate": null,
        "customfield_11307": null,
        "timeestimate": null,
        "customfield_11308": null,
        "versions": [

        ],
        "issuelinks": [

        ],
        "assignee": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=marc.bramaud",
          "name": "marc.bramaud",
          "key": "marc.bramaud",
          "accountId": "557058:fcb0a5e0-9930-4f25-b661-f031bbf05c5b",
          "emailAddress": "marc.bramaud@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/20da9f2e050dcacf564bfe15091c521b?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Dmarc.bramaud%26avatarId%3D12000%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/20da9f2e050dcacf564bfe15091c521b?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Dmarc.bramaud%26avatarId%3D12000%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/20da9f2e050dcacf564bfe15091c521b?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Dmarc.bramaud%26avatarId%3D12000%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/20da9f2e050dcacf564bfe15091c521b?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Dmarc.bramaud%26avatarId%3D12000%26noRedirect%3Dtrue"
          },
          "displayName": "Marc Bramaud",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "status": {
          "self": "https://goeuro.atlassian.net/rest/api/2/status/3",
          "description": "This issue is being actively worked on at the moment by the assignee.",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/statuses/inprogress.png",
          "name": "In Progress",
          "id": "3",
          "statusCategory": {
            "self": "https://goeuro.atlassian.net/rest/api/2/statuscategory/4",
            "id": 4,
            "key": "indeterminate",
            "colorName": "yellow",
            "name": "In Progress"
          }
        },
        "components": [

        ],
        "customfield_10050": null,
        "customfield_10051": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=mariya.katernyak",
          "name": "mariya.katernyak",
          "key": "mariya.katernak",
          "accountId": "557058:6fb7ca13-575b-46a3-8837-de2b82d0b48c",
          "emailAddress": "mariya.katernyak@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/4a6c35c24b582d038473ef87498c5afb?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FavatarId%3D12828%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/4a6c35c24b582d038473ef87498c5afb?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26avatarId%3D12828%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/4a6c35c24b582d038473ef87498c5afb?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26avatarId%3D12828%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/4a6c35c24b582d038473ef87498c5afb?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26avatarId%3D12828%26noRedirect%3Dtrue"
          },
          "displayName": "Mariya Katernyak",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "customfield_10052": null,
        "customfield_11301": null,
        "customfield_11302": null,
        "customfield_10049": null,
        "customfield_10600": null,
        "customfield_10601": [

        ],
        "customfield_12900": null,
        "customfield_10602": null,
        "aggregatetimeestimate": null,
        "creator": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=marc.bramaud",
          "name": "marc.bramaud",
          "key": "marc.bramaud",
          "accountId": "557058:fcb0a5e0-9930-4f25-b661-f031bbf05c5b",
          "emailAddress": "marc.bramaud@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/20da9f2e050dcacf564bfe15091c521b?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Dmarc.bramaud%26avatarId%3D12000%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/20da9f2e050dcacf564bfe15091c521b?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Dmarc.bramaud%26avatarId%3D12000%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/20da9f2e050dcacf564bfe15091c521b?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Dmarc.bramaud%26avatarId%3D12000%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/20da9f2e050dcacf564bfe15091c521b?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Dmarc.bramaud%26avatarId%3D12000%26noRedirect%3Dtrue"
          },
          "displayName": "Marc Bramaud",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "subtasks": [

        ],
        "reporter": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=marc.bramaud",
          "name": "marc.bramaud",
          "key": "marc.bramaud",
          "accountId": "557058:fcb0a5e0-9930-4f25-b661-f031bbf05c5b",
          "emailAddress": "marc.bramaud@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/20da9f2e050dcacf564bfe15091c521b?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Dmarc.bramaud%26avatarId%3D12000%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/20da9f2e050dcacf564bfe15091c521b?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Dmarc.bramaud%26avatarId%3D12000%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/20da9f2e050dcacf564bfe15091c521b?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Dmarc.bramaud%26avatarId%3D12000%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/20da9f2e050dcacf564bfe15091c521b?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Dmarc.bramaud%26avatarId%3D12000%26noRedirect%3Dtrue"
          },
          "displayName": "Marc Bramaud",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "aggregateprogress": {
          "progress": 0,
          "total": 0
        },
        "customfield_12100": "{pullrequest={dataType=pullrequest, state=OPEN, stateCount=1}, json={\"cachedValue\":{\"errors\":[],\"summary\":{\"pullrequest\":{\"overall\":{\"count\":1,\"lastUpdated\":\"2017-07-13T13:13:25.000+0200\",\"stateCount\":1,\"state\":\"OPEN\",\"open\":true},\"byInstanceType\":{\"github\":{\"count\":1,\"name\":\"GitHub\"}}}}},\"isStale\":true}}",
        "customfield_10200": "1|i04tdf:",
        "customfield_10201": null,
        "customfield_12500": null,
        "customfield_11800": null,
        "progress": {
          "progress": 0,
          "total": 0
        },
        "votes": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1213/votes",
          "votes": 0,
          "hasVoted": false
        },
        "issuetype": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issuetype/3",
          "id": "3",
          "description": "A task that needs to be done.",
          "iconUrl": "https://goeuro.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10318&avatarType=issuetype",
          "name": "Task",
          "subtask": false,
          "avatarId": 10318
        },
        "timespent": null,
        "project": {
          "self": "https://goeuro.atlassian.net/rest/api/2/project/11801",
          "id": "11801",
          "key": "AD",
          "name": "Advertising",
          "avatarUrls": {
            "48x48": "https://goeuro.atlassian.net/secure/projectavatar?pid=11801&avatarId=18802",
            "24x24": "https://goeuro.atlassian.net/secure/projectavatar?size=small&pid=11801&avatarId=18802",
            "16x16": "https://goeuro.atlassian.net/secure/projectavatar?size=xsmall&pid=11801&avatarId=18802",
            "32x32": "https://goeuro.atlassian.net/secure/projectavatar?size=medium&pid=11801&avatarId=18802"
          }
        },
        "aggregatetimespent": null,
        "customfield_10701": null,
        "resolutiondate": null,
        "workratio": -1,
        "watches": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1213/watchers",
          "watchCount": 1,
          "isWatching": false
        },
        "created": "2017-07-11T11:42:01.000+0200",
        "customfield_10020": null,
        "customfield_12200": null,
        "customfield_10021": null,
        "customfield_10024": null,
        "customfield_10300": null,
        "customfield_12600": null,
        "customfield_10026": null,
        "customfield_10016": null,
        "customfield_10017": null,
        "customfield_10018": null,
        "customfield_10019": null,
        "customfield_11902": "{panel:bgColor=#EAECFF}\r\nh3. Issue Summary\r\n* short summary (5 sentences)\r\n* list the duration along with start and end times (include timezone)\r\n* state the impact (e.g. most user requests resulted in 500 errors, at peak 100%)\r\n* close with root cause\r\n\r\nh3. Timeline\r\n* list the timezone\r\n* covers the outage duration\r\n* when outage began\r\n* when staff was notified\r\n* actions, events, ...\r\n* when service was restored\r\n\r\nh3. Root Cause\r\n\r\nh3. Resolution and recovery\r\n* give detailed explanation of actions taken (includes times)\r\n\r\nh3. Corrective and Preventative Measures\r\n(flag) Action items should be created as a tickets and linked to this report\r\n* itemized list of ways to prevent it from happening again\r\n* what can we do better next time?\r\n{panel}",
        "updated": "2017-07-12T12:05:00.000+0200",
        "timeoriginalestimate": null,
        "description": null,
        "customfield_11100": null,
        "customfield_10012": null,
        "customfield_10013": null,
        "customfield_10014": null,
        "customfield_10015": null,
        "customfield_12701": null,
        "customfield_12700": null,
        "customfield_12703": null,
        "customfield_10007": [
          "com.atlassian.greenhopper.service.sprint.Sprint@7b6d11[id=964,rapidViewId=92,state=CLOSED,name=AD 29/39 ETA,goal=Get rich or die tryin,startDate=2017-07-06T12:55:52.318+02:00,endDate=2017-07-13T12:55:00.000+02:00,completeDate=2017-07-12T12:04:59.519+02:00,sequence=964]",
          "com.atlassian.greenhopper.service.sprint.Sprint@fd0989[id=965,rapidViewId=92,state=ACTIVE,name=AD 31/32 THETA,goal=- DELIVER ADP\n- PRICE ALERT\n- PIX\n- MFG,startDate=2017-07-12T13:00:54.893+02:00,endDate=2017-07-19T13:00:00.000+02:00,completeDate=<null>,sequence=965]"
        ],
        "customfield_12702": null,
        "customfield_10008": null,
        "customfield_12705": null,
        "customfield_10801": null,
        "customfield_12704": null,
        "customfield_12706": null,
        "summary": "Setup branch web SDK test environment",
        "customfield_10001": null,
        "customfield_12300": null,
        "customfield_10002": null,
        "customfield_10003": null,
        "customfield_10400": null,
        "customfield_10004": null,
        "customfield_11600": null,
        "environment": null,
        "duedate": null
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "87213",
      "self": "https://goeuro.atlassian.net/rest/api/2/issue/87213",
      "key": "AD-1197",
      "fields": {
        "fixVersions": [

        ],
        "resolution": null,
        "customfield_12800": null,
        "customfield_12802": null,
        "customfield_12801": null,
        "customfield_12804": null,
        "customfield_12803": null,
        "customfield_12806": null,
        "customfield_10903": null,
        "customfield_12805": null,
        "lastViewed": null,
        "customfield_12000": null,
        "customfield_12400": null,
        "priority": {
          "self": "https://goeuro.atlassian.net/rest/api/2/priority/6",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/priority_major.gif",
          "name": "Normal (P3)",
          "id": "6"
        },
        "customfield_10102": null,
        "customfield_12402": null,
        "labels": [

        ],
        "customfield_12401": null,
        "customfield_11303": null,
        "customfield_11305": null,
        "customfield_11306": null,
        "aggregatetimeoriginalestimate": null,
        "customfield_11307": null,
        "timeestimate": null,
        "customfield_11308": null,
        "versions": [

        ],
        "issuelinks": [

        ],
        "assignee": null,
        "status": {
          "self": "https://goeuro.atlassian.net/rest/api/2/status/1",
          "description": "",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/statuses/open.png",
          "name": "To Do",
          "id": "1",
          "statusCategory": {
            "self": "https://goeuro.atlassian.net/rest/api/2/statuscategory/2",
            "id": 2,
            "key": "new",
            "colorName": "blue-gray",
            "name": "To Do"
          }
        },
        "components": [

        ],
        "customfield_10050": null,
        "customfield_10051": null,
        "customfield_10052": null,
        "customfield_11301": null,
        "customfield_11302": null,
        "customfield_10049": null,
        "customfield_10600": null,
        "customfield_10601": [

        ],
        "customfield_10602": null,
        "customfield_12900": null,
        "aggregatetimeestimate": null,
        "creator": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=vitaliy.goncharenko",
          "name": "vitaliy.goncharenko",
          "key": "vitaliy.goncharenko",
          "accountId": "557058:f6049d40-e2b0-46a8-a7d9-f388f574e713",
          "emailAddress": "vitaliy.goncharenko@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/b75848519ab307a996a83c38af50ddb1?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Dvitaliy.goncharenko%26avatarId%3D12100%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/b75848519ab307a996a83c38af50ddb1?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Dvitaliy.goncharenko%26avatarId%3D12100%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/b75848519ab307a996a83c38af50ddb1?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Dvitaliy.goncharenko%26avatarId%3D12100%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/b75848519ab307a996a83c38af50ddb1?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Dvitaliy.goncharenko%26avatarId%3D12100%26noRedirect%3Dtrue"
          },
          "displayName": "Vitaliy Goncharenko",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "subtasks": [

        ],
        "reporter": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=vitaliy.goncharenko",
          "name": "vitaliy.goncharenko",
          "key": "vitaliy.goncharenko",
          "accountId": "557058:f6049d40-e2b0-46a8-a7d9-f388f574e713",
          "emailAddress": "vitaliy.goncharenko@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/b75848519ab307a996a83c38af50ddb1?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Dvitaliy.goncharenko%26avatarId%3D12100%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/b75848519ab307a996a83c38af50ddb1?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Dvitaliy.goncharenko%26avatarId%3D12100%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/b75848519ab307a996a83c38af50ddb1?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Dvitaliy.goncharenko%26avatarId%3D12100%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/b75848519ab307a996a83c38af50ddb1?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Dvitaliy.goncharenko%26avatarId%3D12100%26noRedirect%3Dtrue"
          },
          "displayName": "Vitaliy Goncharenko",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "aggregateprogress": {
          "progress": 0,
          "total": 0
        },
        "customfield_12100": "{}",
        "customfield_10200": "1|i04t87:",
        "customfield_10201": null,
        "customfield_12500": null,
        "customfield_11800": null,
        "progress": {
          "progress": 0,
          "total": 0
        },
        "votes": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1197/votes",
          "votes": 0,
          "hasVoted": false
        },
        "issuetype": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issuetype/10001",
          "id": "10001",
          "description": "Created by JIRA Agile - do not edit or delete. Issue type for a user story.",
          "iconUrl": "https://goeuro.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10315&avatarType=issuetype",
          "name": "Story",
          "subtask": false,
          "avatarId": 10315
        },
        "timespent": null,
        "project": {
          "self": "https://goeuro.atlassian.net/rest/api/2/project/11801",
          "id": "11801",
          "key": "AD",
          "name": "Advertising",
          "avatarUrls": {
            "48x48": "https://goeuro.atlassian.net/secure/projectavatar?pid=11801&avatarId=18802",
            "24x24": "https://goeuro.atlassian.net/secure/projectavatar?size=small&pid=11801&avatarId=18802",
            "16x16": "https://goeuro.atlassian.net/secure/projectavatar?size=xsmall&pid=11801&avatarId=18802",
            "32x32": "https://goeuro.atlassian.net/secure/projectavatar?size=medium&pid=11801&avatarId=18802"
          }
        },
        "aggregatetimespent": null,
        "customfield_10701": null,
        "resolutiondate": null,
        "workratio": -1,
        "watches": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1197/watchers",
          "watchCount": 1,
          "isWatching": false
        },
        "created": "2017-07-07T11:39:58.000+0200",
        "customfield_10020": null,
        "customfield_12200": null,
        "customfield_10021": null,
        "customfield_10024": null,
        "customfield_10300": null,
        "customfield_12600": null,
        "customfield_10026": null,
        "customfield_10016": null,
        "customfield_11501": null,
        "customfield_10017": null,
        "customfield_10018": null,
        "customfield_10019": null,
        "customfield_11902": "{panel:bgColor=#EAECFF}\r\nh3. Issue Summary\r\n* short summary (5 sentences)\r\n* list the duration along with start and end times (include timezone)\r\n* state the impact (e.g. most user requests resulted in 500 errors, at peak 100%)\r\n* close with root cause\r\n\r\nh3. Timeline\r\n* list the timezone\r\n* covers the outage duration\r\n* when outage began\r\n* when staff was notified\r\n* actions, events, ...\r\n* when service was restored\r\n\r\nh3. Root Cause\r\n\r\nh3. Resolution and recovery\r\n* give detailed explanation of actions taken (includes times)\r\n\r\nh3. Corrective and Preventative Measures\r\n(flag) Action items should be created as a tickets and linked to this report\r\n* itemized list of ways to prevent it from happening again\r\n* what can we do better next time?\r\n{panel}",
        "updated": "2017-07-12T12:31:49.000+0200",
        "timeoriginalestimate": null,
        "description": null,
        "customfield_11100": null,
        "customfield_10012": null,
        "customfield_10013": null,
        "customfield_10014": null,
        "customfield_11500": null,
        "customfield_10015": null,
        "customfield_10005": null,
        "customfield_12701": null,
        "customfield_12700": null,
        "customfield_12703": null,
        "customfield_10007": null,
        "customfield_10008": null,
        "customfield_12702": null,
        "customfield_12705": null,
        "customfield_10801": null,
        "customfield_12704": null,
        "customfield_12706": null,
        "summary": "[PIX] persist on datastore",
        "customfield_10001": null,
        "customfield_12300": null,
        "customfield_10002": null,
        "customfield_10003": null,
        "customfield_10400": null,
        "customfield_10004": null,
        "customfield_11600": null,
        "environment": null,
        "duedate": null
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "87127",
      "self": "https://goeuro.atlassian.net/rest/api/2/issue/87127",
      "key": "AD-1194",
      "fields": {
        "fixVersions": [

        ],
        "resolution": null,
        "customfield_12800": null,
        "customfield_12802": null,
        "customfield_12801": null,
        "customfield_12804": null,
        "customfield_12803": null,
        "customfield_12806": null,
        "customfield_10903": null,
        "customfield_12805": null,
        "lastViewed": null,
        "customfield_12000": null,
        "priority": {
          "self": "https://goeuro.atlassian.net/rest/api/2/priority/6",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/priority_major.gif",
          "name": "Normal (P3)",
          "id": "6"
        },
        "customfield_12400": null,
        "customfield_12402": null,
        "customfield_10102": null,
        "customfield_12401": null,
        "labels": [

        ],
        "customfield_11303": null,
        "customfield_11305": null,
        "customfield_11306": null,
        "timeestimate": null,
        "customfield_11307": null,
        "aggregatetimeoriginalestimate": null,
        "customfield_11308": null,
        "versions": [

        ],
        "issuelinks": [

        ],
        "assignee": null,
        "status": {
          "self": "https://goeuro.atlassian.net/rest/api/2/status/1",
          "description": "",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/statuses/open.png",
          "name": "To Do",
          "id": "1",
          "statusCategory": {
            "self": "https://goeuro.atlassian.net/rest/api/2/statuscategory/2",
            "id": 2,
            "key": "new",
            "colorName": "blue-gray",
            "name": "To Do"
          }
        },
        "components": [

        ],
        "customfield_10050": null,
        "customfield_10051": null,
        "customfield_10052": null,
        "customfield_11301": null,
        "customfield_11302": null,
        "customfield_10049": null,
        "customfield_10600": null,
        "customfield_10601": [

        ],
        "customfield_12900": null,
        "customfield_10602": null,
        "aggregatetimeestimate": null,
        "creator": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "subtasks": [

        ],
        "reporter": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "customfield_12100": "{}",
        "aggregateprogress": {
          "progress": 0,
          "total": 0
        },
        "customfield_10200": "1|hzuz74:1m0n3r",
        "customfield_10201": null,
        "customfield_12500": null,
        "customfield_11800": null,
        "progress": {
          "progress": 0,
          "total": 0
        },
        "votes": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1194/votes",
          "votes": 0,
          "hasVoted": false
        },
        "issuetype": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issuetype/10001",
          "id": "10001",
          "description": "Created by JIRA Agile - do not edit or delete. Issue type for a user story.",
          "iconUrl": "https://goeuro.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10315&avatarType=issuetype",
          "name": "Story",
          "subtask": false,
          "avatarId": 10315
        },
        "timespent": null,
        "project": {
          "self": "https://goeuro.atlassian.net/rest/api/2/project/11801",
          "id": "11801",
          "key": "AD",
          "name": "Advertising",
          "avatarUrls": {
            "48x48": "https://goeuro.atlassian.net/secure/projectavatar?pid=11801&avatarId=18802",
            "24x24": "https://goeuro.atlassian.net/secure/projectavatar?size=small&pid=11801&avatarId=18802",
            "16x16": "https://goeuro.atlassian.net/secure/projectavatar?size=xsmall&pid=11801&avatarId=18802",
            "32x32": "https://goeuro.atlassian.net/secure/projectavatar?size=medium&pid=11801&avatarId=18802"
          }
        },
        "aggregatetimespent": null,
        "customfield_10701": null,
        "resolutiondate": null,
        "workratio": -1,
        "watches": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1194/watchers",
          "watchCount": 1,
          "isWatching": true
        },
        "created": "2017-07-06T13:00:04.000+0200",
        "customfield_10020": null,
        "customfield_12200": null,
        "customfield_10021": null,
        "customfield_10024": null,
        "customfield_10300": null,
        "customfield_12600": null,
        "customfield_10026": null,
        "customfield_10016": null,
        "customfield_10017": null,
        "customfield_11501": null,
        "customfield_10018": null,
        "customfield_10019": null,
        "customfield_11902": "{panel:bgColor=#EAECFF}\r\nh3. Issue Summary\r\n* short summary (5 sentences)\r\n* list the duration along with start and end times (include timezone)\r\n* state the impact (e.g. most user requests resulted in 500 errors, at peak 100%)\r\n* close with root cause\r\n\r\nh3. Timeline\r\n* list the timezone\r\n* covers the outage duration\r\n* when outage began\r\n* when staff was notified\r\n* actions, events, ...\r\n* when service was restored\r\n\r\nh3. Root Cause\r\n\r\nh3. Resolution and recovery\r\n* give detailed explanation of actions taken (includes times)\r\n\r\nh3. Corrective and Preventative Measures\r\n(flag) Action items should be created as a tickets and linked to this report\r\n* itemized list of ways to prevent it from happening again\r\n* what can we do better next time?\r\n{panel}",
        "updated": "2017-07-12T12:31:07.000+0200",
        "timeoriginalestimate": null,
        "description": "As a CRM person I would like to get users email to send them offers n shit",
        "customfield_11100": null,
        "customfield_10012": null,
        "customfield_10013": null,
        "customfield_11500": null,
        "customfield_10014": null,
        "customfield_10015": null,
        "customfield_12701": null,
        "customfield_10005": null,
        "customfield_12700": null,
        "customfield_12703": null,
        "customfield_10007": null,
        "customfield_12702": null,
        "customfield_10008": null,
        "customfield_10801": null,
        "customfield_12705": null,
        "customfield_12704": null,
        "customfield_12706": null,
        "summary": "Implement Appboy in booking components",
        "customfield_10001": null,
        "customfield_10002": null,
        "customfield_12300": null,
        "customfield_10003": null,
        "customfield_10004": null,
        "customfield_10400": null,
        "customfield_11600": null,
        "environment": null,
        "duedate": null
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "86979",
      "self": "https://goeuro.atlassian.net/rest/api/2/issue/86979",
      "key": "AD-1188",
      "fields": {
        "fixVersions": [

        ],
        "resolution": null,
        "customfield_12800": null,
        "customfield_12802": null,
        "customfield_12801": null,
        "customfield_12804": null,
        "customfield_12803": null,
        "customfield_12806": null,
        "customfield_12805": null,
        "customfield_10903": null,
        "lastViewed": null,
        "customfield_12000": null,
        "customfield_12400": null,
        "priority": {
          "self": "https://goeuro.atlassian.net/rest/api/2/priority/6",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/priority_major.gif",
          "name": "Normal (P3)",
          "id": "6"
        },
        "customfield_12402": null,
        "customfield_10102": null,
        "customfield_12401": null,
        "labels": [

        ],
        "customfield_11303": null,
        "customfield_11305": null,
        "customfield_11306": null,
        "customfield_11307": null,
        "timeestimate": null,
        "aggregatetimeoriginalestimate": null,
        "versions": [

        ],
        "customfield_11308": null,
        "issuelinks": [

        ],
        "assignee": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=nastassia.oswald",
          "name": "nastassia.oswald",
          "key": "nastassia.oswald",
          "accountId": "557058:8da1e3e3-5696-4d57-a1ab-35d873ba877a",
          "emailAddress": "nastassia.oswald@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/b18cb2c0acd25423aec2d30c9a0aec25?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Dnastassia.oswald%26avatarId%3D17001%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/b18cb2c0acd25423aec2d30c9a0aec25?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Dnastassia.oswald%26avatarId%3D17001%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/b18cb2c0acd25423aec2d30c9a0aec25?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Dnastassia.oswald%26avatarId%3D17001%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/b18cb2c0acd25423aec2d30c9a0aec25?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Dnastassia.oswald%26avatarId%3D17001%26noRedirect%3Dtrue"
          },
          "displayName": "Nastassia Oswald",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "status": {
          "self": "https://goeuro.atlassian.net/rest/api/2/status/1",
          "description": "",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/statuses/open.png",
          "name": "To Do",
          "id": "1",
          "statusCategory": {
            "self": "https://goeuro.atlassian.net/rest/api/2/statuscategory/2",
            "id": 2,
            "key": "new",
            "colorName": "blue-gray",
            "name": "To Do"
          }
        },
        "components": [

        ],
        "customfield_10050": null,
        "customfield_10051": null,
        "customfield_10052": null,
        "customfield_11301": null,
        "customfield_11302": null,
        "customfield_10049": null,
        "customfield_10600": null,
        "customfield_10601": [

        ],
        "customfield_10602": null,
        "customfield_12900": null,
        "aggregatetimeestimate": null,
        "creator": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=lisa.lintschinger",
          "name": "lisa.lintschinger",
          "key": "lisa.lintschinger",
          "accountId": "557058:7f45886b-1d61-41d6-9b61-894220ee12d2",
          "emailAddress": "lisa.lintschinger@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/83ec378de48e688eedab8d1fbf7b0f4d?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F83ec378de48e688eedab8d1fbf7b0f4d%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/83ec378de48e688eedab8d1fbf7b0f4d?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F83ec378de48e688eedab8d1fbf7b0f4d%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/83ec378de48e688eedab8d1fbf7b0f4d?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F83ec378de48e688eedab8d1fbf7b0f4d%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/83ec378de48e688eedab8d1fbf7b0f4d?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F83ec378de48e688eedab8d1fbf7b0f4d%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue"
          },
          "displayName": "Lisa Lintschinger",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "subtasks": [

        ],
        "reporter": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=lisa.lintschinger",
          "name": "lisa.lintschinger",
          "key": "lisa.lintschinger",
          "accountId": "557058:7f45886b-1d61-41d6-9b61-894220ee12d2",
          "emailAddress": "lisa.lintschinger@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/83ec378de48e688eedab8d1fbf7b0f4d?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F83ec378de48e688eedab8d1fbf7b0f4d%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/83ec378de48e688eedab8d1fbf7b0f4d?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F83ec378de48e688eedab8d1fbf7b0f4d%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/83ec378de48e688eedab8d1fbf7b0f4d?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F83ec378de48e688eedab8d1fbf7b0f4d%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/83ec378de48e688eedab8d1fbf7b0f4d?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F83ec378de48e688eedab8d1fbf7b0f4d%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue"
          },
          "displayName": "Lisa Lintschinger",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "aggregateprogress": {
          "progress": 0,
          "total": 0
        },
        "customfield_12100": "{}",
        "customfield_10200": "1|hzuz74:1m0ni",
        "customfield_10201": null,
        "customfield_12500": null,
        "customfield_11800": null,
        "progress": {
          "progress": 0,
          "total": 0
        },
        "votes": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1188/votes",
          "votes": 0,
          "hasVoted": false
        },
        "issuetype": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issuetype/10001",
          "id": "10001",
          "description": "Created by JIRA Agile - do not edit or delete. Issue type for a user story.",
          "iconUrl": "https://goeuro.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10315&avatarType=issuetype",
          "name": "Story",
          "subtask": false,
          "avatarId": 10315
        },
        "timespent": null,
        "project": {
          "self": "https://goeuro.atlassian.net/rest/api/2/project/11801",
          "id": "11801",
          "key": "AD",
          "name": "Advertising",
          "avatarUrls": {
            "48x48": "https://goeuro.atlassian.net/secure/projectavatar?pid=11801&avatarId=18802",
            "24x24": "https://goeuro.atlassian.net/secure/projectavatar?size=small&pid=11801&avatarId=18802",
            "16x16": "https://goeuro.atlassian.net/secure/projectavatar?size=xsmall&pid=11801&avatarId=18802",
            "32x32": "https://goeuro.atlassian.net/secure/projectavatar?size=medium&pid=11801&avatarId=18802"
          }
        },
        "aggregatetimespent": null,
        "customfield_10701": null,
        "resolutiondate": null,
        "workratio": -1,
        "watches": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1188/watchers",
          "watchCount": 1,
          "isWatching": false
        },
        "created": "2017-07-05T14:27:55.000+0200",
        "customfield_10020": null,
        "customfield_10021": null,
        "customfield_12200": null,
        "customfield_10024": null,
        "customfield_12600": null,
        "customfield_10300": null,
        "customfield_10026": null,
        "customfield_10016": null,
        "customfield_10017": null,
        "customfield_11501": null,
        "customfield_10018": null,
        "customfield_10019": null,
        "customfield_11902": "{panel:bgColor=#EAECFF}\r\nh3. Issue Summary\r\n* short summary (5 sentences)\r\n* list the duration along with start and end times (include timezone)\r\n* state the impact (e.g. most user requests resulted in 500 errors, at peak 100%)\r\n* close with root cause\r\n\r\nh3. Timeline\r\n* list the timezone\r\n* covers the outage duration\r\n* when outage began\r\n* when staff was notified\r\n* actions, events, ...\r\n* when service was restored\r\n\r\nh3. Root Cause\r\n\r\nh3. Resolution and recovery\r\n* give detailed explanation of actions taken (includes times)\r\n\r\nh3. Corrective and Preventative Measures\r\n(flag) Action items should be created as a tickets and linked to this report\r\n* itemized list of ways to prevent it from happening again\r\n* what can we do better next time?\r\n{panel}",
        "updated": "2017-07-05T14:32:52.000+0200",
        "timeoriginalestimate": null,
        "description": "For the SRP we will use a similar layout as for the price alerts - see screenshot attached, the only thing to solve would be the sample results as an incitive to register to the crm funnel instead of the price\r\n\r\nFor the Timeout, we would need again sample results plus a headline plus text plus a subscription field\r\n\r\nFor both of them we need a thank you msg as well, but i would like to use the one we currently have - see screenshot",
        "customfield_11100": null,
        "customfield_10012": null,
        "customfield_10013": null,
        "customfield_10014": null,
        "customfield_11500": null,
        "customfield_10015": null,
        "customfield_12701": null,
        "customfield_10005": null,
        "customfield_12700": null,
        "customfield_10007": null,
        "customfield_12703": null,
        "customfield_12702": null,
        "customfield_10008": null,
        "customfield_12705": null,
        "customfield_10801": null,
        "customfield_12704": null,
        "customfield_12706": null,
        "summary": "Create new designs for Subscription on SRP and Timout Screen",
        "customfield_10001": null,
        "customfield_10002": null,
        "customfield_12300": null,
        "customfield_10003": null,
        "customfield_10004": null,
        "customfield_10400": null,
        "customfield_11600": null,
        "environment": null,
        "duedate": null
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "86867",
      "self": "https://goeuro.atlassian.net/rest/api/2/issue/86867",
      "key": "AD-1186",
      "fields": {
        "fixVersions": [

        ],
        "resolution": null,
        "customfield_12800": null,
        "customfield_12802": null,
        "customfield_12801": null,
        "customfield_12804": null,
        "customfield_12803": null,
        "customfield_12806": null,
        "customfield_10903": null,
        "customfield_12805": null,
        "lastViewed": null,
        "customfield_12000": null,
        "customfield_12400": null,
        "priority": {
          "self": "https://goeuro.atlassian.net/rest/api/2/priority/6",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/priority_major.gif",
          "name": "Normal (P3)",
          "id": "6"
        },
        "customfield_12402": null,
        "customfield_10102": null,
        "labels": [

        ],
        "customfield_12401": null,
        "customfield_11303": null,
        "customfield_11305": null,
        "customfield_11306": null,
        "aggregatetimeoriginalestimate": null,
        "timeestimate": null,
        "customfield_11307": null,
        "customfield_11308": null,
        "versions": [

        ],
        "issuelinks": [

        ],
        "assignee": null,
        "status": {
          "self": "https://goeuro.atlassian.net/rest/api/2/status/1",
          "description": "",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/statuses/open.png",
          "name": "To Do",
          "id": "1",
          "statusCategory": {
            "self": "https://goeuro.atlassian.net/rest/api/2/statuscategory/2",
            "id": 2,
            "key": "new",
            "colorName": "blue-gray",
            "name": "To Do"
          }
        },
        "components": [

        ],
        "customfield_10050": null,
        "customfield_10051": null,
        "customfield_10052": null,
        "customfield_11301": null,
        "customfield_11302": null,
        "customfield_10049": null,
        "customfield_10600": null,
        "customfield_10601": [

        ],
        "customfield_10602": null,
        "customfield_12900": null,
        "aggregatetimeestimate": null,
        "creator": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=lisa.lintschinger",
          "name": "lisa.lintschinger",
          "key": "lisa.lintschinger",
          "accountId": "557058:7f45886b-1d61-41d6-9b61-894220ee12d2",
          "emailAddress": "lisa.lintschinger@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/83ec378de48e688eedab8d1fbf7b0f4d?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F83ec378de48e688eedab8d1fbf7b0f4d%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/83ec378de48e688eedab8d1fbf7b0f4d?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F83ec378de48e688eedab8d1fbf7b0f4d%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/83ec378de48e688eedab8d1fbf7b0f4d?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F83ec378de48e688eedab8d1fbf7b0f4d%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/83ec378de48e688eedab8d1fbf7b0f4d?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F83ec378de48e688eedab8d1fbf7b0f4d%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue"
          },
          "displayName": "Lisa Lintschinger",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "subtasks": [

        ],
        "reporter": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=lisa.lintschinger",
          "name": "lisa.lintschinger",
          "key": "lisa.lintschinger",
          "accountId": "557058:7f45886b-1d61-41d6-9b61-894220ee12d2",
          "emailAddress": "lisa.lintschinger@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/83ec378de48e688eedab8d1fbf7b0f4d?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F83ec378de48e688eedab8d1fbf7b0f4d%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/83ec378de48e688eedab8d1fbf7b0f4d?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F83ec378de48e688eedab8d1fbf7b0f4d%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/83ec378de48e688eedab8d1fbf7b0f4d?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F83ec378de48e688eedab8d1fbf7b0f4d%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/83ec378de48e688eedab8d1fbf7b0f4d?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F83ec378de48e688eedab8d1fbf7b0f4d%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue"
          },
          "displayName": "Lisa Lintschinger",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "aggregateprogress": {
          "progress": 0,
          "total": 0
        },
        "customfield_12100": "{}",
        "customfield_10200": "1|i04r1b:",
        "customfield_10201": null,
        "customfield_12500": null,
        "customfield_11800": null,
        "progress": {
          "progress": 0,
          "total": 0
        },
        "votes": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1186/votes",
          "votes": 0,
          "hasVoted": false
        },
        "issuetype": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issuetype/10001",
          "id": "10001",
          "description": "Created by JIRA Agile - do not edit or delete. Issue type for a user story.",
          "iconUrl": "https://goeuro.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10315&avatarType=issuetype",
          "name": "Story",
          "subtask": false,
          "avatarId": 10315
        },
        "timespent": null,
        "project": {
          "self": "https://goeuro.atlassian.net/rest/api/2/project/11801",
          "id": "11801",
          "key": "AD",
          "name": "Advertising",
          "avatarUrls": {
            "48x48": "https://goeuro.atlassian.net/secure/projectavatar?pid=11801&avatarId=18802",
            "24x24": "https://goeuro.atlassian.net/secure/projectavatar?size=small&pid=11801&avatarId=18802",
            "16x16": "https://goeuro.atlassian.net/secure/projectavatar?size=xsmall&pid=11801&avatarId=18802",
            "32x32": "https://goeuro.atlassian.net/secure/projectavatar?size=medium&pid=11801&avatarId=18802"
          }
        },
        "aggregatetimespent": null,
        "customfield_10701": null,
        "resolutiondate": null,
        "workratio": -1,
        "watches": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1186/watchers",
          "watchCount": 1,
          "isWatching": false
        },
        "created": "2017-07-04T18:24:25.000+0200",
        "customfield_10020": null,
        "customfield_12200": null,
        "customfield_10021": null,
        "customfield_10024": null,
        "customfield_12600": null,
        "customfield_10300": null,
        "customfield_10026": null,
        "customfield_10016": null,
        "customfield_10017": null,
        "customfield_11501": null,
        "customfield_10018": null,
        "customfield_10019": null,
        "customfield_11902": "{panel:bgColor=#EAECFF}\r\nh3. Issue Summary\r\n* short summary (5 sentences)\r\n* list the duration along with start and end times (include timezone)\r\n* state the impact (e.g. most user requests resulted in 500 errors, at peak 100%)\r\n* close with root cause\r\n\r\nh3. Timeline\r\n* list the timezone\r\n* covers the outage duration\r\n* when outage began\r\n* when staff was notified\r\n* actions, events, ...\r\n* when service was restored\r\n\r\nh3. Root Cause\r\n\r\nh3. Resolution and recovery\r\n* give detailed explanation of actions taken (includes times)\r\n\r\nh3. Corrective and Preventative Measures\r\n(flag) Action items should be created as a tickets and linked to this report\r\n* itemized list of ways to prevent it from happening again\r\n* what can we do better next time?\r\n{panel}",
        "updated": "2017-07-04T18:24:25.000+0200",
        "timeoriginalestimate": null,
        "description": "More Info to come",
        "customfield_11100": null,
        "customfield_10012": null,
        "customfield_10013": null,
        "customfield_10014": null,
        "customfield_11500": null,
        "customfield_10015": null,
        "customfield_10005": null,
        "customfield_12701": null,
        "customfield_12700": null,
        "customfield_12703": null,
        "customfield_10007": null,
        "customfield_12702": null,
        "customfield_10008": null,
        "customfield_12705": null,
        "customfield_10801": null,
        "customfield_12704": null,
        "customfield_12706": null,
        "summary": "[CRM] Ad Newsletter Subscription Field to Time Out Screen",
        "customfield_10001": null,
        "customfield_10002": null,
        "customfield_12300": null,
        "customfield_10003": null,
        "customfield_10004": null,
        "customfield_10400": null,
        "customfield_11600": null,
        "environment": null,
        "duedate": null
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "86866",
      "self": "https://goeuro.atlassian.net/rest/api/2/issue/86866",
      "key": "AD-1185",
      "fields": {
        "fixVersions": [

        ],
        "resolution": null,
        "customfield_12800": null,
        "customfield_12802": null,
        "customfield_12801": null,
        "customfield_12804": null,
        "customfield_12803": null,
        "customfield_12806": null,
        "customfield_12805": null,
        "customfield_10903": null,
        "lastViewed": null,
        "customfield_12000": null,
        "customfield_12400": null,
        "priority": {
          "self": "https://goeuro.atlassian.net/rest/api/2/priority/6",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/priority_major.gif",
          "name": "Normal (P3)",
          "id": "6"
        },
        "customfield_10102": null,
        "customfield_12402": null,
        "labels": [

        ],
        "customfield_12401": null,
        "customfield_11303": null,
        "customfield_11305": null,
        "customfield_11306": null,
        "timeestimate": null,
        "aggregatetimeoriginalestimate": null,
        "customfield_11307": null,
        "customfield_11308": null,
        "versions": [

        ],
        "issuelinks": [

        ],
        "assignee": null,
        "status": {
          "self": "https://goeuro.atlassian.net/rest/api/2/status/1",
          "description": "",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/statuses/open.png",
          "name": "To Do",
          "id": "1",
          "statusCategory": {
            "self": "https://goeuro.atlassian.net/rest/api/2/statuscategory/2",
            "id": 2,
            "key": "new",
            "colorName": "blue-gray",
            "name": "To Do"
          }
        },
        "components": [

        ],
        "customfield_10050": null,
        "customfield_10051": null,
        "customfield_10052": null,
        "customfield_11301": null,
        "customfield_11302": null,
        "customfield_10049": null,
        "customfield_10600": null,
        "customfield_10601": [

        ],
        "customfield_12900": null,
        "customfield_10602": null,
        "aggregatetimeestimate": null,
        "creator": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=lisa.lintschinger",
          "name": "lisa.lintschinger",
          "key": "lisa.lintschinger",
          "accountId": "557058:7f45886b-1d61-41d6-9b61-894220ee12d2",
          "emailAddress": "lisa.lintschinger@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/83ec378de48e688eedab8d1fbf7b0f4d?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F83ec378de48e688eedab8d1fbf7b0f4d%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/83ec378de48e688eedab8d1fbf7b0f4d?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F83ec378de48e688eedab8d1fbf7b0f4d%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/83ec378de48e688eedab8d1fbf7b0f4d?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F83ec378de48e688eedab8d1fbf7b0f4d%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/83ec378de48e688eedab8d1fbf7b0f4d?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F83ec378de48e688eedab8d1fbf7b0f4d%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue"
          },
          "displayName": "Lisa Lintschinger",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "subtasks": [

        ],
        "reporter": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=lisa.lintschinger",
          "name": "lisa.lintschinger",
          "key": "lisa.lintschinger",
          "accountId": "557058:7f45886b-1d61-41d6-9b61-894220ee12d2",
          "emailAddress": "lisa.lintschinger@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/83ec378de48e688eedab8d1fbf7b0f4d?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F83ec378de48e688eedab8d1fbf7b0f4d%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/83ec378de48e688eedab8d1fbf7b0f4d?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F83ec378de48e688eedab8d1fbf7b0f4d%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/83ec378de48e688eedab8d1fbf7b0f4d?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F83ec378de48e688eedab8d1fbf7b0f4d%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/83ec378de48e688eedab8d1fbf7b0f4d?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F83ec378de48e688eedab8d1fbf7b0f4d%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue"
          },
          "displayName": "Lisa Lintschinger",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "aggregateprogress": {
          "progress": 0,
          "total": 0
        },
        "customfield_12100": "{}",
        "customfield_10200": "1|i04r13:",
        "customfield_10201": null,
        "customfield_12500": null,
        "customfield_11800": null,
        "progress": {
          "progress": 0,
          "total": 0
        },
        "votes": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1185/votes",
          "votes": 0,
          "hasVoted": false
        },
        "issuetype": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issuetype/10001",
          "id": "10001",
          "description": "Created by JIRA Agile - do not edit or delete. Issue type for a user story.",
          "iconUrl": "https://goeuro.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10315&avatarType=issuetype",
          "name": "Story",
          "subtask": false,
          "avatarId": 10315
        },
        "timespent": null,
        "project": {
          "self": "https://goeuro.atlassian.net/rest/api/2/project/11801",
          "id": "11801",
          "key": "AD",
          "name": "Advertising",
          "avatarUrls": {
            "48x48": "https://goeuro.atlassian.net/secure/projectavatar?pid=11801&avatarId=18802",
            "24x24": "https://goeuro.atlassian.net/secure/projectavatar?size=small&pid=11801&avatarId=18802",
            "16x16": "https://goeuro.atlassian.net/secure/projectavatar?size=xsmall&pid=11801&avatarId=18802",
            "32x32": "https://goeuro.atlassian.net/secure/projectavatar?size=medium&pid=11801&avatarId=18802"
          }
        },
        "aggregatetimespent": null,
        "customfield_10701": null,
        "resolutiondate": null,
        "workratio": -1,
        "watches": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1185/watchers",
          "watchCount": 1,
          "isWatching": false
        },
        "created": "2017-07-04T18:23:54.000+0200",
        "customfield_10020": null,
        "customfield_10021": null,
        "customfield_12200": null,
        "customfield_10024": null,
        "customfield_10300": null,
        "customfield_12600": null,
        "customfield_10026": null,
        "customfield_10016": null,
        "customfield_10017": null,
        "customfield_11501": null,
        "customfield_10018": null,
        "customfield_10019": null,
        "customfield_11902": "{panel:bgColor=#EAECFF}\r\nh3. Issue Summary\r\n* short summary (5 sentences)\r\n* list the duration along with start and end times (include timezone)\r\n* state the impact (e.g. most user requests resulted in 500 errors, at peak 100%)\r\n* close with root cause\r\n\r\nh3. Timeline\r\n* list the timezone\r\n* covers the outage duration\r\n* when outage began\r\n* when staff was notified\r\n* actions, events, ...\r\n* when service was restored\r\n\r\nh3. Root Cause\r\n\r\nh3. Resolution and recovery\r\n* give detailed explanation of actions taken (includes times)\r\n\r\nh3. Corrective and Preventative Measures\r\n(flag) Action items should be created as a tickets and linked to this report\r\n* itemized list of ways to prevent it from happening again\r\n* what can we do better next time?\r\n{panel}",
        "updated": "2017-07-04T18:23:54.000+0200",
        "timeoriginalestimate": null,
        "description": "More Info to come",
        "customfield_11100": null,
        "customfield_10012": null,
        "customfield_10013": null,
        "customfield_11500": null,
        "customfield_10014": null,
        "customfield_10015": null,
        "customfield_12701": null,
        "customfield_10005": null,
        "customfield_12700": null,
        "customfield_10007": null,
        "customfield_12703": null,
        "customfield_10008": null,
        "customfield_12702": null,
        "customfield_12705": null,
        "customfield_10801": null,
        "customfield_12704": null,
        "customfield_12706": null,
        "summary": "[CRM] Ad Newsletter Subscription Box to Searches that return no Results",
        "customfield_10001": null,
        "customfield_12300": null,
        "customfield_10002": null,
        "customfield_10003": null,
        "customfield_10004": null,
        "customfield_10400": null,
        "customfield_11600": null,
        "environment": null,
        "duedate": null
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "86756",
      "self": "https://goeuro.atlassian.net/rest/api/2/issue/86756",
      "key": "AD-1181",
      "fields": {
        "fixVersions": [

        ],
        "resolution": null,
        "customfield_12800": null,
        "customfield_12802": null,
        "customfield_12801": null,
        "customfield_12804": null,
        "customfield_12803": null,
        "customfield_12806": null,
        "customfield_12805": null,
        "customfield_10903": null,
        "lastViewed": null,
        "customfield_12000": null,
        "customfield_12400": null,
        "priority": {
          "self": "https://goeuro.atlassian.net/rest/api/2/priority/6",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/priority_major.gif",
          "name": "Normal (P3)",
          "id": "6"
        },
        "customfield_12402": null,
        "customfield_10102": null,
        "customfield_12401": null,
        "labels": [

        ],
        "customfield_11303": null,
        "customfield_11305": null,
        "customfield_11306": null,
        "customfield_11307": null,
        "timeestimate": null,
        "aggregatetimeoriginalestimate": null,
        "customfield_11308": null,
        "versions": [

        ],
        "issuelinks": [

        ],
        "assignee": null,
        "status": {
          "self": "https://goeuro.atlassian.net/rest/api/2/status/1",
          "description": "",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/statuses/open.png",
          "name": "To Do",
          "id": "1",
          "statusCategory": {
            "self": "https://goeuro.atlassian.net/rest/api/2/statuscategory/2",
            "id": 2,
            "key": "new",
            "colorName": "blue-gray",
            "name": "To Do"
          }
        },
        "components": [

        ],
        "customfield_10050": null,
        "customfield_10051": null,
        "customfield_10052": null,
        "customfield_11301": null,
        "customfield_11302": null,
        "customfield_10049": null,
        "customfield_10600": null,
        "customfield_10601": [

        ],
        "customfield_10602": null,
        "customfield_12900": null,
        "aggregatetimeestimate": null,
        "creator": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=cristiano.sanchez",
          "name": "cristiano.sanchez",
          "key": "cristiano.sanchez",
          "accountId": "557058:25d2f2be-2415-4b90-afa4-7e07e24b6ca4",
          "emailAddress": "cristiano.sanchez@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/3522dc54efcbbf47802e3a3ef52defab?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Dcristiano.sanchez%26avatarId%3D16701%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/3522dc54efcbbf47802e3a3ef52defab?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Dcristiano.sanchez%26avatarId%3D16701%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/3522dc54efcbbf47802e3a3ef52defab?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Dcristiano.sanchez%26avatarId%3D16701%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/3522dc54efcbbf47802e3a3ef52defab?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Dcristiano.sanchez%26avatarId%3D16701%26noRedirect%3Dtrue"
          },
          "displayName": "Cristiano Sanchez",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "subtasks": [

        ],
        "reporter": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=cristiano.sanchez",
          "name": "cristiano.sanchez",
          "key": "cristiano.sanchez",
          "accountId": "557058:25d2f2be-2415-4b90-afa4-7e07e24b6ca4",
          "emailAddress": "cristiano.sanchez@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/3522dc54efcbbf47802e3a3ef52defab?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Dcristiano.sanchez%26avatarId%3D16701%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/3522dc54efcbbf47802e3a3ef52defab?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Dcristiano.sanchez%26avatarId%3D16701%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/3522dc54efcbbf47802e3a3ef52defab?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Dcristiano.sanchez%26avatarId%3D16701%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/3522dc54efcbbf47802e3a3ef52defab?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Dcristiano.sanchez%26avatarId%3D16701%26noRedirect%3Dtrue"
          },
          "displayName": "Cristiano Sanchez",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "aggregateprogress": {
          "progress": 0,
          "total": 0
        },
        "customfield_12100": "{}",
        "customfield_10200": "1|i04qf3:",
        "customfield_10201": null,
        "customfield_12500": null,
        "customfield_11800": null,
        "progress": {
          "progress": 0,
          "total": 0
        },
        "votes": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1181/votes",
          "votes": 0,
          "hasVoted": false
        },
        "issuetype": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issuetype/10001",
          "id": "10001",
          "description": "Created by JIRA Agile - do not edit or delete. Issue type for a user story.",
          "iconUrl": "https://goeuro.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10315&avatarType=issuetype",
          "name": "Story",
          "subtask": false,
          "avatarId": 10315
        },
        "timespent": null,
        "project": {
          "self": "https://goeuro.atlassian.net/rest/api/2/project/11801",
          "id": "11801",
          "key": "AD",
          "name": "Advertising",
          "avatarUrls": {
            "48x48": "https://goeuro.atlassian.net/secure/projectavatar?pid=11801&avatarId=18802",
            "24x24": "https://goeuro.atlassian.net/secure/projectavatar?size=small&pid=11801&avatarId=18802",
            "16x16": "https://goeuro.atlassian.net/secure/projectavatar?size=xsmall&pid=11801&avatarId=18802",
            "32x32": "https://goeuro.atlassian.net/secure/projectavatar?size=medium&pid=11801&avatarId=18802"
          }
        },
        "aggregatetimespent": null,
        "customfield_10701": null,
        "resolutiondate": null,
        "workratio": -1,
        "watches": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1181/watchers",
          "watchCount": 1,
          "isWatching": false
        },
        "created": "2017-07-04T10:29:25.000+0200",
        "customfield_10020": null,
        "customfield_12200": null,
        "customfield_10021": null,
        "customfield_10024": null,
        "customfield_12600": null,
        "customfield_10300": null,
        "customfield_10026": null,
        "customfield_10016": null,
        "customfield_11501": null,
        "customfield_10017": null,
        "customfield_10018": null,
        "customfield_10019": null,
        "customfield_11902": "{panel:bgColor=#EAECFF}\r\nh3. Issue Summary\r\n* short summary (5 sentences)\r\n* list the duration along with start and end times (include timezone)\r\n* state the impact (e.g. most user requests resulted in 500 errors, at peak 100%)\r\n* close with root cause\r\n\r\nh3. Timeline\r\n* list the timezone\r\n* covers the outage duration\r\n* when outage began\r\n* when staff was notified\r\n* actions, events, ...\r\n* when service was restored\r\n\r\nh3. Root Cause\r\n\r\nh3. Resolution and recovery\r\n* give detailed explanation of actions taken (includes times)\r\n\r\nh3. Corrective and Preventative Measures\r\n(flag) Action items should be created as a tickets and linked to this report\r\n* itemized list of ways to prevent it from happening again\r\n* what can we do better next time?\r\n{panel}",
        "updated": "2017-07-04T10:29:25.000+0200",
        "timeoriginalestimate": null,
        "description": "Using the new Grafana version we can setup same Seyren rules and get visual feedback for threshould values while also integrate VictorOps, Slack and other output channels.",
        "customfield_11100": null,
        "customfield_10012": null,
        "customfield_10013": null,
        "customfield_10014": null,
        "customfield_11500": null,
        "customfield_10015": null,
        "customfield_10005": null,
        "customfield_12701": null,
        "customfield_12700": null,
        "customfield_10007": null,
        "customfield_12703": null,
        "customfield_10008": null,
        "customfield_12702": null,
        "customfield_12705": null,
        "customfield_10801": null,
        "customfield_12704": null,
        "customfield_12706": null,
        "summary": "[ADS] Migrate Seyren rules to Grafana",
        "customfield_10001": null,
        "customfield_10002": null,
        "customfield_12300": null,
        "customfield_10003": null,
        "customfield_10400": null,
        "customfield_10004": null,
        "customfield_11600": null,
        "environment": null,
        "duedate": null
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "85467",
      "self": "https://goeuro.atlassian.net/rest/api/2/issue/85467",
      "key": "AD-1151",
      "fields": {
        "fixVersions": [

        ],
        "resolution": null,
        "customfield_12800": null,
        "customfield_12802": null,
        "customfield_12801": null,
        "customfield_12804": null,
        "customfield_12803": null,
        "customfield_12806": null,
        "customfield_12805": null,
        "customfield_10903": null,
        "lastViewed": null,
        "customfield_12000": null,
        "priority": {
          "self": "https://goeuro.atlassian.net/rest/api/2/priority/6",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/priority_major.gif",
          "name": "Normal (P3)",
          "id": "6"
        },
        "customfield_12400": null,
        "customfield_10102": null,
        "customfield_12402": null,
        "customfield_12401": null,
        "labels": [

        ],
        "customfield_11303": null,
        "customfield_11305": null,
        "customfield_11306": null,
        "aggregatetimeoriginalestimate": null,
        "timeestimate": null,
        "customfield_11307": null,
        "customfield_11308": null,
        "versions": [

        ],
        "issuelinks": [

        ],
        "assignee": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=milou.post",
          "name": "milou.post",
          "key": "milou.post",
          "accountId": "557058:a61ec27f-df1e-4672-aa19-0815b3e586ef",
          "emailAddress": "milou.post@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FavatarId%3D12823%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26avatarId%3D12823%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26avatarId%3D12823%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26avatarId%3D12823%26noRedirect%3Dtrue"
          },
          "displayName": "Milou Post",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "status": {
          "self": "https://goeuro.atlassian.net/rest/api/2/status/3",
          "description": "This issue is being actively worked on at the moment by the assignee.",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/statuses/inprogress.png",
          "name": "In Progress",
          "id": "3",
          "statusCategory": {
            "self": "https://goeuro.atlassian.net/rest/api/2/statuscategory/4",
            "id": 4,
            "key": "indeterminate",
            "colorName": "yellow",
            "name": "In Progress"
          }
        },
        "components": [

        ],
        "customfield_10050": null,
        "customfield_10051": null,
        "customfield_10052": null,
        "customfield_11301": null,
        "customfield_11302": null,
        "customfield_10049": null,
        "customfield_10600": null,
        "customfield_10601": [

        ],
        "customfield_12900": null,
        "customfield_10602": null,
        "aggregatetimeestimate": null,
        "creator": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=vitaliy.goncharenko",
          "name": "vitaliy.goncharenko",
          "key": "vitaliy.goncharenko",
          "accountId": "557058:f6049d40-e2b0-46a8-a7d9-f388f574e713",
          "emailAddress": "vitaliy.goncharenko@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/b75848519ab307a996a83c38af50ddb1?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Dvitaliy.goncharenko%26avatarId%3D12100%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/b75848519ab307a996a83c38af50ddb1?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Dvitaliy.goncharenko%26avatarId%3D12100%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/b75848519ab307a996a83c38af50ddb1?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Dvitaliy.goncharenko%26avatarId%3D12100%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/b75848519ab307a996a83c38af50ddb1?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Dvitaliy.goncharenko%26avatarId%3D12100%26noRedirect%3Dtrue"
          },
          "displayName": "Vitaliy Goncharenko",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "subtasks": [

        ],
        "reporter": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=vitaliy.goncharenko",
          "name": "vitaliy.goncharenko",
          "key": "vitaliy.goncharenko",
          "accountId": "557058:f6049d40-e2b0-46a8-a7d9-f388f574e713",
          "emailAddress": "vitaliy.goncharenko@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/b75848519ab307a996a83c38af50ddb1?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Dvitaliy.goncharenko%26avatarId%3D12100%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/b75848519ab307a996a83c38af50ddb1?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Dvitaliy.goncharenko%26avatarId%3D12100%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/b75848519ab307a996a83c38af50ddb1?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Dvitaliy.goncharenko%26avatarId%3D12100%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/b75848519ab307a996a83c38af50ddb1?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Dvitaliy.goncharenko%26avatarId%3D12100%26noRedirect%3Dtrue"
          },
          "displayName": "Vitaliy Goncharenko",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "aggregateprogress": {
          "progress": 0,
          "total": 0
        },
        "customfield_12100": "{}",
        "customfield_10200": "1|i04scq:",
        "customfield_10201": null,
        "customfield_12500": null,
        "customfield_11800": null,
        "progress": {
          "progress": 0,
          "total": 0
        },
        "votes": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1151/votes",
          "votes": 0,
          "hasVoted": false
        },
        "issuetype": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issuetype/3",
          "id": "3",
          "description": "A task that needs to be done.",
          "iconUrl": "https://goeuro.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10318&avatarType=issuetype",
          "name": "Task",
          "subtask": false,
          "avatarId": 10318
        },
        "timespent": null,
        "project": {
          "self": "https://goeuro.atlassian.net/rest/api/2/project/11801",
          "id": "11801",
          "key": "AD",
          "name": "Advertising",
          "avatarUrls": {
            "48x48": "https://goeuro.atlassian.net/secure/projectavatar?pid=11801&avatarId=18802",
            "24x24": "https://goeuro.atlassian.net/secure/projectavatar?size=small&pid=11801&avatarId=18802",
            "16x16": "https://goeuro.atlassian.net/secure/projectavatar?size=xsmall&pid=11801&avatarId=18802",
            "32x32": "https://goeuro.atlassian.net/secure/projectavatar?size=medium&pid=11801&avatarId=18802"
          }
        },
        "aggregatetimespent": null,
        "customfield_10701": null,
        "resolutiondate": null,
        "workratio": -1,
        "watches": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1151/watchers",
          "watchCount": 1,
          "isWatching": false
        },
        "created": "2017-06-21T12:17:29.000+0200",
        "customfield_10020": null,
        "customfield_12200": null,
        "customfield_10021": null,
        "customfield_10024": null,
        "customfield_10300": null,
        "customfield_12600": null,
        "customfield_10026": null,
        "customfield_10016": null,
        "customfield_10017": null,
        "customfield_10018": null,
        "customfield_10019": null,
        "customfield_11902": "{panel:bgColor=#EAECFF}\r\nh3. Issue Summary\r\n* short summary (5 sentences)\r\n* list the duration along with start and end times (include timezone)\r\n* state the impact (e.g. most user requests resulted in 500 errors, at peak 100%)\r\n* close with root cause\r\n\r\nh3. Timeline\r\n* list the timezone\r\n* covers the outage duration\r\n* when outage began\r\n* when staff was notified\r\n* actions, events, ...\r\n* when service was restored\r\n\r\nh3. Root Cause\r\n\r\nh3. Resolution and recovery\r\n* give detailed explanation of actions taken (includes times)\r\n\r\nh3. Corrective and Preventative Measures\r\n(flag) Action items should be created as a tickets and linked to this report\r\n* itemized list of ways to prevent it from happening again\r\n* what can we do better next time?\r\n{panel}",
        "updated": "2017-07-12T12:31:25.000+0200",
        "timeoriginalestimate": null,
        "description": "[~fauzan.khan] will discuss this topic in next booking FE standup. Tbc ",
        "customfield_11100": null,
        "customfield_10012": null,
        "customfield_10013": null,
        "customfield_10014": null,
        "customfield_10015": null,
        "customfield_12701": null,
        "customfield_12700": null,
        "customfield_10007": [
          "com.atlassian.greenhopper.service.sprint.Sprint@1d71759[id=932,rapidViewId=92,state=CLOSED,name=AD 25/26 DELTA,goal=,startDate=2017-06-22T11:22:51.050+02:00,endDate=2017-06-28T11:22:00.000+02:00,completeDate=2017-06-29T15:46:49.492+02:00,sequence=932]",
          "com.atlassian.greenhopper.service.sprint.Sprint@134888e[id=945,rapidViewId=92,state=CLOSED,name=AD 26/27 EPSILON,goal=,startDate=2017-06-29T15:47:12.043+02:00,endDate=2017-07-05T15:47:00.000+02:00,completeDate=2017-07-05T18:33:17.932+02:00,sequence=945]",
          "com.atlassian.greenhopper.service.sprint.Sprint@1ff73e0[id=946,rapidViewId=92,state=CLOSED,name=AD 27/28 ZETA,goal=,startDate=2017-07-05T18:33:37.618+02:00,endDate=2017-07-12T18:33:00.000+02:00,completeDate=2017-07-06T12:39:49.776+02:00,sequence=946]",
          "com.atlassian.greenhopper.service.sprint.Sprint@f781eb[id=966,rapidViewId=92,state=FUTURE,name=AD 32/33 IOTA,goal=,startDate=<null>,endDate=<null>,completeDate=<null>,sequence=966]"
        ],
        "customfield_12703": null,
        "customfield_12702": null,
        "customfield_10008": null,
        "customfield_12705": null,
        "customfield_10801": null,
        "customfield_12704": null,
        "customfield_12706": null,
        "summary": "[CRM] Evaluate workload",
        "customfield_10001": null,
        "customfield_12300": null,
        "customfield_10002": null,
        "customfield_10003": null,
        "customfield_10004": null,
        "customfield_10400": null,
        "customfield_11600": null,
        "environment": null,
        "duedate": null
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "85440",
      "self": "https://goeuro.atlassian.net/rest/api/2/issue/85440",
      "key": "AD-1148",
      "fields": {
        "fixVersions": [

        ],
        "resolution": null,
        "customfield_12800": null,
        "customfield_12802": null,
        "customfield_12801": null,
        "customfield_12804": null,
        "customfield_12803": null,
        "customfield_12806": null,
        "customfield_10903": null,
        "customfield_12805": null,
        "lastViewed": null,
        "customfield_12000": null,
        "priority": {
          "self": "https://goeuro.atlassian.net/rest/api/2/priority/6",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/priority_major.gif",
          "name": "Normal (P3)",
          "id": "6"
        },
        "customfield_12400": null,
        "customfield_10102": null,
        "customfield_12402": null,
        "labels": [

        ],
        "customfield_12401": null,
        "customfield_11303": null,
        "customfield_11305": null,
        "customfield_11306": null,
        "timeestimate": null,
        "aggregatetimeoriginalestimate": null,
        "customfield_11307": null,
        "customfield_11308": null,
        "versions": [

        ],
        "issuelinks": [

        ],
        "assignee": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=milou.post",
          "name": "milou.post",
          "key": "milou.post",
          "accountId": "557058:a61ec27f-df1e-4672-aa19-0815b3e586ef",
          "emailAddress": "milou.post@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FavatarId%3D12823%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26avatarId%3D12823%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26avatarId%3D12823%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26avatarId%3D12823%26noRedirect%3Dtrue"
          },
          "displayName": "Milou Post",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "status": {
          "self": "https://goeuro.atlassian.net/rest/api/2/status/3",
          "description": "This issue is being actively worked on at the moment by the assignee.",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/statuses/inprogress.png",
          "name": "In Progress",
          "id": "3",
          "statusCategory": {
            "self": "https://goeuro.atlassian.net/rest/api/2/statuscategory/4",
            "id": 4,
            "key": "indeterminate",
            "colorName": "yellow",
            "name": "In Progress"
          }
        },
        "components": [

        ],
        "customfield_10050": null,
        "customfield_10051": null,
        "customfield_10052": null,
        "customfield_11301": null,
        "customfield_11302": null,
        "customfield_10049": null,
        "customfield_10600": null,
        "customfield_10601": [

        ],
        "customfield_12900": null,
        "customfield_10602": null,
        "aggregatetimeestimate": null,
        "creator": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=milou.post",
          "name": "milou.post",
          "key": "milou.post",
          "accountId": "557058:a61ec27f-df1e-4672-aa19-0815b3e586ef",
          "emailAddress": "milou.post@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FavatarId%3D12823%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26avatarId%3D12823%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26avatarId%3D12823%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26avatarId%3D12823%26noRedirect%3Dtrue"
          },
          "displayName": "Milou Post",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "subtasks": [

        ],
        "reporter": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=milou.post",
          "name": "milou.post",
          "key": "milou.post",
          "accountId": "557058:a61ec27f-df1e-4672-aa19-0815b3e586ef",
          "emailAddress": "milou.post@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FavatarId%3D12823%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26avatarId%3D12823%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26avatarId%3D12823%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26avatarId%3D12823%26noRedirect%3Dtrue"
          },
          "displayName": "Milou Post",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "customfield_12100": "{}",
        "aggregateprogress": {
          "progress": 0,
          "total": 0
        },
        "customfield_10200": "1|hzuz74:1m0qy4",
        "customfield_10201": null,
        "customfield_12500": null,
        "customfield_11800": null,
        "progress": {
          "progress": 0,
          "total": 0
        },
        "votes": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1148/votes",
          "votes": 0,
          "hasVoted": false
        },
        "issuetype": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issuetype/10001",
          "id": "10001",
          "description": "Created by JIRA Agile - do not edit or delete. Issue type for a user story.",
          "iconUrl": "https://goeuro.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10315&avatarType=issuetype",
          "name": "Story",
          "subtask": false,
          "avatarId": 10315
        },
        "timespent": null,
        "project": {
          "self": "https://goeuro.atlassian.net/rest/api/2/project/11801",
          "id": "11801",
          "key": "AD",
          "name": "Advertising",
          "avatarUrls": {
            "48x48": "https://goeuro.atlassian.net/secure/projectavatar?pid=11801&avatarId=18802",
            "24x24": "https://goeuro.atlassian.net/secure/projectavatar?size=small&pid=11801&avatarId=18802",
            "16x16": "https://goeuro.atlassian.net/secure/projectavatar?size=xsmall&pid=11801&avatarId=18802",
            "32x32": "https://goeuro.atlassian.net/secure/projectavatar?size=medium&pid=11801&avatarId=18802"
          }
        },
        "aggregatetimespent": null,
        "customfield_10701": null,
        "resolutiondate": null,
        "workratio": -1,
        "watches": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1148/watchers",
          "watchCount": 1,
          "isWatching": false
        },
        "created": "2017-06-21T11:10:40.000+0200",
        "customfield_10020": null,
        "customfield_10021": null,
        "customfield_12200": null,
        "customfield_10024": null,
        "customfield_12600": null,
        "customfield_10300": null,
        "customfield_10026": null,
        "customfield_10016": null,
        "customfield_11501": null,
        "customfield_10017": null,
        "customfield_10018": null,
        "customfield_10019": null,
        "customfield_11902": "{panel:bgColor=#EAECFF}\r\nh3. Issue Summary\r\n* short summary (5 sentences)\r\n* list the duration along with start and end times (include timezone)\r\n* state the impact (e.g. most user requests resulted in 500 errors, at peak 100%)\r\n* close with root cause\r\n\r\nh3. Timeline\r\n* list the timezone\r\n* covers the outage duration\r\n* when outage began\r\n* when staff was notified\r\n* actions, events, ...\r\n* when service was restored\r\n\r\nh3. Root Cause\r\n\r\nh3. Resolution and recovery\r\n* give detailed explanation of actions taken (includes times)\r\n\r\nh3. Corrective and Preventative Measures\r\n(flag) Action items should be created as a tickets and linked to this report\r\n* itemized list of ways to prevent it from happening again\r\n* what can we do better next time?\r\n{panel}",
        "updated": "2017-06-21T11:13:04.000+0200",
        "timeoriginalestimate": null,
        "description": null,
        "customfield_11100": null,
        "customfield_10012": null,
        "customfield_10013": null,
        "customfield_10014": null,
        "customfield_11500": null,
        "customfield_10015": null,
        "customfield_10005": null,
        "customfield_12701": null,
        "customfield_12700": null,
        "customfield_12703": null,
        "customfield_10007": null,
        "customfield_10008": null,
        "customfield_12702": null,
        "customfield_10801": null,
        "customfield_12705": null,
        "customfield_12704": null,
        "customfield_12706": null,
        "summary": "[BFE] - create Tripwolf voucher component storybook",
        "customfield_10001": null,
        "customfield_10002": null,
        "customfield_12300": null,
        "customfield_10003": null,
        "customfield_10004": null,
        "customfield_10400": null,
        "customfield_11600": null,
        "environment": null,
        "duedate": null
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "84990",
      "self": "https://goeuro.atlassian.net/rest/api/2/issue/84990",
      "key": "AD-1145",
      "fields": {
        "fixVersions": [

        ],
        "resolution": null,
        "customfield_12800": null,
        "customfield_12802": null,
        "customfield_12801": null,
        "customfield_12804": null,
        "customfield_12803": null,
        "customfield_12806": null,
        "customfield_12805": null,
        "customfield_10903": null,
        "lastViewed": null,
        "customfield_12000": null,
        "priority": {
          "self": "https://goeuro.atlassian.net/rest/api/2/priority/6",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/priority_major.gif",
          "name": "Normal (P3)",
          "id": "6"
        },
        "customfield_12400": null,
        "customfield_10102": null,
        "customfield_12402": null,
        "labels": [
          "crm",
          "onboarding"
        ],
        "customfield_12401": null,
        "customfield_11303": null,
        "customfield_11305": null,
        "customfield_11306": null,
        "customfield_11307": null,
        "aggregatetimeoriginalestimate": null,
        "timeestimate": null,
        "customfield_11308": null,
        "versions": [

        ],
        "issuelinks": [
          {
            "id": "70372",
            "self": "https://goeuro.atlassian.net/rest/api/2/issueLink/70372",
            "type": {
              "id": "10001",
              "name": "Cloners",
              "inward": "is cloned by",
              "outward": "clones",
              "self": "https://goeuro.atlassian.net/rest/api/2/issueLinkType/10001"
            },
            "outwardIssue": {
              "id": "67058",
              "key": "SI-3458",
              "self": "https://goeuro.atlassian.net/rest/api/2/issue/67058",
              "fields": {
                "summary": "FE - HTML Onboarding message",
                "status": {
                  "self": "https://goeuro.atlassian.net/rest/api/2/status/6",
                  "description": "The issue is considered finished, the resolution is correct. Issues which are closed can be reopened.",
                  "iconUrl": "https://goeuro.atlassian.net/images/icons/statuses/closed.png",
                  "name": "Closed",
                  "id": "6",
                  "statusCategory": {
                    "self": "https://goeuro.atlassian.net/rest/api/2/statuscategory/3",
                    "id": 3,
                    "key": "done",
                    "colorName": "green",
                    "name": "Done"
                  }
                },
                "priority": {
                  "self": "https://goeuro.atlassian.net/rest/api/2/priority/6",
                  "iconUrl": "https://goeuro.atlassian.net/images/icons/priority_major.gif",
                  "name": "Normal (P3)",
                  "id": "6"
                },
                "issuetype": {
                  "self": "https://goeuro.atlassian.net/rest/api/2/issuetype/10001",
                  "id": "10001",
                  "description": "Created by JIRA Agile - do not edit or delete. Issue type for a user story.",
                  "iconUrl": "https://goeuro.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10315&avatarType=issuetype",
                  "name": "Story",
                  "subtask": false,
                  "avatarId": 10315
                }
              }
            }
          }
        ],
        "assignee": null,
        "status": {
          "self": "https://goeuro.atlassian.net/rest/api/2/status/1",
          "description": "",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/statuses/open.png",
          "name": "To Do",
          "id": "1",
          "statusCategory": {
            "self": "https://goeuro.atlassian.net/rest/api/2/statuscategory/2",
            "id": 2,
            "key": "new",
            "colorName": "blue-gray",
            "name": "To Do"
          }
        },
        "components": [

        ],
        "customfield_10050": null,
        "customfield_10051": null,
        "customfield_10052": null,
        "customfield_11301": null,
        "customfield_11302": null,
        "customfield_10049": null,
        "customfield_10600": null,
        "customfield_10601": [

        ],
        "customfield_10602": null,
        "customfield_12900": null,
        "aggregatetimeestimate": null,
        "creator": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=annika.rabenstein",
          "name": "annika.rabenstein",
          "key": "annika.rabenstein",
          "accountId": "557058:be63c103-162e-4af8-bddd-2c64bf0bd49b",
          "emailAddress": "annika.rabenstein@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/6a6b9bc6af8fcd4af213af925b3a9061?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Dannika.rabenstein%26avatarId%3D15901%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/6a6b9bc6af8fcd4af213af925b3a9061?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Dannika.rabenstein%26avatarId%3D15901%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/6a6b9bc6af8fcd4af213af925b3a9061?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Dannika.rabenstein%26avatarId%3D15901%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/6a6b9bc6af8fcd4af213af925b3a9061?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Dannika.rabenstein%26avatarId%3D15901%26noRedirect%3Dtrue"
          },
          "displayName": "annika rabenstein",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "subtasks": [

        ],
        "reporter": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=annika.rabenstein",
          "name": "annika.rabenstein",
          "key": "annika.rabenstein",
          "accountId": "557058:be63c103-162e-4af8-bddd-2c64bf0bd49b",
          "emailAddress": "annika.rabenstein@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/6a6b9bc6af8fcd4af213af925b3a9061?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Dannika.rabenstein%26avatarId%3D15901%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/6a6b9bc6af8fcd4af213af925b3a9061?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Dannika.rabenstein%26avatarId%3D15901%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/6a6b9bc6af8fcd4af213af925b3a9061?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Dannika.rabenstein%26avatarId%3D15901%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/6a6b9bc6af8fcd4af213af925b3a9061?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Dannika.rabenstein%26avatarId%3D15901%26noRedirect%3Dtrue"
          },
          "displayName": "annika rabenstein",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "aggregateprogress": {
          "progress": 0,
          "total": 0
        },
        "customfield_12100": "{}",
        "customfield_10200": "1|i04ivj:",
        "customfield_10201": null,
        "customfield_12500": null,
        "customfield_11800": null,
        "progress": {
          "progress": 0,
          "total": 0
        },
        "votes": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1145/votes",
          "votes": 0,
          "hasVoted": false
        },
        "issuetype": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issuetype/10001",
          "id": "10001",
          "description": "Created by JIRA Agile - do not edit or delete. Issue type for a user story.",
          "iconUrl": "https://goeuro.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10315&avatarType=issuetype",
          "name": "Story",
          "subtask": false,
          "avatarId": 10315
        },
        "timespent": null,
        "project": {
          "self": "https://goeuro.atlassian.net/rest/api/2/project/11801",
          "id": "11801",
          "key": "AD",
          "name": "Advertising",
          "avatarUrls": {
            "48x48": "https://goeuro.atlassian.net/secure/projectavatar?pid=11801&avatarId=18802",
            "24x24": "https://goeuro.atlassian.net/secure/projectavatar?size=small&pid=11801&avatarId=18802",
            "16x16": "https://goeuro.atlassian.net/secure/projectavatar?size=xsmall&pid=11801&avatarId=18802",
            "32x32": "https://goeuro.atlassian.net/secure/projectavatar?size=medium&pid=11801&avatarId=18802"
          }
        },
        "aggregatetimespent": null,
        "customfield_10701": null,
        "resolutiondate": null,
        "workratio": -1,
        "watches": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1145/watchers",
          "watchCount": 1,
          "isWatching": false
        },
        "created": "2017-06-19T09:13:45.000+0200",
        "customfield_10020": null,
        "customfield_12200": null,
        "customfield_10021": null,
        "customfield_10024": null,
        "customfield_10300": null,
        "customfield_12600": null,
        "customfield_10026": null,
        "customfield_10016": null,
        "customfield_10017": null,
        "customfield_11501": null,
        "customfield_10018": null,
        "customfield_10019": null,
        "customfield_11902": "{panel:bgColor=#EAECFF}\r\nh3. Issue Summary\r\n* short summary (5 sentences)\r\n* list the duration along with start and end times (include timezone)\r\n* state the impact (e.g. most user requests resulted in 500 errors, at peak 100%)\r\n* close with root cause\r\n\r\nh3. Timeline\r\n* list the timezone\r\n* covers the outage duration\r\n* when outage began\r\n* when staff was notified\r\n* actions, events, ...\r\n* when service was restored\r\n\r\nh3. Root Cause\r\n\r\nh3. Resolution and recovery\r\n* give detailed explanation of actions taken (includes times)\r\n\r\nh3. Corrective and Preventative Measures\r\n(flag) Action items should be created as a tickets and linked to this report\r\n* itemized list of ways to prevent it from happening again\r\n* what can we do better next time?\r\n{panel}",
        "updated": "2017-06-20T12:03:54.000+0200",
        "timeoriginalestimate": null,
        "description": "We want to onboard our customers inapp so they right away have a good experience. \r\nWith a proper onboarding retention can be increased by 70% (appboy numbers 2016)\r\n\r\nThe inapp message should be a 3 slider, the template is attached as well as the design and the images. Design is approved, text as well. \r\n\r\nPls find the slides and illustrations [here|https://drive.google.com/drive/folders/0B5NWxR9NafN0Qm0zM19zaUNPYTg?usp=sharing]\r\n\r\n*Acceptance Criteria*\r\n* HTML template ready coded, links will be implemented by me. ",
        "customfield_11100": null,
        "customfield_10012": null,
        "customfield_10013": null,
        "customfield_10014": null,
        "customfield_11500": {
          "self": "https://goeuro.atlassian.net/rest/api/2/customFieldOption/10801",
          "value": "Experience Improvement",
          "id": "10801"
        },
        "customfield_10015": null,
        "customfield_10005": null,
        "customfield_12701": null,
        "customfield_12700": null,
        "customfield_10007": null,
        "customfield_12703": null,
        "customfield_12702": null,
        "customfield_10008": null,
        "customfield_10801": null,
        "customfield_12705": null,
        "customfield_12704": null,
        "customfield_12706": null,
        "summary": "App Onboarding HTML ",
        "customfield_10001": null,
        "customfield_10002": null,
        "customfield_12300": null,
        "customfield_10003": null,
        "customfield_10400": null,
        "customfield_10004": null,
        "customfield_11600": null,
        "environment": null,
        "duedate": null
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "84802",
      "self": "https://goeuro.atlassian.net/rest/api/2/issue/84802",
      "key": "AD-1140",
      "fields": {
        "fixVersions": [

        ],
        "resolution": null,
        "customfield_12800": null,
        "customfield_12802": null,
        "customfield_12801": null,
        "customfield_12804": null,
        "customfield_12803": null,
        "customfield_12806": null,
        "customfield_10903": null,
        "customfield_12805": null,
        "lastViewed": null,
        "customfield_12000": null,
        "customfield_12400": null,
        "priority": {
          "self": "https://goeuro.atlassian.net/rest/api/2/priority/6",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/priority_major.gif",
          "name": "Normal (P3)",
          "id": "6"
        },
        "customfield_12402": null,
        "customfield_10102": null,
        "labels": [

        ],
        "customfield_12401": null,
        "customfield_11303": null,
        "customfield_11305": null,
        "customfield_11306": null,
        "customfield_11307": null,
        "timeestimate": null,
        "aggregatetimeoriginalestimate": null,
        "customfield_11308": null,
        "versions": [

        ],
        "issuelinks": [

        ],
        "assignee": null,
        "status": {
          "self": "https://goeuro.atlassian.net/rest/api/2/status/1",
          "description": "",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/statuses/open.png",
          "name": "To Do",
          "id": "1",
          "statusCategory": {
            "self": "https://goeuro.atlassian.net/rest/api/2/statuscategory/2",
            "id": 2,
            "key": "new",
            "colorName": "blue-gray",
            "name": "To Do"
          }
        },
        "components": [

        ],
        "customfield_10050": null,
        "customfield_10051": null,
        "customfield_10052": null,
        "customfield_11301": null,
        "customfield_11302": null,
        "customfield_10049": null,
        "customfield_10600": null,
        "customfield_10601": [

        ],
        "customfield_10602": null,
        "customfield_12900": null,
        "aggregatetimeestimate": null,
        "creator": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "subtasks": [

        ],
        "reporter": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "aggregateprogress": {
          "progress": 0,
          "total": 0
        },
        "customfield_12100": "{repository={count=2, dataType=repository}, json={\"cachedValue\":{\"errors\":[],\"summary\":{\"repository\":{\"overall\":{\"count\":2,\"lastUpdated\":\"2017-06-26T12:16:13.000+0200\"},\"byInstanceType\":{\"github\":{\"count\":2,\"name\":\"GitHub\"}}}}},\"isStale\":true}}",
        "customfield_10200": "1|hzuz74:1m0o",
        "customfield_10201": null,
        "customfield_12500": null,
        "customfield_11800": null,
        "progress": {
          "progress": 0,
          "total": 0
        },
        "votes": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1140/votes",
          "votes": 0,
          "hasVoted": false
        },
        "issuetype": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issuetype/10001",
          "id": "10001",
          "description": "Created by JIRA Agile - do not edit or delete. Issue type for a user story.",
          "iconUrl": "https://goeuro.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10315&avatarType=issuetype",
          "name": "Story",
          "subtask": false,
          "avatarId": 10315
        },
        "timespent": null,
        "project": {
          "self": "https://goeuro.atlassian.net/rest/api/2/project/11801",
          "id": "11801",
          "key": "AD",
          "name": "Advertising",
          "avatarUrls": {
            "48x48": "https://goeuro.atlassian.net/secure/projectavatar?pid=11801&avatarId=18802",
            "24x24": "https://goeuro.atlassian.net/secure/projectavatar?size=small&pid=11801&avatarId=18802",
            "16x16": "https://goeuro.atlassian.net/secure/projectavatar?size=xsmall&pid=11801&avatarId=18802",
            "32x32": "https://goeuro.atlassian.net/secure/projectavatar?size=medium&pid=11801&avatarId=18802"
          }
        },
        "aggregatetimespent": null,
        "customfield_10701": null,
        "resolutiondate": null,
        "workratio": -1,
        "watches": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1140/watchers",
          "watchCount": 1,
          "isWatching": true
        },
        "created": "2017-06-15T09:40:50.000+0200",
        "customfield_10020": null,
        "customfield_10021": null,
        "customfield_12200": null,
        "customfield_10024": null,
        "customfield_10300": null,
        "customfield_12600": null,
        "customfield_10026": null,
        "customfield_10016": null,
        "customfield_11501": null,
        "customfield_10017": null,
        "customfield_10018": null,
        "customfield_10019": null,
        "customfield_11902": "{panel:bgColor=#EAECFF}\r\nh3. Issue Summary\r\n* short summary (5 sentences)\r\n* list the duration along with start and end times (include timezone)\r\n* state the impact (e.g. most user requests resulted in 500 errors, at peak 100%)\r\n* close with root cause\r\n\r\nh3. Timeline\r\n* list the timezone\r\n* covers the outage duration\r\n* when outage began\r\n* when staff was notified\r\n* actions, events, ...\r\n* when service was restored\r\n\r\nh3. Root Cause\r\n\r\nh3. Resolution and recovery\r\n* give detailed explanation of actions taken (includes times)\r\n\r\nh3. Corrective and Preventative Measures\r\n(flag) Action items should be created as a tickets and linked to this report\r\n* itemized list of ways to prevent it from happening again\r\n* what can we do better next time?\r\n{panel}",
        "updated": "2017-06-26T17:57:25.000+0200",
        "timeoriginalestimate": null,
        "description": null,
        "customfield_11100": null,
        "customfield_10012": null,
        "customfield_10013": null,
        "customfield_11500": null,
        "customfield_10014": null,
        "customfield_10015": null,
        "customfield_10005": null,
        "customfield_12701": null,
        "customfield_12700": null,
        "customfield_12703": null,
        "customfield_10007": null,
        "customfield_10008": null,
        "customfield_12702": null,
        "customfield_12705": null,
        "customfield_10801": null,
        "customfield_12704": null,
        "customfield_12706": null,
        "summary": "Enable Price Alert for Busses",
        "customfield_10001": null,
        "customfield_10002": null,
        "customfield_12300": null,
        "customfield_10003": null,
        "customfield_10400": null,
        "customfield_10004": null,
        "customfield_11600": null,
        "environment": null,
        "duedate": null
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "83786",
      "self": "https://goeuro.atlassian.net/rest/api/2/issue/83786",
      "key": "AD-1126",
      "fields": {
        "fixVersions": [

        ],
        "resolution": null,
        "customfield_12800": null,
        "customfield_12802": null,
        "customfield_12801": null,
        "customfield_12804": null,
        "customfield_12803": null,
        "customfield_12806": null,
        "customfield_12805": null,
        "customfield_10903": null,
        "lastViewed": null,
        "customfield_12000": null,
        "customfield_12400": null,
        "priority": {
          "self": "https://goeuro.atlassian.net/rest/api/2/priority/6",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/priority_major.gif",
          "name": "Normal (P3)",
          "id": "6"
        },
        "customfield_12402": null,
        "customfield_10102": null,
        "customfield_12401": null,
        "labels": [

        ],
        "customfield_11303": null,
        "customfield_11305": null,
        "customfield_11306": null,
        "timeestimate": null,
        "customfield_11307": null,
        "aggregatetimeoriginalestimate": null,
        "customfield_11308": null,
        "versions": [

        ],
        "issuelinks": [

        ],
        "assignee": null,
        "status": {
          "self": "https://goeuro.atlassian.net/rest/api/2/status/1",
          "description": "",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/statuses/open.png",
          "name": "To Do",
          "id": "1",
          "statusCategory": {
            "self": "https://goeuro.atlassian.net/rest/api/2/statuscategory/2",
            "id": 2,
            "key": "new",
            "colorName": "blue-gray",
            "name": "To Do"
          }
        },
        "components": [

        ],
        "customfield_10050": null,
        "customfield_10051": null,
        "customfield_10052": null,
        "customfield_11301": null,
        "customfield_11302": null,
        "customfield_10049": null,
        "customfield_10600": null,
        "customfield_10601": [

        ],
        "customfield_10602": null,
        "customfield_12900": null,
        "aggregatetimeestimate": null,
        "creator": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=friedrich.politz",
          "name": "friedrich.politz",
          "key": "friedrich.politz",
          "accountId": "557058:bd47c95a-807f-4911-844e-8b16cc158698",
          "emailAddress": "friedrich.politz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/bcd138c43a883d34479bf328423008d5?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Dfriedrich.politz%26avatarId%3D12901%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/bcd138c43a883d34479bf328423008d5?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Dfriedrich.politz%26avatarId%3D12901%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/bcd138c43a883d34479bf328423008d5?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Dfriedrich.politz%26avatarId%3D12901%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/bcd138c43a883d34479bf328423008d5?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Dfriedrich.politz%26avatarId%3D12901%26noRedirect%3Dtrue"
          },
          "displayName": "Friedrich Politz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "subtasks": [

        ],
        "reporter": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=friedrich.politz",
          "name": "friedrich.politz",
          "key": "friedrich.politz",
          "accountId": "557058:bd47c95a-807f-4911-844e-8b16cc158698",
          "emailAddress": "friedrich.politz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/bcd138c43a883d34479bf328423008d5?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Dfriedrich.politz%26avatarId%3D12901%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/bcd138c43a883d34479bf328423008d5?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Dfriedrich.politz%26avatarId%3D12901%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/bcd138c43a883d34479bf328423008d5?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Dfriedrich.politz%26avatarId%3D12901%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/bcd138c43a883d34479bf328423008d5?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Dfriedrich.politz%26avatarId%3D12901%26noRedirect%3Dtrue"
          },
          "displayName": "Friedrich Politz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "aggregateprogress": {
          "progress": 0,
          "total": 0
        },
        "customfield_12100": "{}",
        "customfield_10200": "1|i04en3:",
        "customfield_10201": null,
        "customfield_12500": null,
        "customfield_11800": null,
        "progress": {
          "progress": 0,
          "total": 0
        },
        "votes": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1126/votes",
          "votes": 0,
          "hasVoted": false
        },
        "issuetype": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issuetype/3",
          "id": "3",
          "description": "A task that needs to be done.",
          "iconUrl": "https://goeuro.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10318&avatarType=issuetype",
          "name": "Task",
          "subtask": false,
          "avatarId": 10318
        },
        "timespent": null,
        "project": {
          "self": "https://goeuro.atlassian.net/rest/api/2/project/11801",
          "id": "11801",
          "key": "AD",
          "name": "Advertising",
          "avatarUrls": {
            "48x48": "https://goeuro.atlassian.net/secure/projectavatar?pid=11801&avatarId=18802",
            "24x24": "https://goeuro.atlassian.net/secure/projectavatar?size=small&pid=11801&avatarId=18802",
            "16x16": "https://goeuro.atlassian.net/secure/projectavatar?size=xsmall&pid=11801&avatarId=18802",
            "32x32": "https://goeuro.atlassian.net/secure/projectavatar?size=medium&pid=11801&avatarId=18802"
          }
        },
        "aggregatetimespent": null,
        "customfield_10701": null,
        "resolutiondate": null,
        "workratio": -1,
        "watches": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1126/watchers",
          "watchCount": 1,
          "isWatching": false
        },
        "created": "2017-06-06T15:13:44.000+0200",
        "customfield_10020": null,
        "customfield_12200": null,
        "customfield_10021": null,
        "customfield_10024": null,
        "customfield_12600": null,
        "customfield_10300": null,
        "customfield_10026": null,
        "customfield_10016": null,
        "customfield_10017": null,
        "customfield_10018": null,
        "customfield_10019": null,
        "customfield_11902": "{panel:bgColor=#EAECFF}\r\nh3. Issue Summary\r\n* short summary (5 sentences)\r\n* list the duration along with start and end times (include timezone)\r\n* state the impact (e.g. most user requests resulted in 500 errors, at peak 100%)\r\n* close with root cause\r\n\r\nh3. Timeline\r\n* list the timezone\r\n* covers the outage duration\r\n* when outage began\r\n* when staff was notified\r\n* actions, events, ...\r\n* when service was restored\r\n\r\nh3. Root Cause\r\n\r\nh3. Resolution and recovery\r\n* give detailed explanation of actions taken (includes times)\r\n\r\nh3. Corrective and Preventative Measures\r\n(flag) Action items should be created as a tickets and linked to this report\r\n* itemized list of ways to prevent it from happening again\r\n* what can we do better next time?\r\n{panel}",
        "updated": "2017-06-06T15:13:44.000+0200",
        "timeoriginalestimate": null,
        "description": "Clean up the Viator code on DW. The timeout popup is not needed anymore.",
        "customfield_11100": null,
        "customfield_10012": null,
        "customfield_10013": null,
        "customfield_10014": null,
        "customfield_10015": null,
        "customfield_12701": null,
        "customfield_12700": null,
        "customfield_12703": null,
        "customfield_10007": null,
        "customfield_12702": null,
        "customfield_10008": null,
        "customfield_12705": null,
        "customfield_10801": null,
        "customfield_12704": null,
        "customfield_12706": null,
        "summary": "DW Viator Code Cleanup",
        "customfield_10001": null,
        "customfield_10002": null,
        "customfield_12300": null,
        "customfield_10003": null,
        "customfield_10400": null,
        "customfield_10004": null,
        "customfield_11600": null,
        "environment": null,
        "duedate": null
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "82504",
      "self": "https://goeuro.atlassian.net/rest/api/2/issue/82504",
      "key": "AD-1096",
      "fields": {
        "fixVersions": [

        ],
        "resolution": null,
        "customfield_12800": null,
        "customfield_12802": null,
        "customfield_12801": null,
        "customfield_12804": null,
        "customfield_12803": null,
        "customfield_12806": null,
        "customfield_12805": null,
        "customfield_10903": null,
        "lastViewed": null,
        "customfield_12000": null,
        "priority": {
          "self": "https://goeuro.atlassian.net/rest/api/2/priority/6",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/priority_major.gif",
          "name": "Normal (P3)",
          "id": "6"
        },
        "customfield_12400": null,
        "customfield_12402": null,
        "customfield_10102": null,
        "labels": [

        ],
        "customfield_12401": null,
        "customfield_11303": null,
        "customfield_11305": null,
        "customfield_11306": null,
        "customfield_11307": null,
        "aggregatetimeoriginalestimate": null,
        "timeestimate": null,
        "versions": [

        ],
        "customfield_11308": null,
        "issuelinks": [

        ],
        "assignee": null,
        "status": {
          "self": "https://goeuro.atlassian.net/rest/api/2/status/1",
          "description": "",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/statuses/open.png",
          "name": "To Do",
          "id": "1",
          "statusCategory": {
            "self": "https://goeuro.atlassian.net/rest/api/2/statuscategory/2",
            "id": 2,
            "key": "new",
            "colorName": "blue-gray",
            "name": "To Do"
          }
        },
        "components": [

        ],
        "customfield_10050": null,
        "customfield_10051": null,
        "customfield_10052": null,
        "customfield_11301": null,
        "customfield_11302": null,
        "customfield_10049": null,
        "customfield_10600": null,
        "customfield_10601": [

        ],
        "customfield_10602": null,
        "customfield_12900": null,
        "aggregatetimeestimate": null,
        "creator": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "subtasks": [

        ],
        "reporter": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "aggregateprogress": {
          "progress": 0,
          "total": 0
        },
        "customfield_12100": "{}",
        "customfield_10200": "1|i049ib:",
        "customfield_10201": null,
        "customfield_12500": null,
        "customfield_11800": null,
        "progress": {
          "progress": 0,
          "total": 0
        },
        "votes": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1096/votes",
          "votes": 0,
          "hasVoted": false
        },
        "issuetype": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issuetype/3",
          "id": "3",
          "description": "A task that needs to be done.",
          "iconUrl": "https://goeuro.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10318&avatarType=issuetype",
          "name": "Task",
          "subtask": false,
          "avatarId": 10318
        },
        "timespent": null,
        "project": {
          "self": "https://goeuro.atlassian.net/rest/api/2/project/11801",
          "id": "11801",
          "key": "AD",
          "name": "Advertising",
          "avatarUrls": {
            "48x48": "https://goeuro.atlassian.net/secure/projectavatar?pid=11801&avatarId=18802",
            "24x24": "https://goeuro.atlassian.net/secure/projectavatar?size=small&pid=11801&avatarId=18802",
            "16x16": "https://goeuro.atlassian.net/secure/projectavatar?size=xsmall&pid=11801&avatarId=18802",
            "32x32": "https://goeuro.atlassian.net/secure/projectavatar?size=medium&pid=11801&avatarId=18802"
          }
        },
        "aggregatetimespent": null,
        "customfield_10701": null,
        "resolutiondate": null,
        "workratio": -1,
        "watches": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1096/watchers",
          "watchCount": 1,
          "isWatching": true
        },
        "created": "2017-05-24T12:17:51.000+0200",
        "customfield_10020": null,
        "customfield_10021": null,
        "customfield_12200": null,
        "customfield_10024": null,
        "customfield_10300": null,
        "customfield_12600": null,
        "customfield_10026": null,
        "customfield_10016": null,
        "customfield_10017": null,
        "customfield_10018": null,
        "customfield_10019": null,
        "customfield_11902": "{panel:bgColor=#EAECFF}\r\nh3. Issue Summary\r\n* short summary (5 sentences)\r\n* list the duration along with start and end times (include timezone)\r\n* state the impact (e.g. most user requests resulted in 500 errors, at peak 100%)\r\n* close with root cause\r\n\r\nh3. Timeline\r\n* list the timezone\r\n* covers the outage duration\r\n* when outage began\r\n* when staff was notified\r\n* actions, events, ...\r\n* when service was restored\r\n\r\nh3. Root Cause\r\n\r\nh3. Resolution and recovery\r\n* give detailed explanation of actions taken (includes times)\r\n\r\nh3. Corrective and Preventative Measures\r\n(flag) Action items should be created as a tickets and linked to this report\r\n* itemized list of ways to prevent it from happening again\r\n* what can we do better next time?\r\n{panel}",
        "updated": "2017-06-21T12:09:18.000+0200",
        "timeoriginalestimate": null,
        "description": null,
        "customfield_11100": null,
        "customfield_10012": null,
        "customfield_10013": null,
        "customfield_10014": null,
        "customfield_10015": null,
        "customfield_12701": null,
        "customfield_12700": null,
        "customfield_10007": [
          "com.atlassian.greenhopper.service.sprint.Sprint@1f334f3[id=896,rapidViewId=92,state=CLOSED,name=AD 21/22 ZULU,goal=- Booking MVP\n- CRM Price Alert,startDate=2017-05-24T11:02:07.813+02:00,endDate=2017-05-31T11:02:00.000+02:00,completeDate=2017-06-01T09:31:58.947+02:00,sequence=896]",
          "com.atlassian.greenhopper.service.sprint.Sprint@7ab63b[id=911,rapidViewId=92,state=CLOSED,name=AD 22/23 ALPHA,goal=,startDate=2017-06-01T09:33:54.078+02:00,endDate=2017-06-08T09:33:00.000+02:00,completeDate=2017-06-08T11:49:37.127+02:00,sequence=911]",
          "com.atlassian.greenhopper.service.sprint.Sprint@c6b027[id=913,rapidViewId=92,state=CLOSED,name=AD 23/24 BETA,goal=,startDate=2017-06-08T12:45:12.379+02:00,endDate=2017-06-14T12:45:00.000+02:00,completeDate=2017-06-14T19:04:41.737+02:00,sequence=913]",
          "com.atlassian.greenhopper.service.sprint.Sprint@be9f0d[id=929,rapidViewId=92,state=CLOSED,name=AD 24/25 GAMMA,goal=,startDate=2017-06-14T19:04:05.325+02:00,endDate=2017-06-21T19:04:00.000+02:00,completeDate=2017-06-23T10:35:27.058+02:00,sequence=929]"
        ],
        "customfield_12703": null,
        "customfield_10008": null,
        "customfield_12702": null,
        "customfield_12705": null,
        "customfield_10801": null,
        "customfield_12704": null,
        "customfield_12706": null,
        "summary": "[CRM] Create / check optimizely experiments",
        "customfield_10001": null,
        "customfield_10002": null,
        "customfield_12300": null,
        "customfield_10003": null,
        "customfield_10400": null,
        "customfield_10004": null,
        "customfield_11600": null,
        "environment": null,
        "duedate": null
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "81380",
      "self": "https://goeuro.atlassian.net/rest/api/2/issue/81380",
      "key": "AD-1086",
      "fields": {
        "fixVersions": [

        ],
        "resolution": null,
        "customfield_12800": null,
        "customfield_12802": null,
        "customfield_12801": null,
        "customfield_12804": null,
        "customfield_12803": null,
        "customfield_12806": null,
        "customfield_12805": null,
        "customfield_10903": null,
        "lastViewed": null,
        "customfield_12000": null,
        "priority": {
          "self": "https://goeuro.atlassian.net/rest/api/2/priority/6",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/priority_major.gif",
          "name": "Normal (P3)",
          "id": "6"
        },
        "customfield_12400": null,
        "customfield_12402": null,
        "customfield_10102": null,
        "customfield_12401": null,
        "labels": [

        ],
        "customfield_11303": null,
        "customfield_11305": null,
        "customfield_11306": null,
        "aggregatetimeoriginalestimate": null,
        "timeestimate": null,
        "customfield_11307": null,
        "versions": [

        ],
        "customfield_11308": null,
        "issuelinks": [

        ],
        "assignee": null,
        "status": {
          "self": "https://goeuro.atlassian.net/rest/api/2/status/1",
          "description": "",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/statuses/open.png",
          "name": "To Do",
          "id": "1",
          "statusCategory": {
            "self": "https://goeuro.atlassian.net/rest/api/2/statuscategory/2",
            "id": 2,
            "key": "new",
            "colorName": "blue-gray",
            "name": "To Do"
          }
        },
        "components": [

        ],
        "customfield_10050": null,
        "customfield_10051": null,
        "customfield_10052": null,
        "customfield_11301": null,
        "customfield_11302": null,
        "customfield_10049": null,
        "customfield_10600": null,
        "customfield_10601": [

        ],
        "customfield_10602": null,
        "customfield_12900": null,
        "aggregatetimeestimate": null,
        "creator": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=friedrich.politz",
          "name": "friedrich.politz",
          "key": "friedrich.politz",
          "accountId": "557058:bd47c95a-807f-4911-844e-8b16cc158698",
          "emailAddress": "friedrich.politz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/bcd138c43a883d34479bf328423008d5?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Dfriedrich.politz%26avatarId%3D12901%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/bcd138c43a883d34479bf328423008d5?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Dfriedrich.politz%26avatarId%3D12901%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/bcd138c43a883d34479bf328423008d5?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Dfriedrich.politz%26avatarId%3D12901%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/bcd138c43a883d34479bf328423008d5?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Dfriedrich.politz%26avatarId%3D12901%26noRedirect%3Dtrue"
          },
          "displayName": "Friedrich Politz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "subtasks": [

        ],
        "reporter": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=friedrich.politz",
          "name": "friedrich.politz",
          "key": "friedrich.politz",
          "accountId": "557058:bd47c95a-807f-4911-844e-8b16cc158698",
          "emailAddress": "friedrich.politz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/bcd138c43a883d34479bf328423008d5?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Dfriedrich.politz%26avatarId%3D12901%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/bcd138c43a883d34479bf328423008d5?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Dfriedrich.politz%26avatarId%3D12901%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/bcd138c43a883d34479bf328423008d5?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Dfriedrich.politz%26avatarId%3D12901%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/bcd138c43a883d34479bf328423008d5?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Dfriedrich.politz%26avatarId%3D12901%26noRedirect%3Dtrue"
          },
          "displayName": "Friedrich Politz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "aggregateprogress": {
          "progress": 0,
          "total": 0
        },
        "customfield_12100": "{}",
        "customfield_10200": "1|i044xr:",
        "customfield_10201": null,
        "customfield_12500": null,
        "customfield_11800": null,
        "progress": {
          "progress": 0,
          "total": 0
        },
        "votes": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1086/votes",
          "votes": 0,
          "hasVoted": false
        },
        "issuetype": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issuetype/10000",
          "id": "10000",
          "description": "Created by JIRA Software - do not edit or delete. Issue type for a big user story that needs to be broken down.",
          "iconUrl": "https://goeuro.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10307&avatarType=issuetype",
          "name": "Epic",
          "subtask": false,
          "avatarId": 10307
        },
        "timespent": null,
        "project": {
          "self": "https://goeuro.atlassian.net/rest/api/2/project/11801",
          "id": "11801",
          "key": "AD",
          "name": "Advertising",
          "avatarUrls": {
            "48x48": "https://goeuro.atlassian.net/secure/projectavatar?pid=11801&avatarId=18802",
            "24x24": "https://goeuro.atlassian.net/secure/projectavatar?size=small&pid=11801&avatarId=18802",
            "16x16": "https://goeuro.atlassian.net/secure/projectavatar?size=xsmall&pid=11801&avatarId=18802",
            "32x32": "https://goeuro.atlassian.net/secure/projectavatar?size=medium&pid=11801&avatarId=18802"
          }
        },
        "aggregatetimespent": null,
        "customfield_10701": null,
        "resolutiondate": null,
        "workratio": -1,
        "watches": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1086/watchers",
          "watchCount": 1,
          "isWatching": false
        },
        "created": "2017-05-16T14:42:12.000+0200",
        "customfield_10020": null,
        "customfield_10021": null,
        "customfield_12200": null,
        "customfield_10024": null,
        "customfield_12600": null,
        "customfield_10300": null,
        "customfield_10026": null,
        "customfield_10016": null,
        "customfield_10017": null,
        "customfield_10018": null,
        "customfield_10019": null,
        "customfield_11902": "{panel:bgColor=#EAECFF}\r\nh3. Issue Summary\r\n* short summary (5 sentences)\r\n* list the duration along with start and end times (include timezone)\r\n* state the impact (e.g. most user requests resulted in 500 errors, at peak 100%)\r\n* close with root cause\r\n\r\nh3. Timeline\r\n* list the timezone\r\n* covers the outage duration\r\n* when outage began\r\n* when staff was notified\r\n* actions, events, ...\r\n* when service was restored\r\n\r\nh3. Root Cause\r\n\r\nh3. Resolution and recovery\r\n* give detailed explanation of actions taken (includes times)\r\n\r\nh3. Corrective and Preventative Measures\r\n(flag) Action items should be created as a tickets and linked to this report\r\n* itemized list of ways to prevent it from happening again\r\n* what can we do better next time?\r\n{panel}",
        "updated": "2017-05-17T12:37:19.000+0200",
        "timeoriginalestimate": null,
        "description": null,
        "customfield_10010": {
          "self": "https://goeuro.atlassian.net/rest/api/2/customFieldOption/10001",
          "value": "To Do",
          "id": "10001"
        },
        "customfield_11100": null,
        "customfield_10011": "ghx-label-2",
        "customfield_10012": null,
        "customfield_10013": null,
        "customfield_10014": null,
        "customfield_10015": null,
        "customfield_12701": null,
        "customfield_10005": null,
        "customfield_12700": null,
        "customfield_12703": null,
        "customfield_10007": null,
        "customfield_12702": null,
        "customfield_10008": null,
        "customfield_12705": null,
        "customfield_10801": null,
        "customfield_10009": "Idea Box",
        "customfield_12704": null,
        "customfield_12706": null,
        "summary": "Idea Box",
        "customfield_10001": null,
        "customfield_10002": null,
        "customfield_12300": null,
        "customfield_10003": null,
        "customfield_10400": null,
        "customfield_10004": null,
        "customfield_11600": null,
        "environment": null,
        "duedate": null
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "80300",
      "self": "https://goeuro.atlassian.net/rest/api/2/issue/80300",
      "key": "AD-1065",
      "fields": {
        "fixVersions": [

        ],
        "resolution": null,
        "customfield_12800": null,
        "customfield_12802": null,
        "customfield_12801": null,
        "customfield_12804": null,
        "customfield_12803": null,
        "customfield_12806": null,
        "customfield_10903": null,
        "customfield_12805": null,
        "lastViewed": null,
        "customfield_12000": null,
        "priority": {
          "self": "https://goeuro.atlassian.net/rest/api/2/priority/6",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/priority_major.gif",
          "name": "Normal (P3)",
          "id": "6"
        },
        "customfield_12400": null,
        "customfield_12402": null,
        "customfield_10102": null,
        "customfield_12401": null,
        "labels": [

        ],
        "customfield_11303": null,
        "customfield_11305": null,
        "customfield_11306": null,
        "customfield_11307": null,
        "aggregatetimeoriginalestimate": null,
        "timeestimate": null,
        "customfield_11308": null,
        "versions": [

        ],
        "issuelinks": [

        ],
        "assignee": null,
        "status": {
          "self": "https://goeuro.atlassian.net/rest/api/2/status/1",
          "description": "",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/statuses/open.png",
          "name": "To Do",
          "id": "1",
          "statusCategory": {
            "self": "https://goeuro.atlassian.net/rest/api/2/statuscategory/2",
            "id": 2,
            "key": "new",
            "colorName": "blue-gray",
            "name": "To Do"
          }
        },
        "components": [

        ],
        "customfield_10050": null,
        "customfield_10051": null,
        "customfield_10052": null,
        "customfield_11301": null,
        "customfield_11302": null,
        "customfield_10049": null,
        "customfield_10600": null,
        "customfield_10601": [

        ],
        "customfield_10602": null,
        "customfield_12900": null,
        "aggregatetimeestimate": null,
        "creator": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=milou.post",
          "name": "milou.post",
          "key": "milou.post",
          "accountId": "557058:a61ec27f-df1e-4672-aa19-0815b3e586ef",
          "emailAddress": "milou.post@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FavatarId%3D12823%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26avatarId%3D12823%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26avatarId%3D12823%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26avatarId%3D12823%26noRedirect%3Dtrue"
          },
          "displayName": "Milou Post",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "subtasks": [

        ],
        "reporter": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=milou.post",
          "name": "milou.post",
          "key": "milou.post",
          "accountId": "557058:a61ec27f-df1e-4672-aa19-0815b3e586ef",
          "emailAddress": "milou.post@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FavatarId%3D12823%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26avatarId%3D12823%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26avatarId%3D12823%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26avatarId%3D12823%26noRedirect%3Dtrue"
          },
          "displayName": "Milou Post",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "customfield_12100": "{}",
        "aggregateprogress": {
          "progress": 0,
          "total": 0
        },
        "customfield_10200": "1|i040tt:",
        "customfield_10201": null,
        "customfield_12500": null,
        "customfield_11800": null,
        "progress": {
          "progress": 0,
          "total": 0
        },
        "votes": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1065/votes",
          "votes": 0,
          "hasVoted": false
        },
        "issuetype": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issuetype/10000",
          "id": "10000",
          "description": "Created by JIRA Software - do not edit or delete. Issue type for a big user story that needs to be broken down.",
          "iconUrl": "https://goeuro.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10307&avatarType=issuetype",
          "name": "Epic",
          "subtask": false,
          "avatarId": 10307
        },
        "timespent": null,
        "project": {
          "self": "https://goeuro.atlassian.net/rest/api/2/project/11801",
          "id": "11801",
          "key": "AD",
          "name": "Advertising",
          "avatarUrls": {
            "48x48": "https://goeuro.atlassian.net/secure/projectavatar?pid=11801&avatarId=18802",
            "24x24": "https://goeuro.atlassian.net/secure/projectavatar?size=small&pid=11801&avatarId=18802",
            "16x16": "https://goeuro.atlassian.net/secure/projectavatar?size=xsmall&pid=11801&avatarId=18802",
            "32x32": "https://goeuro.atlassian.net/secure/projectavatar?size=medium&pid=11801&avatarId=18802"
          }
        },
        "aggregatetimespent": null,
        "customfield_10701": null,
        "resolutiondate": null,
        "workratio": -1,
        "watches": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1065/watchers",
          "watchCount": 1,
          "isWatching": false
        },
        "created": "2017-05-09T15:39:36.000+0200",
        "customfield_10020": null,
        "customfield_10021": null,
        "customfield_12200": null,
        "customfield_10024": null,
        "customfield_10300": null,
        "customfield_12600": null,
        "customfield_10026": null,
        "customfield_10016": null,
        "customfield_10017": null,
        "customfield_10018": null,
        "customfield_10019": null,
        "customfield_11902": "{panel:bgColor=#EAECFF}\r\nh3. Issue Summary\r\n* short summary (5 sentences)\r\n* list the duration along with start and end times (include timezone)\r\n* state the impact (e.g. most user requests resulted in 500 errors, at peak 100%)\r\n* close with root cause\r\n\r\nh3. Timeline\r\n* list the timezone\r\n* covers the outage duration\r\n* when outage began\r\n* when staff was notified\r\n* actions, events, ...\r\n* when service was restored\r\n\r\nh3. Root Cause\r\n\r\nh3. Resolution and recovery\r\n* give detailed explanation of actions taken (includes times)\r\n\r\nh3. Corrective and Preventative Measures\r\n(flag) Action items should be created as a tickets and linked to this report\r\n* itemized list of ways to prevent it from happening again\r\n* what can we do better next time?\r\n{panel}",
        "updated": "2017-05-10T15:01:11.000+0200",
        "timeoriginalestimate": null,
        "description": null,
        "customfield_10010": {
          "self": "https://goeuro.atlassian.net/rest/api/2/customFieldOption/10001",
          "value": "To Do",
          "id": "10001"
        },
        "customfield_11100": null,
        "customfield_10011": "ghx-label-7",
        "customfield_10012": null,
        "customfield_10013": null,
        "customfield_10014": null,
        "customfield_10015": null,
        "customfield_12701": null,
        "customfield_10005": null,
        "customfield_12700": null,
        "customfield_10007": null,
        "customfield_12703": null,
        "customfield_12702": null,
        "customfield_10008": null,
        "customfield_10801": null,
        "customfield_10009": "[O4] Support CRM Team to enable progress on a adding more subscribers and bookings coming from CRM campaigns",
        "customfield_12705": null,
        "customfield_12704": null,
        "customfield_12706": null,
        "summary": "Support CRM",
        "customfield_10001": null,
        "customfield_10002": null,
        "customfield_12300": null,
        "customfield_10003": null,
        "customfield_10400": null,
        "customfield_10004": null,
        "customfield_11600": null,
        "environment": null,
        "duedate": null
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "80299",
      "self": "https://goeuro.atlassian.net/rest/api/2/issue/80299",
      "key": "AD-1064",
      "fields": {
        "fixVersions": [

        ],
        "resolution": null,
        "customfield_12800": null,
        "customfield_12802": null,
        "customfield_12801": null,
        "customfield_12804": null,
        "customfield_12803": null,
        "customfield_12806": null,
        "customfield_10903": null,
        "customfield_12805": null,
        "lastViewed": null,
        "customfield_12000": null,
        "priority": {
          "self": "https://goeuro.atlassian.net/rest/api/2/priority/6",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/priority_major.gif",
          "name": "Normal (P3)",
          "id": "6"
        },
        "customfield_12400": null,
        "customfield_12402": null,
        "customfield_10102": null,
        "labels": [

        ],
        "customfield_12401": null,
        "customfield_11303": null,
        "customfield_11305": null,
        "customfield_11306": null,
        "aggregatetimeoriginalestimate": null,
        "timeestimate": null,
        "customfield_11307": null,
        "versions": [

        ],
        "customfield_11308": null,
        "issuelinks": [

        ],
        "assignee": null,
        "status": {
          "self": "https://goeuro.atlassian.net/rest/api/2/status/1",
          "description": "",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/statuses/open.png",
          "name": "To Do",
          "id": "1",
          "statusCategory": {
            "self": "https://goeuro.atlassian.net/rest/api/2/statuscategory/2",
            "id": 2,
            "key": "new",
            "colorName": "blue-gray",
            "name": "To Do"
          }
        },
        "components": [

        ],
        "customfield_10050": null,
        "customfield_10051": null,
        "customfield_10052": null,
        "customfield_11301": null,
        "customfield_11302": null,
        "customfield_10049": null,
        "customfield_10600": null,
        "customfield_10601": [

        ],
        "customfield_12900": null,
        "customfield_10602": null,
        "aggregatetimeestimate": null,
        "creator": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=milou.post",
          "name": "milou.post",
          "key": "milou.post",
          "accountId": "557058:a61ec27f-df1e-4672-aa19-0815b3e586ef",
          "emailAddress": "milou.post@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FavatarId%3D12823%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26avatarId%3D12823%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26avatarId%3D12823%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26avatarId%3D12823%26noRedirect%3Dtrue"
          },
          "displayName": "Milou Post",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "subtasks": [

        ],
        "reporter": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=milou.post",
          "name": "milou.post",
          "key": "milou.post",
          "accountId": "557058:a61ec27f-df1e-4672-aa19-0815b3e586ef",
          "emailAddress": "milou.post@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FavatarId%3D12823%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26avatarId%3D12823%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26avatarId%3D12823%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26avatarId%3D12823%26noRedirect%3Dtrue"
          },
          "displayName": "Milou Post",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "customfield_12100": "{}",
        "aggregateprogress": {
          "progress": 0,
          "total": 0
        },
        "customfield_10200": "1|i040tl:",
        "customfield_10201": null,
        "customfield_12500": null,
        "customfield_11800": null,
        "progress": {
          "progress": 0,
          "total": 0
        },
        "votes": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1064/votes",
          "votes": 0,
          "hasVoted": false
        },
        "issuetype": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issuetype/10000",
          "id": "10000",
          "description": "Created by JIRA Software - do not edit or delete. Issue type for a big user story that needs to be broken down.",
          "iconUrl": "https://goeuro.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10307&avatarType=issuetype",
          "name": "Epic",
          "subtask": false,
          "avatarId": 10307
        },
        "timespent": null,
        "project": {
          "self": "https://goeuro.atlassian.net/rest/api/2/project/11801",
          "id": "11801",
          "key": "AD",
          "name": "Advertising",
          "avatarUrls": {
            "48x48": "https://goeuro.atlassian.net/secure/projectavatar?pid=11801&avatarId=18802",
            "24x24": "https://goeuro.atlassian.net/secure/projectavatar?size=small&pid=11801&avatarId=18802",
            "16x16": "https://goeuro.atlassian.net/secure/projectavatar?size=xsmall&pid=11801&avatarId=18802",
            "32x32": "https://goeuro.atlassian.net/secure/projectavatar?size=medium&pid=11801&avatarId=18802"
          }
        },
        "aggregatetimespent": null,
        "customfield_10701": null,
        "resolutiondate": null,
        "workratio": -1,
        "watches": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1064/watchers",
          "watchCount": 1,
          "isWatching": false
        },
        "created": "2017-05-09T15:39:19.000+0200",
        "customfield_10020": null,
        "customfield_10021": null,
        "customfield_12200": null,
        "customfield_10024": null,
        "customfield_12600": null,
        "customfield_10300": null,
        "customfield_10026": null,
        "customfield_10016": null,
        "customfield_10017": null,
        "customfield_10018": null,
        "customfield_10019": null,
        "customfield_11902": "{panel:bgColor=#EAECFF}\r\nh3. Issue Summary\r\n* short summary (5 sentences)\r\n* list the duration along with start and end times (include timezone)\r\n* state the impact (e.g. most user requests resulted in 500 errors, at peak 100%)\r\n* close with root cause\r\n\r\nh3. Timeline\r\n* list the timezone\r\n* covers the outage duration\r\n* when outage began\r\n* when staff was notified\r\n* actions, events, ...\r\n* when service was restored\r\n\r\nh3. Root Cause\r\n\r\nh3. Resolution and recovery\r\n* give detailed explanation of actions taken (includes times)\r\n\r\nh3. Corrective and Preventative Measures\r\n(flag) Action items should be created as a tickets and linked to this report\r\n* itemized list of ways to prevent it from happening again\r\n* what can we do better next time?\r\n{panel}",
        "updated": "2017-05-09T15:39:19.000+0200",
        "timeoriginalestimate": null,
        "description": null,
        "customfield_10010": {
          "self": "https://goeuro.atlassian.net/rest/api/2/customFieldOption/10001",
          "value": "To Do",
          "id": "10001"
        },
        "customfield_11100": null,
        "customfield_10011": "ghx-label-2",
        "customfield_10012": null,
        "customfield_10013": null,
        "customfield_10014": null,
        "customfield_10015": null,
        "customfield_10005": null,
        "customfield_12701": null,
        "customfield_12700": null,
        "customfield_10007": null,
        "customfield_12703": null,
        "customfield_12702": null,
        "customfield_10008": null,
        "customfield_12705": null,
        "customfield_10009": "[O3] Support Booking Team to enable progress on a basket experience",
        "customfield_10801": null,
        "customfield_12704": null,
        "customfield_12706": null,
        "summary": "insurance basket support ",
        "customfield_10001": null,
        "customfield_10002": null,
        "customfield_12300": null,
        "customfield_10003": null,
        "customfield_10400": null,
        "customfield_10004": null,
        "customfield_11600": null,
        "environment": null,
        "duedate": null
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "80298",
      "self": "https://goeuro.atlassian.net/rest/api/2/issue/80298",
      "key": "AD-1063",
      "fields": {
        "fixVersions": [

        ],
        "resolution": null,
        "customfield_12800": null,
        "customfield_12802": null,
        "customfield_12801": null,
        "customfield_12804": null,
        "customfield_12803": null,
        "customfield_12806": null,
        "customfield_10903": null,
        "customfield_12805": null,
        "lastViewed": null,
        "customfield_12000": null,
        "customfield_12400": null,
        "priority": {
          "self": "https://goeuro.atlassian.net/rest/api/2/priority/6",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/priority_major.gif",
          "name": "Normal (P3)",
          "id": "6"
        },
        "customfield_10102": null,
        "customfield_12402": null,
        "customfield_12401": null,
        "labels": [

        ],
        "customfield_11303": null,
        "customfield_11305": null,
        "customfield_11306": null,
        "aggregatetimeoriginalestimate": null,
        "timeestimate": null,
        "customfield_11307": null,
        "versions": [

        ],
        "customfield_11308": null,
        "issuelinks": [

        ],
        "assignee": null,
        "status": {
          "self": "https://goeuro.atlassian.net/rest/api/2/status/1",
          "description": "",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/statuses/open.png",
          "name": "To Do",
          "id": "1",
          "statusCategory": {
            "self": "https://goeuro.atlassian.net/rest/api/2/statuscategory/2",
            "id": 2,
            "key": "new",
            "colorName": "blue-gray",
            "name": "To Do"
          }
        },
        "components": [

        ],
        "customfield_10050": null,
        "customfield_10051": null,
        "customfield_10052": null,
        "customfield_11301": null,
        "customfield_11302": null,
        "customfield_10049": null,
        "customfield_10600": null,
        "customfield_10601": [

        ],
        "customfield_10602": null,
        "customfield_12900": null,
        "aggregatetimeestimate": null,
        "creator": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=milou.post",
          "name": "milou.post",
          "key": "milou.post",
          "accountId": "557058:a61ec27f-df1e-4672-aa19-0815b3e586ef",
          "emailAddress": "milou.post@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FavatarId%3D12823%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26avatarId%3D12823%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26avatarId%3D12823%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26avatarId%3D12823%26noRedirect%3Dtrue"
          },
          "displayName": "Milou Post",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "subtasks": [

        ],
        "reporter": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=milou.post",
          "name": "milou.post",
          "key": "milou.post",
          "accountId": "557058:a61ec27f-df1e-4672-aa19-0815b3e586ef",
          "emailAddress": "milou.post@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FavatarId%3D12823%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26avatarId%3D12823%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26avatarId%3D12823%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26avatarId%3D12823%26noRedirect%3Dtrue"
          },
          "displayName": "Milou Post",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "aggregateprogress": {
          "progress": 0,
          "total": 0
        },
        "customfield_12100": "{}",
        "customfield_10200": "1|i040td:",
        "customfield_10201": null,
        "customfield_12500": null,
        "customfield_11800": null,
        "progress": {
          "progress": 0,
          "total": 0
        },
        "votes": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1063/votes",
          "votes": 0,
          "hasVoted": false
        },
        "issuetype": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issuetype/10000",
          "id": "10000",
          "description": "Created by JIRA Software - do not edit or delete. Issue type for a big user story that needs to be broken down.",
          "iconUrl": "https://goeuro.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10307&avatarType=issuetype",
          "name": "Epic",
          "subtask": false,
          "avatarId": 10307
        },
        "timespent": null,
        "project": {
          "self": "https://goeuro.atlassian.net/rest/api/2/project/11801",
          "id": "11801",
          "key": "AD",
          "name": "Advertising",
          "avatarUrls": {
            "48x48": "https://goeuro.atlassian.net/secure/projectavatar?pid=11801&avatarId=18802",
            "24x24": "https://goeuro.atlassian.net/secure/projectavatar?size=small&pid=11801&avatarId=18802",
            "16x16": "https://goeuro.atlassian.net/secure/projectavatar?size=xsmall&pid=11801&avatarId=18802",
            "32x32": "https://goeuro.atlassian.net/secure/projectavatar?size=medium&pid=11801&avatarId=18802"
          }
        },
        "aggregatetimespent": null,
        "customfield_10701": null,
        "resolutiondate": null,
        "workratio": -1,
        "watches": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1063/watchers",
          "watchCount": 1,
          "isWatching": false
        },
        "created": "2017-05-09T15:38:29.000+0200",
        "customfield_10020": null,
        "customfield_10021": null,
        "customfield_12200": null,
        "customfield_10024": null,
        "customfield_10300": null,
        "customfield_12600": null,
        "customfield_10026": null,
        "customfield_10016": null,
        "customfield_10017": null,
        "customfield_10018": null,
        "customfield_10019": null,
        "customfield_11902": "{panel:bgColor=#EAECFF}\r\nh3. Issue Summary\r\n* short summary (5 sentences)\r\n* list the duration along with start and end times (include timezone)\r\n* state the impact (e.g. most user requests resulted in 500 errors, at peak 100%)\r\n* close with root cause\r\n\r\nh3. Timeline\r\n* list the timezone\r\n* covers the outage duration\r\n* when outage began\r\n* when staff was notified\r\n* actions, events, ...\r\n* when service was restored\r\n\r\nh3. Root Cause\r\n\r\nh3. Resolution and recovery\r\n* give detailed explanation of actions taken (includes times)\r\n\r\nh3. Corrective and Preventative Measures\r\n(flag) Action items should be created as a tickets and linked to this report\r\n* itemized list of ways to prevent it from happening again\r\n* what can we do better next time?\r\n{panel}",
        "updated": "2017-05-09T15:38:29.000+0200",
        "timeoriginalestimate": null,
        "description": null,
        "customfield_10010": {
          "self": "https://goeuro.atlassian.net/rest/api/2/customFieldOption/10001",
          "value": "To Do",
          "id": "10001"
        },
        "customfield_11100": null,
        "customfield_10011": "ghx-label-1",
        "customfield_10012": null,
        "customfield_10013": null,
        "customfield_10014": null,
        "customfield_10015": null,
        "customfield_12701": null,
        "customfield_10005": null,
        "customfield_12700": null,
        "customfield_10007": null,
        "customfield_12703": null,
        "customfield_10008": null,
        "customfield_12702": null,
        "customfield_12705": null,
        "customfield_10009": "[O2] Establish Search Sponsored Placements and Voucher Up-Sell within the core product",
        "customfield_10801": null,
        "customfield_12704": null,
        "customfield_12706": null,
        "summary": "discovery phase for sponsored partner listings",
        "customfield_10001": null,
        "customfield_10002": null,
        "customfield_12300": null,
        "customfield_10003": null,
        "customfield_10400": null,
        "customfield_10004": null,
        "customfield_11600": null,
        "environment": null,
        "duedate": null
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "80251",
      "self": "https://goeuro.atlassian.net/rest/api/2/issue/80251",
      "key": "AD-1058",
      "fields": {
        "fixVersions": [

        ],
        "resolution": null,
        "customfield_12800": null,
        "customfield_12802": null,
        "customfield_12801": null,
        "customfield_12804": null,
        "customfield_12803": null,
        "customfield_12806": null,
        "customfield_12805": null,
        "customfield_10903": null,
        "lastViewed": null,
        "customfield_12000": null,
        "priority": {
          "self": "https://goeuro.atlassian.net/rest/api/2/priority/6",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/priority_major.gif",
          "name": "Normal (P3)",
          "id": "6"
        },
        "customfield_12400": null,
        "customfield_12402": null,
        "customfield_10102": null,
        "labels": [
          "booking_confirmation_email",
          "pretrip-email"
        ],
        "customfield_12401": null,
        "customfield_11303": null,
        "customfield_11305": null,
        "customfield_11306": null,
        "customfield_11307": null,
        "aggregatetimeoriginalestimate": null,
        "timeestimate": null,
        "customfield_11308": null,
        "versions": [

        ],
        "issuelinks": [

        ],
        "assignee": null,
        "status": {
          "self": "https://goeuro.atlassian.net/rest/api/2/status/1",
          "description": "",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/statuses/open.png",
          "name": "To Do",
          "id": "1",
          "statusCategory": {
            "self": "https://goeuro.atlassian.net/rest/api/2/statuscategory/2",
            "id": 2,
            "key": "new",
            "colorName": "blue-gray",
            "name": "To Do"
          }
        },
        "components": [

        ],
        "customfield_10050": null,
        "customfield_10051": null,
        "customfield_10052": null,
        "customfield_11301": null,
        "customfield_11302": null,
        "customfield_10049": null,
        "customfield_10600": null,
        "customfield_10601": [

        ],
        "customfield_12900": null,
        "customfield_10602": null,
        "aggregatetimeestimate": null,
        "creator": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=milou.post",
          "name": "milou.post",
          "key": "milou.post",
          "accountId": "557058:a61ec27f-df1e-4672-aa19-0815b3e586ef",
          "emailAddress": "milou.post@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FavatarId%3D12823%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26avatarId%3D12823%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26avatarId%3D12823%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26avatarId%3D12823%26noRedirect%3Dtrue"
          },
          "displayName": "Milou Post",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "subtasks": [

        ],
        "reporter": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=milou.post",
          "name": "milou.post",
          "key": "milou.post",
          "accountId": "557058:a61ec27f-df1e-4672-aa19-0815b3e586ef",
          "emailAddress": "milou.post@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FavatarId%3D12823%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26avatarId%3D12823%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26avatarId%3D12823%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26avatarId%3D12823%26noRedirect%3Dtrue"
          },
          "displayName": "Milou Post",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "aggregateprogress": {
          "progress": 0,
          "total": 0
        },
        "customfield_12100": "{}",
        "customfield_10200": "1|i040lh:",
        "customfield_10201": null,
        "customfield_12500": null,
        "customfield_11800": null,
        "progress": {
          "progress": 0,
          "total": 0
        },
        "votes": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1058/votes",
          "votes": 0,
          "hasVoted": false
        },
        "issuetype": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issuetype/10001",
          "id": "10001",
          "description": "Created by JIRA Agile - do not edit or delete. Issue type for a user story.",
          "iconUrl": "https://goeuro.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10315&avatarType=issuetype",
          "name": "Story",
          "subtask": false,
          "avatarId": 10315
        },
        "timespent": null,
        "project": {
          "self": "https://goeuro.atlassian.net/rest/api/2/project/11801",
          "id": "11801",
          "key": "AD",
          "name": "Advertising",
          "avatarUrls": {
            "48x48": "https://goeuro.atlassian.net/secure/projectavatar?pid=11801&avatarId=18802",
            "24x24": "https://goeuro.atlassian.net/secure/projectavatar?size=small&pid=11801&avatarId=18802",
            "16x16": "https://goeuro.atlassian.net/secure/projectavatar?size=xsmall&pid=11801&avatarId=18802",
            "32x32": "https://goeuro.atlassian.net/secure/projectavatar?size=medium&pid=11801&avatarId=18802"
          }
        },
        "aggregatetimespent": null,
        "customfield_10701": null,
        "resolutiondate": null,
        "workratio": -1,
        "watches": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1058/watchers",
          "watchCount": 1,
          "isWatching": false
        },
        "created": "2017-05-09T11:27:26.000+0200",
        "customfield_10020": null,
        "customfield_12200": null,
        "customfield_10021": null,
        "customfield_10024": null,
        "customfield_10300": null,
        "customfield_12600": null,
        "customfield_10026": null,
        "customfield_10016": null,
        "customfield_10017": null,
        "customfield_11501": null,
        "customfield_10018": null,
        "customfield_10019": null,
        "customfield_11902": "{panel:bgColor=#EAECFF}\r\nh3. Issue Summary\r\n* short summary (5 sentences)\r\n* list the duration along with start and end times (include timezone)\r\n* state the impact (e.g. most user requests resulted in 500 errors, at peak 100%)\r\n* close with root cause\r\n\r\nh3. Timeline\r\n* list the timezone\r\n* covers the outage duration\r\n* when outage began\r\n* when staff was notified\r\n* actions, events, ...\r\n* when service was restored\r\n\r\nh3. Root Cause\r\n\r\nh3. Resolution and recovery\r\n* give detailed explanation of actions taken (includes times)\r\n\r\nh3. Corrective and Preventative Measures\r\n(flag) Action items should be created as a tickets and linked to this report\r\n* itemized list of ways to prevent it from happening again\r\n* what can we do better next time?\r\n{panel}",
        "updated": "2017-05-09T11:27:28.000+0200",
        "timeoriginalestimate": null,
        "description": "In order to get a dynamic deeplink for the pre-trip email + booking confirmation email, i want to contact the adsystem. ",
        "customfield_11100": null,
        "customfield_10012": null,
        "customfield_10013": null,
        "customfield_11500": null,
        "customfield_10014": null,
        "customfield_10015": null,
        "customfield_10005": null,
        "customfield_12701": null,
        "customfield_12700": null,
        "customfield_10007": null,
        "customfield_12703": null,
        "customfield_10008": "AD-1041",
        "customfield_12702": null,
        "customfield_12705": null,
        "customfield_10801": null,
        "customfield_12704": null,
        "customfield_12706": null,
        "summary": "pre-trip-email - contact adsystem for dynamic deeplink",
        "customfield_10001": null,
        "customfield_12300": null,
        "customfield_10002": null,
        "customfield_10003": null,
        "customfield_10004": null,
        "customfield_10400": null,
        "customfield_11600": null,
        "environment": null,
        "duedate": null
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "80249",
      "self": "https://goeuro.atlassian.net/rest/api/2/issue/80249",
      "key": "AD-1057",
      "fields": {
        "fixVersions": [

        ],
        "resolution": null,
        "customfield_12800": null,
        "customfield_12802": null,
        "customfield_12801": null,
        "customfield_12804": null,
        "customfield_12803": null,
        "customfield_12806": null,
        "customfield_10903": null,
        "customfield_12805": null,
        "lastViewed": null,
        "customfield_12000": null,
        "customfield_12400": null,
        "priority": {
          "self": "https://goeuro.atlassian.net/rest/api/2/priority/6",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/priority_major.gif",
          "name": "Normal (P3)",
          "id": "6"
        },
        "customfield_10102": null,
        "customfield_12402": null,
        "customfield_12401": null,
        "labels": [
          "airbnb",
          "pretrip-email"
        ],
        "customfield_11303": null,
        "customfield_11305": null,
        "customfield_11306": null,
        "timeestimate": null,
        "aggregatetimeoriginalestimate": null,
        "customfield_11307": null,
        "customfield_11308": null,
        "versions": [

        ],
        "issuelinks": [

        ],
        "assignee": null,
        "status": {
          "self": "https://goeuro.atlassian.net/rest/api/2/status/1",
          "description": "",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/statuses/open.png",
          "name": "To Do",
          "id": "1",
          "statusCategory": {
            "self": "https://goeuro.atlassian.net/rest/api/2/statuscategory/2",
            "id": 2,
            "key": "new",
            "colorName": "blue-gray",
            "name": "To Do"
          }
        },
        "components": [

        ],
        "customfield_10050": null,
        "customfield_10051": null,
        "customfield_10052": null,
        "customfield_11301": null,
        "customfield_11302": null,
        "customfield_10049": null,
        "customfield_10600": null,
        "customfield_10601": [

        ],
        "customfield_10602": null,
        "customfield_12900": null,
        "aggregatetimeestimate": null,
        "creator": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=milou.post",
          "name": "milou.post",
          "key": "milou.post",
          "accountId": "557058:a61ec27f-df1e-4672-aa19-0815b3e586ef",
          "emailAddress": "milou.post@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FavatarId%3D12823%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26avatarId%3D12823%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26avatarId%3D12823%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26avatarId%3D12823%26noRedirect%3Dtrue"
          },
          "displayName": "Milou Post",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "subtasks": [

        ],
        "reporter": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=milou.post",
          "name": "milou.post",
          "key": "milou.post",
          "accountId": "557058:a61ec27f-df1e-4672-aa19-0815b3e586ef",
          "emailAddress": "milou.post@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FavatarId%3D12823%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26avatarId%3D12823%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26avatarId%3D12823%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26avatarId%3D12823%26noRedirect%3Dtrue"
          },
          "displayName": "Milou Post",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "aggregateprogress": {
          "progress": 0,
          "total": 0
        },
        "customfield_12100": "{}",
        "customfield_10200": "1|i040ld:",
        "customfield_10201": null,
        "customfield_12500": null,
        "customfield_11800": null,
        "progress": {
          "progress": 0,
          "total": 0
        },
        "votes": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1057/votes",
          "votes": 0,
          "hasVoted": false
        },
        "issuetype": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issuetype/10001",
          "id": "10001",
          "description": "Created by JIRA Agile - do not edit or delete. Issue type for a user story.",
          "iconUrl": "https://goeuro.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10315&avatarType=issuetype",
          "name": "Story",
          "subtask": false,
          "avatarId": 10315
        },
        "timespent": null,
        "project": {
          "self": "https://goeuro.atlassian.net/rest/api/2/project/11801",
          "id": "11801",
          "key": "AD",
          "name": "Advertising",
          "avatarUrls": {
            "48x48": "https://goeuro.atlassian.net/secure/projectavatar?pid=11801&avatarId=18802",
            "24x24": "https://goeuro.atlassian.net/secure/projectavatar?size=small&pid=11801&avatarId=18802",
            "16x16": "https://goeuro.atlassian.net/secure/projectavatar?size=xsmall&pid=11801&avatarId=18802",
            "32x32": "https://goeuro.atlassian.net/secure/projectavatar?size=medium&pid=11801&avatarId=18802"
          }
        },
        "aggregatetimespent": null,
        "customfield_10701": null,
        "resolutiondate": null,
        "workratio": -1,
        "watches": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1057/watchers",
          "watchCount": 1,
          "isWatching": false
        },
        "created": "2017-05-09T11:23:10.000+0200",
        "customfield_10020": null,
        "customfield_12200": null,
        "customfield_10021": null,
        "customfield_10024": null,
        "customfield_12600": null,
        "customfield_10300": null,
        "customfield_10026": null,
        "customfield_10016": null,
        "customfield_10017": null,
        "customfield_11501": null,
        "customfield_10018": null,
        "customfield_10019": null,
        "customfield_11902": "{panel:bgColor=#EAECFF}\r\nh3. Issue Summary\r\n* short summary (5 sentences)\r\n* list the duration along with start and end times (include timezone)\r\n* state the impact (e.g. most user requests resulted in 500 errors, at peak 100%)\r\n* close with root cause\r\n\r\nh3. Timeline\r\n* list the timezone\r\n* covers the outage duration\r\n* when outage began\r\n* when staff was notified\r\n* actions, events, ...\r\n* when service was restored\r\n\r\nh3. Root Cause\r\n\r\nh3. Resolution and recovery\r\n* give detailed explanation of actions taken (includes times)\r\n\r\nh3. Corrective and Preventative Measures\r\n(flag) Action items should be created as a tickets and linked to this report\r\n* itemized list of ways to prevent it from happening again\r\n* what can we do better next time?\r\n{panel}",
        "updated": "2017-05-09T11:26:04.000+0200",
        "timeoriginalestimate": null,
        "description": "hardcoded picture, dynamic deeplink, redirect",
        "customfield_11100": null,
        "customfield_10012": null,
        "customfield_10013": null,
        "customfield_11500": null,
        "customfield_10014": null,
        "customfield_10015": null,
        "customfield_10005": null,
        "customfield_12701": null,
        "customfield_12700": null,
        "customfield_12703": null,
        "customfield_10007": null,
        "customfield_12702": null,
        "customfield_10008": "AD-1041",
        "customfield_10801": null,
        "customfield_12705": null,
        "customfield_12704": null,
        "customfield_12706": null,
        "summary": "pre-trip-email - Add Airbnb accommodation ad ",
        "customfield_10001": null,
        "customfield_10002": null,
        "customfield_12300": null,
        "customfield_10003": null,
        "customfield_10400": null,
        "customfield_10004": null,
        "customfield_11600": null,
        "environment": null,
        "duedate": null
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "80208",
      "self": "https://goeuro.atlassian.net/rest/api/2/issue/80208",
      "key": "AD-1041",
      "fields": {
        "fixVersions": [

        ],
        "resolution": null,
        "customfield_12800": null,
        "customfield_12802": null,
        "customfield_12801": null,
        "customfield_12804": null,
        "customfield_12803": null,
        "customfield_12806": null,
        "customfield_12805": null,
        "customfield_10903": null,
        "lastViewed": null,
        "customfield_12000": null,
        "customfield_12400": null,
        "priority": {
          "self": "https://goeuro.atlassian.net/rest/api/2/priority/6",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/priority_major.gif",
          "name": "Normal (P3)",
          "id": "6"
        },
        "customfield_12402": null,
        "customfield_10102": null,
        "customfield_12401": null,
        "labels": [

        ],
        "customfield_11303": null,
        "customfield_11305": null,
        "customfield_11306": null,
        "aggregatetimeoriginalestimate": null,
        "timeestimate": null,
        "customfield_11307": null,
        "customfield_11308": null,
        "versions": [

        ],
        "issuelinks": [

        ],
        "assignee": null,
        "status": {
          "self": "https://goeuro.atlassian.net/rest/api/2/status/1",
          "description": "",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/statuses/open.png",
          "name": "To Do",
          "id": "1",
          "statusCategory": {
            "self": "https://goeuro.atlassian.net/rest/api/2/statuscategory/2",
            "id": 2,
            "key": "new",
            "colorName": "blue-gray",
            "name": "To Do"
          }
        },
        "components": [

        ],
        "customfield_10050": null,
        "customfield_10051": null,
        "customfield_10052": null,
        "customfield_11301": null,
        "customfield_11302": null,
        "customfield_10049": null,
        "customfield_10600": null,
        "customfield_10601": [

        ],
        "customfield_10602": null,
        "customfield_12900": null,
        "aggregatetimeestimate": null,
        "creator": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=milou.post",
          "name": "milou.post",
          "key": "milou.post",
          "accountId": "557058:a61ec27f-df1e-4672-aa19-0815b3e586ef",
          "emailAddress": "milou.post@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FavatarId%3D12823%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26avatarId%3D12823%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26avatarId%3D12823%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26avatarId%3D12823%26noRedirect%3Dtrue"
          },
          "displayName": "Milou Post",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "subtasks": [

        ],
        "reporter": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=milou.post",
          "name": "milou.post",
          "key": "milou.post",
          "accountId": "557058:a61ec27f-df1e-4672-aa19-0815b3e586ef",
          "emailAddress": "milou.post@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FavatarId%3D12823%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26avatarId%3D12823%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26avatarId%3D12823%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/3761fc67f4fd7b02220eabc33e13f77d?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26avatarId%3D12823%26noRedirect%3Dtrue"
          },
          "displayName": "Milou Post",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "aggregateprogress": {
          "progress": 0,
          "total": 0
        },
        "customfield_12100": "{}",
        "customfield_10200": "1|i040dl:",
        "customfield_10201": null,
        "customfield_12500": null,
        "customfield_11800": null,
        "progress": {
          "progress": 0,
          "total": 0
        },
        "votes": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1041/votes",
          "votes": 0,
          "hasVoted": false
        },
        "issuetype": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issuetype/10000",
          "id": "10000",
          "description": "Created by JIRA Software - do not edit or delete. Issue type for a big user story that needs to be broken down.",
          "iconUrl": "https://goeuro.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10307&avatarType=issuetype",
          "name": "Epic",
          "subtask": false,
          "avatarId": 10307
        },
        "timespent": null,
        "project": {
          "self": "https://goeuro.atlassian.net/rest/api/2/project/11801",
          "id": "11801",
          "key": "AD",
          "name": "Advertising",
          "avatarUrls": {
            "48x48": "https://goeuro.atlassian.net/secure/projectavatar?pid=11801&avatarId=18802",
            "24x24": "https://goeuro.atlassian.net/secure/projectavatar?size=small&pid=11801&avatarId=18802",
            "16x16": "https://goeuro.atlassian.net/secure/projectavatar?size=xsmall&pid=11801&avatarId=18802",
            "32x32": "https://goeuro.atlassian.net/secure/projectavatar?size=medium&pid=11801&avatarId=18802"
          }
        },
        "aggregatetimespent": null,
        "customfield_10701": null,
        "resolutiondate": null,
        "workratio": -1,
        "watches": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-1041/watchers",
          "watchCount": 1,
          "isWatching": false
        },
        "created": "2017-05-09T09:51:26.000+0200",
        "customfield_10020": null,
        "customfield_10021": null,
        "customfield_12200": null,
        "customfield_10024": null,
        "customfield_12600": null,
        "customfield_10300": null,
        "customfield_10026": null,
        "customfield_10016": null,
        "customfield_10017": null,
        "customfield_10018": null,
        "customfield_10019": null,
        "customfield_11902": "{panel:bgColor=#EAECFF}\r\nh3. Issue Summary\r\n* short summary (5 sentences)\r\n* list the duration along with start and end times (include timezone)\r\n* state the impact (e.g. most user requests resulted in 500 errors, at peak 100%)\r\n* close with root cause\r\n\r\nh3. Timeline\r\n* list the timezone\r\n* covers the outage duration\r\n* when outage began\r\n* when staff was notified\r\n* actions, events, ...\r\n* when service was restored\r\n\r\nh3. Root Cause\r\n\r\nh3. Resolution and recovery\r\n* give detailed explanation of actions taken (includes times)\r\n\r\nh3. Corrective and Preventative Measures\r\n(flag) Action items should be created as a tickets and linked to this report\r\n* itemized list of ways to prevent it from happening again\r\n* what can we do better next time?\r\n{panel}",
        "updated": "2017-05-16T14:46:03.000+0200",
        "timeoriginalestimate": null,
        "description": null,
        "customfield_10010": {
          "self": "https://goeuro.atlassian.net/rest/api/2/customFieldOption/10001",
          "value": "To Do",
          "id": "10001"
        },
        "customfield_11100": null,
        "customfield_10011": "ghx-label-1",
        "customfield_10012": null,
        "customfield_10013": null,
        "customfield_10014": null,
        "customfield_10015": null,
        "customfield_10005": null,
        "customfield_12701": null,
        "customfield_12700": null,
        "customfield_12703": null,
        "customfield_10007": null,
        "customfield_10008": null,
        "customfield_12702": null,
        "customfield_10801": null,
        "customfield_12705": null,
        "customfield_10009": "[O1] Expand offers for the Post Booking Experience",
        "customfield_12704": null,
        "customfield_12706": null,
        "summary": "[O1] Expand offers for the Post Booking Experience",
        "customfield_10001": null,
        "customfield_10002": null,
        "customfield_12300": null,
        "customfield_10003": null,
        "customfield_10400": null,
        "customfield_10004": null,
        "customfield_11600": null,
        "environment": null,
        "duedate": null
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "76663",
      "self": "https://goeuro.atlassian.net/rest/api/2/issue/76663",
      "key": "AD-984",
      "fields": {
        "fixVersions": [

        ],
        "resolution": null,
        "customfield_12800": null,
        "customfield_12802": null,
        "customfield_12801": null,
        "customfield_12804": null,
        "customfield_12803": null,
        "customfield_12806": null,
        "customfield_10903": null,
        "customfield_12805": null,
        "lastViewed": null,
        "customfield_12000": null,
        "priority": {
          "self": "https://goeuro.atlassian.net/rest/api/2/priority/6",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/priority_major.gif",
          "name": "Normal (P3)",
          "id": "6"
        },
        "customfield_12400": null,
        "customfield_10102": null,
        "customfield_12402": null,
        "labels": [

        ],
        "customfield_12401": null,
        "customfield_11303": null,
        "customfield_11305": null,
        "customfield_11306": null,
        "customfield_11307": null,
        "timeestimate": null,
        "aggregatetimeoriginalestimate": null,
        "versions": [

        ],
        "customfield_11308": null,
        "issuelinks": [

        ],
        "assignee": null,
        "status": {
          "self": "https://goeuro.atlassian.net/rest/api/2/status/1",
          "description": "",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/statuses/open.png",
          "name": "To Do",
          "id": "1",
          "statusCategory": {
            "self": "https://goeuro.atlassian.net/rest/api/2/statuscategory/2",
            "id": 2,
            "key": "new",
            "colorName": "blue-gray",
            "name": "To Do"
          }
        },
        "components": [

        ],
        "customfield_10050": null,
        "customfield_10051": null,
        "customfield_10052": null,
        "customfield_11301": null,
        "customfield_11302": null,
        "customfield_10049": null,
        "customfield_10600": null,
        "customfield_10601": [

        ],
        "customfield_12900": null,
        "customfield_10602": null,
        "aggregatetimeestimate": null,
        "creator": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "subtasks": [

        ],
        "reporter": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "aggregateprogress": {
          "progress": 0,
          "total": 0
        },
        "customfield_12100": "{}",
        "customfield_10200": "1|i03jiw:zr",
        "customfield_10201": null,
        "customfield_12500": null,
        "customfield_11800": null,
        "progress": {
          "progress": 0,
          "total": 0
        },
        "votes": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-984/votes",
          "votes": 0,
          "hasVoted": false
        },
        "issuetype": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issuetype/10001",
          "id": "10001",
          "description": "Created by JIRA Agile - do not edit or delete. Issue type for a user story.",
          "iconUrl": "https://goeuro.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10315&avatarType=issuetype",
          "name": "Story",
          "subtask": false,
          "avatarId": 10315
        },
        "timespent": null,
        "project": {
          "self": "https://goeuro.atlassian.net/rest/api/2/project/11801",
          "id": "11801",
          "key": "AD",
          "name": "Advertising",
          "avatarUrls": {
            "48x48": "https://goeuro.atlassian.net/secure/projectavatar?pid=11801&avatarId=18802",
            "24x24": "https://goeuro.atlassian.net/secure/projectavatar?size=small&pid=11801&avatarId=18802",
            "16x16": "https://goeuro.atlassian.net/secure/projectavatar?size=xsmall&pid=11801&avatarId=18802",
            "32x32": "https://goeuro.atlassian.net/secure/projectavatar?size=medium&pid=11801&avatarId=18802"
          }
        },
        "aggregatetimespent": null,
        "customfield_10701": null,
        "resolutiondate": null,
        "workratio": -1,
        "watches": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-984/watchers",
          "watchCount": 1,
          "isWatching": true
        },
        "created": "2017-04-04T16:15:35.000+0200",
        "customfield_10020": null,
        "customfield_12200": null,
        "customfield_10021": null,
        "customfield_10024": null,
        "customfield_10300": null,
        "customfield_12600": null,
        "customfield_10026": null,
        "customfield_10016": null,
        "customfield_10017": null,
        "customfield_11501": null,
        "customfield_10018": null,
        "customfield_10019": null,
        "customfield_11902": "{panel:bgColor=#EAECFF}\r\nh3. Issue Summary\r\n* short summary (5 sentences)\r\n* list the duration along with start and end times (include timezone)\r\n* state the impact (e.g. most user requests resulted in 500 errors, at peak 100%)\r\n* close with root cause\r\n\r\nh3. Timeline\r\n* list the timezone\r\n* covers the outage duration\r\n* when outage began\r\n* when staff was notified\r\n* actions, events, ...\r\n* when service was restored\r\n\r\nh3. Root Cause\r\n\r\nh3. Resolution and recovery\r\n* give detailed explanation of actions taken (includes times)\r\n\r\nh3. Corrective and Preventative Measures\r\n(flag) Action items should be created as a tickets and linked to this report\r\n* itemized list of ways to prevent it from happening again\r\n* what can we do better next time?\r\n{panel}",
        "updated": "2017-04-04T16:16:12.000+0200",
        "timeoriginalestimate": null,
        "description": null,
        "customfield_11100": null,
        "customfield_10012": null,
        "customfield_10013": null,
        "customfield_10014": null,
        "customfield_11500": null,
        "customfield_10015": null,
        "customfield_12701": null,
        "customfield_10005": null,
        "customfield_12700": null,
        "customfield_10007": null,
        "customfield_12703": null,
        "customfield_12702": null,
        "customfield_10008": "AD-774",
        "customfield_10801": null,
        "customfield_12705": null,
        "customfield_12704": null,
        "customfield_12706": null,
        "summary": "Create a city consumer which gets city from Partner-Pub-Sub",
        "customfield_10001": null,
        "customfield_12300": null,
        "customfield_10002": null,
        "customfield_10003": null,
        "customfield_10004": null,
        "customfield_10400": null,
        "customfield_11600": null,
        "environment": null,
        "duedate": null
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "76662",
      "self": "https://goeuro.atlassian.net/rest/api/2/issue/76662",
      "key": "AD-983",
      "fields": {
        "fixVersions": [

        ],
        "resolution": null,
        "customfield_12800": null,
        "customfield_12802": null,
        "customfield_12801": null,
        "customfield_12804": null,
        "customfield_12803": null,
        "customfield_12806": null,
        "customfield_12805": null,
        "customfield_10903": null,
        "lastViewed": null,
        "customfield_12000": null,
        "priority": {
          "self": "https://goeuro.atlassian.net/rest/api/2/priority/6",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/priority_major.gif",
          "name": "Normal (P3)",
          "id": "6"
        },
        "customfield_12400": null,
        "customfield_12402": null,
        "customfield_10102": null,
        "labels": [

        ],
        "customfield_12401": null,
        "customfield_11303": null,
        "customfield_11305": null,
        "customfield_11306": null,
        "aggregatetimeoriginalestimate": null,
        "customfield_11307": null,
        "timeestimate": null,
        "versions": [

        ],
        "customfield_11308": null,
        "issuelinks": [

        ],
        "assignee": null,
        "status": {
          "self": "https://goeuro.atlassian.net/rest/api/2/status/1",
          "description": "",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/statuses/open.png",
          "name": "To Do",
          "id": "1",
          "statusCategory": {
            "self": "https://goeuro.atlassian.net/rest/api/2/statuscategory/2",
            "id": 2,
            "key": "new",
            "colorName": "blue-gray",
            "name": "To Do"
          }
        },
        "components": [

        ],
        "customfield_10050": null,
        "customfield_10051": null,
        "customfield_10052": null,
        "customfield_11301": null,
        "customfield_11302": null,
        "customfield_10049": null,
        "customfield_10600": null,
        "customfield_10601": [

        ],
        "customfield_10602": null,
        "customfield_12900": null,
        "aggregatetimeestimate": null,
        "creator": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "subtasks": [

        ],
        "reporter": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "customfield_12100": "{}",
        "aggregateprogress": {
          "progress": 0,
          "total": 0
        },
        "customfield_10200": "1|i03jiw:zi",
        "customfield_10201": null,
        "customfield_12500": null,
        "customfield_11800": null,
        "progress": {
          "progress": 0,
          "total": 0
        },
        "votes": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-983/votes",
          "votes": 0,
          "hasVoted": false
        },
        "issuetype": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issuetype/10001",
          "id": "10001",
          "description": "Created by JIRA Agile - do not edit or delete. Issue type for a user story.",
          "iconUrl": "https://goeuro.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10315&avatarType=issuetype",
          "name": "Story",
          "subtask": false,
          "avatarId": 10315
        },
        "timespent": null,
        "project": {
          "self": "https://goeuro.atlassian.net/rest/api/2/project/11801",
          "id": "11801",
          "key": "AD",
          "name": "Advertising",
          "avatarUrls": {
            "48x48": "https://goeuro.atlassian.net/secure/projectavatar?pid=11801&avatarId=18802",
            "24x24": "https://goeuro.atlassian.net/secure/projectavatar?size=small&pid=11801&avatarId=18802",
            "16x16": "https://goeuro.atlassian.net/secure/projectavatar?size=xsmall&pid=11801&avatarId=18802",
            "32x32": "https://goeuro.atlassian.net/secure/projectavatar?size=medium&pid=11801&avatarId=18802"
          }
        },
        "aggregatetimespent": null,
        "customfield_10701": null,
        "resolutiondate": null,
        "workratio": -1,
        "watches": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-983/watchers",
          "watchCount": 1,
          "isWatching": true
        },
        "created": "2017-04-04T16:15:01.000+0200",
        "customfield_10020": null,
        "customfield_12200": null,
        "customfield_10021": null,
        "customfield_10024": null,
        "customfield_10300": null,
        "customfield_12600": null,
        "customfield_10026": null,
        "customfield_10016": null,
        "customfield_10017": null,
        "customfield_11501": null,
        "customfield_10018": null,
        "customfield_10019": null,
        "customfield_11902": "{panel:bgColor=#EAECFF}\r\nh3. Issue Summary\r\n* short summary (5 sentences)\r\n* list the duration along with start and end times (include timezone)\r\n* state the impact (e.g. most user requests resulted in 500 errors, at peak 100%)\r\n* close with root cause\r\n\r\nh3. Timeline\r\n* list the timezone\r\n* covers the outage duration\r\n* when outage began\r\n* when staff was notified\r\n* actions, events, ...\r\n* when service was restored\r\n\r\nh3. Root Cause\r\n\r\nh3. Resolution and recovery\r\n* give detailed explanation of actions taken (includes times)\r\n\r\nh3. Corrective and Preventative Measures\r\n(flag) Action items should be created as a tickets and linked to this report\r\n* itemized list of ways to prevent it from happening again\r\n* what can we do better next time?\r\n{panel}",
        "updated": "2017-04-04T16:16:12.000+0200",
        "timeoriginalestimate": null,
        "description": null,
        "customfield_11100": null,
        "customfield_10012": null,
        "customfield_10013": null,
        "customfield_11500": null,
        "customfield_10014": null,
        "customfield_10015": null,
        "customfield_12701": null,
        "customfield_10005": null,
        "customfield_12700": null,
        "customfield_10007": null,
        "customfield_12703": null,
        "customfield_10008": "AD-774",
        "customfield_12702": null,
        "customfield_12705": null,
        "customfield_10801": null,
        "customfield_12704": null,
        "customfield_12706": null,
        "summary": "Create endpoint to populate the queue in Partner-Pub-Sub",
        "customfield_10001": null,
        "customfield_10002": null,
        "customfield_12300": null,
        "customfield_10003": null,
        "customfield_10004": null,
        "customfield_10400": null,
        "customfield_11600": null,
        "environment": null,
        "duedate": null
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "76661",
      "self": "https://goeuro.atlassian.net/rest/api/2/issue/76661",
      "key": "AD-982",
      "fields": {
        "fixVersions": [

        ],
        "resolution": null,
        "customfield_12800": null,
        "customfield_12802": null,
        "customfield_12801": null,
        "customfield_12804": null,
        "customfield_12803": null,
        "customfield_12806": null,
        "customfield_12805": null,
        "customfield_10903": null,
        "lastViewed": null,
        "customfield_12000": null,
        "priority": {
          "self": "https://goeuro.atlassian.net/rest/api/2/priority/6",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/priority_major.gif",
          "name": "Normal (P3)",
          "id": "6"
        },
        "customfield_12400": null,
        "customfield_10102": null,
        "customfield_12402": null,
        "labels": [

        ],
        "customfield_12401": null,
        "customfield_11303": null,
        "customfield_11305": null,
        "customfield_11306": null,
        "timeestimate": null,
        "aggregatetimeoriginalestimate": null,
        "customfield_11307": null,
        "versions": [

        ],
        "customfield_11308": null,
        "issuelinks": [

        ],
        "assignee": null,
        "status": {
          "self": "https://goeuro.atlassian.net/rest/api/2/status/1",
          "description": "",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/statuses/open.png",
          "name": "To Do",
          "id": "1",
          "statusCategory": {
            "self": "https://goeuro.atlassian.net/rest/api/2/statuscategory/2",
            "id": 2,
            "key": "new",
            "colorName": "blue-gray",
            "name": "To Do"
          }
        },
        "components": [

        ],
        "customfield_10050": null,
        "customfield_10051": null,
        "customfield_10052": null,
        "customfield_11301": null,
        "customfield_11302": null,
        "customfield_10049": null,
        "customfield_10600": null,
        "customfield_10601": [

        ],
        "customfield_10602": null,
        "customfield_12900": null,
        "aggregatetimeestimate": null,
        "creator": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "subtasks": [

        ],
        "reporter": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "customfield_12100": "{}",
        "aggregateprogress": {
          "progress": 0,
          "total": 0
        },
        "customfield_10200": "1|i03jiw:z",
        "customfield_10201": null,
        "customfield_12500": null,
        "customfield_11800": null,
        "progress": {
          "progress": 0,
          "total": 0
        },
        "votes": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-982/votes",
          "votes": 0,
          "hasVoted": false
        },
        "issuetype": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issuetype/10001",
          "id": "10001",
          "description": "Created by JIRA Agile - do not edit or delete. Issue type for a user story.",
          "iconUrl": "https://goeuro.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10315&avatarType=issuetype",
          "name": "Story",
          "subtask": false,
          "avatarId": 10315
        },
        "timespent": null,
        "project": {
          "self": "https://goeuro.atlassian.net/rest/api/2/project/11801",
          "id": "11801",
          "key": "AD",
          "name": "Advertising",
          "avatarUrls": {
            "48x48": "https://goeuro.atlassian.net/secure/projectavatar?pid=11801&avatarId=18802",
            "24x24": "https://goeuro.atlassian.net/secure/projectavatar?size=small&pid=11801&avatarId=18802",
            "16x16": "https://goeuro.atlassian.net/secure/projectavatar?size=xsmall&pid=11801&avatarId=18802",
            "32x32": "https://goeuro.atlassian.net/secure/projectavatar?size=medium&pid=11801&avatarId=18802"
          }
        },
        "aggregatetimespent": null,
        "customfield_10701": null,
        "resolutiondate": null,
        "workratio": -1,
        "watches": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-982/watchers",
          "watchCount": 1,
          "isWatching": true
        },
        "created": "2017-04-04T16:14:13.000+0200",
        "customfield_10020": null,
        "customfield_10021": null,
        "customfield_12200": null,
        "customfield_10024": null,
        "customfield_12600": null,
        "customfield_10300": null,
        "customfield_10026": null,
        "customfield_10016": null,
        "customfield_10017": null,
        "customfield_11501": null,
        "customfield_10018": null,
        "customfield_10019": null,
        "customfield_11902": "{panel:bgColor=#EAECFF}\r\nh3. Issue Summary\r\n* short summary (5 sentences)\r\n* list the duration along with start and end times (include timezone)\r\n* state the impact (e.g. most user requests resulted in 500 errors, at peak 100%)\r\n* close with root cause\r\n\r\nh3. Timeline\r\n* list the timezone\r\n* covers the outage duration\r\n* when outage began\r\n* when staff was notified\r\n* actions, events, ...\r\n* when service was restored\r\n\r\nh3. Root Cause\r\n\r\nh3. Resolution and recovery\r\n* give detailed explanation of actions taken (includes times)\r\n\r\nh3. Corrective and Preventative Measures\r\n(flag) Action items should be created as a tickets and linked to this report\r\n* itemized list of ways to prevent it from happening again\r\n* what can we do better next time?\r\n{panel}",
        "updated": "2017-04-04T16:16:11.000+0200",
        "timeoriginalestimate": null,
        "description": null,
        "customfield_11100": null,
        "customfield_10012": null,
        "customfield_10013": null,
        "customfield_10014": null,
        "customfield_11500": null,
        "customfield_10015": null,
        "customfield_10005": null,
        "customfield_12701": null,
        "customfield_12700": null,
        "customfield_10007": null,
        "customfield_12703": null,
        "customfield_12702": null,
        "customfield_10008": "AD-774",
        "customfield_10801": null,
        "customfield_12705": null,
        "customfield_12704": null,
        "customfield_12706": null,
        "summary": "Implement Partner-API internal cache",
        "customfield_10001": null,
        "customfield_10002": null,
        "customfield_12300": null,
        "customfield_10003": null,
        "customfield_10004": null,
        "customfield_10400": null,
        "customfield_11600": null,
        "environment": null,
        "duedate": null
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "76659",
      "self": "https://goeuro.atlassian.net/rest/api/2/issue/76659",
      "key": "AD-981",
      "fields": {
        "fixVersions": [

        ],
        "resolution": null,
        "customfield_12800": null,
        "customfield_12802": null,
        "customfield_12801": null,
        "customfield_12804": null,
        "customfield_12803": null,
        "customfield_12806": null,
        "customfield_12805": null,
        "customfield_10903": null,
        "lastViewed": null,
        "customfield_12000": null,
        "priority": {
          "self": "https://goeuro.atlassian.net/rest/api/2/priority/6",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/priority_major.gif",
          "name": "Normal (P3)",
          "id": "6"
        },
        "customfield_12400": null,
        "customfield_10102": null,
        "customfield_12402": null,
        "customfield_12401": null,
        "labels": [

        ],
        "customfield_11303": null,
        "customfield_11305": null,
        "customfield_11306": null,
        "aggregatetimeoriginalestimate": null,
        "timeestimate": null,
        "customfield_11307": null,
        "versions": [

        ],
        "customfield_11308": null,
        "issuelinks": [

        ],
        "assignee": null,
        "status": {
          "self": "https://goeuro.atlassian.net/rest/api/2/status/1",
          "description": "",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/statuses/open.png",
          "name": "To Do",
          "id": "1",
          "statusCategory": {
            "self": "https://goeuro.atlassian.net/rest/api/2/statuscategory/2",
            "id": 2,
            "key": "new",
            "colorName": "blue-gray",
            "name": "To Do"
          }
        },
        "components": [

        ],
        "customfield_10050": null,
        "customfield_10051": null,
        "customfield_10052": null,
        "customfield_11301": null,
        "customfield_11302": null,
        "customfield_10049": null,
        "customfield_10600": null,
        "customfield_10601": [

        ],
        "customfield_10602": null,
        "customfield_12900": null,
        "aggregatetimeestimate": null,
        "creator": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "subtasks": [

        ],
        "reporter": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "customfield_12100": "{}",
        "aggregateprogress": {
          "progress": 0,
          "total": 0
        },
        "customfield_10200": "1|i03jiw:y",
        "customfield_10201": null,
        "customfield_12500": null,
        "customfield_11800": null,
        "progress": {
          "progress": 0,
          "total": 0
        },
        "votes": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-981/votes",
          "votes": 0,
          "hasVoted": false
        },
        "issuetype": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issuetype/10001",
          "id": "10001",
          "description": "Created by JIRA Agile - do not edit or delete. Issue type for a user story.",
          "iconUrl": "https://goeuro.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10315&avatarType=issuetype",
          "name": "Story",
          "subtask": false,
          "avatarId": 10315
        },
        "timespent": null,
        "project": {
          "self": "https://goeuro.atlassian.net/rest/api/2/project/11801",
          "id": "11801",
          "key": "AD",
          "name": "Advertising",
          "avatarUrls": {
            "48x48": "https://goeuro.atlassian.net/secure/projectavatar?pid=11801&avatarId=18802",
            "24x24": "https://goeuro.atlassian.net/secure/projectavatar?size=small&pid=11801&avatarId=18802",
            "16x16": "https://goeuro.atlassian.net/secure/projectavatar?size=xsmall&pid=11801&avatarId=18802",
            "32x32": "https://goeuro.atlassian.net/secure/projectavatar?size=medium&pid=11801&avatarId=18802"
          }
        },
        "aggregatetimespent": null,
        "customfield_10701": null,
        "resolutiondate": null,
        "workratio": -1,
        "watches": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-981/watchers",
          "watchCount": 1,
          "isWatching": true
        },
        "created": "2017-04-04T16:13:22.000+0200",
        "customfield_10020": null,
        "customfield_10021": null,
        "customfield_12200": null,
        "customfield_10024": null,
        "customfield_12600": null,
        "customfield_10300": null,
        "customfield_10026": null,
        "customfield_10016": null,
        "customfield_10017": null,
        "customfield_11501": null,
        "customfield_10018": null,
        "customfield_10019": null,
        "customfield_11902": "{panel:bgColor=#EAECFF}\r\nh3. Issue Summary\r\n* short summary (5 sentences)\r\n* list the duration along with start and end times (include timezone)\r\n* state the impact (e.g. most user requests resulted in 500 errors, at peak 100%)\r\n* close with root cause\r\n\r\nh3. Timeline\r\n* list the timezone\r\n* covers the outage duration\r\n* when outage began\r\n* when staff was notified\r\n* actions, events, ...\r\n* when service was restored\r\n\r\nh3. Root Cause\r\n\r\nh3. Resolution and recovery\r\n* give detailed explanation of actions taken (includes times)\r\n\r\nh3. Corrective and Preventative Measures\r\n(flag) Action items should be created as a tickets and linked to this report\r\n* itemized list of ways to prevent it from happening again\r\n* what can we do better next time?\r\n{panel}",
        "updated": "2017-04-04T16:16:11.000+0200",
        "timeoriginalestimate": null,
        "description": null,
        "customfield_11100": null,
        "customfield_10012": null,
        "customfield_10013": null,
        "customfield_11500": null,
        "customfield_10014": null,
        "customfield_10015": null,
        "customfield_10005": null,
        "customfield_12701": null,
        "customfield_12700": null,
        "customfield_12703": null,
        "customfield_10007": null,
        "customfield_12702": null,
        "customfield_10008": "AD-774",
        "customfield_12705": null,
        "customfield_10801": null,
        "customfield_12704": null,
        "customfield_12706": null,
        "summary": "Call airbnb api from Partner-API",
        "customfield_10001": null,
        "customfield_10002": null,
        "customfield_12300": null,
        "customfield_10003": null,
        "customfield_10004": null,
        "customfield_10400": null,
        "customfield_11600": null,
        "environment": null,
        "duedate": null
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "76657",
      "self": "https://goeuro.atlassian.net/rest/api/2/issue/76657",
      "key": "AD-979",
      "fields": {
        "fixVersions": [

        ],
        "resolution": null,
        "customfield_12800": null,
        "customfield_12802": null,
        "customfield_12801": null,
        "customfield_12804": null,
        "customfield_12803": null,
        "customfield_12806": null,
        "customfield_10903": null,
        "customfield_12805": null,
        "lastViewed": null,
        "customfield_12000": null,
        "customfield_12400": null,
        "priority": {
          "self": "https://goeuro.atlassian.net/rest/api/2/priority/6",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/priority_major.gif",
          "name": "Normal (P3)",
          "id": "6"
        },
        "customfield_12402": null,
        "customfield_10102": null,
        "customfield_12401": null,
        "labels": [

        ],
        "customfield_11303": null,
        "customfield_11305": null,
        "customfield_11306": null,
        "customfield_11307": null,
        "aggregatetimeoriginalestimate": null,
        "timeestimate": null,
        "customfield_11308": null,
        "versions": [

        ],
        "issuelinks": [

        ],
        "assignee": null,
        "status": {
          "self": "https://goeuro.atlassian.net/rest/api/2/status/1",
          "description": "",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/statuses/open.png",
          "name": "To Do",
          "id": "1",
          "statusCategory": {
            "self": "https://goeuro.atlassian.net/rest/api/2/statuscategory/2",
            "id": 2,
            "key": "new",
            "colorName": "blue-gray",
            "name": "To Do"
          }
        },
        "components": [

        ],
        "customfield_10050": null,
        "customfield_10051": null,
        "customfield_10052": null,
        "customfield_11301": null,
        "customfield_11302": null,
        "customfield_10049": null,
        "customfield_10600": null,
        "customfield_10601": [

        ],
        "customfield_12900": null,
        "customfield_10602": null,
        "aggregatetimeestimate": null,
        "creator": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "subtasks": [

        ],
        "reporter": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "aggregateprogress": {
          "progress": 0,
          "total": 0
        },
        "customfield_12100": "{}",
        "customfield_10200": "1|i03jiw:v",
        "customfield_10201": null,
        "customfield_12500": null,
        "customfield_11800": null,
        "progress": {
          "progress": 0,
          "total": 0
        },
        "votes": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-979/votes",
          "votes": 0,
          "hasVoted": false
        },
        "issuetype": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issuetype/10001",
          "id": "10001",
          "description": "Created by JIRA Agile - do not edit or delete. Issue type for a user story.",
          "iconUrl": "https://goeuro.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10315&avatarType=issuetype",
          "name": "Story",
          "subtask": false,
          "avatarId": 10315
        },
        "timespent": null,
        "project": {
          "self": "https://goeuro.atlassian.net/rest/api/2/project/11801",
          "id": "11801",
          "key": "AD",
          "name": "Advertising",
          "avatarUrls": {
            "48x48": "https://goeuro.atlassian.net/secure/projectavatar?pid=11801&avatarId=18802",
            "24x24": "https://goeuro.atlassian.net/secure/projectavatar?size=small&pid=11801&avatarId=18802",
            "16x16": "https://goeuro.atlassian.net/secure/projectavatar?size=xsmall&pid=11801&avatarId=18802",
            "32x32": "https://goeuro.atlassian.net/secure/projectavatar?size=medium&pid=11801&avatarId=18802"
          }
        },
        "aggregatetimespent": null,
        "customfield_10701": null,
        "resolutiondate": null,
        "workratio": -1,
        "watches": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-979/watchers",
          "watchCount": 1,
          "isWatching": true
        },
        "created": "2017-04-04T16:12:36.000+0200",
        "customfield_10020": null,
        "customfield_10021": null,
        "customfield_12200": null,
        "customfield_10024": null,
        "customfield_12600": null,
        "customfield_10300": null,
        "customfield_10026": null,
        "customfield_10016": null,
        "customfield_11501": null,
        "customfield_10017": null,
        "customfield_10018": null,
        "customfield_10019": null,
        "customfield_11902": "{panel:bgColor=#EAECFF}\r\nh3. Issue Summary\r\n* short summary (5 sentences)\r\n* list the duration along with start and end times (include timezone)\r\n* state the impact (e.g. most user requests resulted in 500 errors, at peak 100%)\r\n* close with root cause\r\n\r\nh3. Timeline\r\n* list the timezone\r\n* covers the outage duration\r\n* when outage began\r\n* when staff was notified\r\n* actions, events, ...\r\n* when service was restored\r\n\r\nh3. Root Cause\r\n\r\nh3. Resolution and recovery\r\n* give detailed explanation of actions taken (includes times)\r\n\r\nh3. Corrective and Preventative Measures\r\n(flag) Action items should be created as a tickets and linked to this report\r\n* itemized list of ways to prevent it from happening again\r\n* what can we do better next time?\r\n{panel}",
        "updated": "2017-04-04T16:16:11.000+0200",
        "timeoriginalestimate": null,
        "description": null,
        "customfield_11100": null,
        "customfield_10012": null,
        "customfield_10013": null,
        "customfield_11500": null,
        "customfield_10014": null,
        "customfield_10015": null,
        "customfield_10005": null,
        "customfield_12701": null,
        "customfield_12700": null,
        "customfield_10007": null,
        "customfield_12703": null,
        "customfield_10008": "AD-774",
        "customfield_12702": null,
        "customfield_12705": null,
        "customfield_10801": null,
        "customfield_12704": null,
        "customfield_12706": null,
        "summary": "City map for airbnb in the ad system",
        "customfield_10001": null,
        "customfield_10002": null,
        "customfield_12300": null,
        "customfield_10003": null,
        "customfield_10004": null,
        "customfield_10400": null,
        "customfield_11600": null,
        "environment": null,
        "duedate": null
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "76632",
      "self": "https://goeuro.atlassian.net/rest/api/2/issue/76632",
      "key": "AD-974",
      "fields": {
        "fixVersions": [

        ],
        "resolution": null,
        "customfield_12800": null,
        "customfield_12802": null,
        "customfield_12801": null,
        "customfield_12804": null,
        "customfield_12803": null,
        "customfield_12806": null,
        "customfield_12805": null,
        "customfield_10903": null,
        "lastViewed": null,
        "customfield_12000": null,
        "customfield_12400": null,
        "priority": {
          "self": "https://goeuro.atlassian.net/rest/api/2/priority/6",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/priority_major.gif",
          "name": "Normal (P3)",
          "id": "6"
        },
        "customfield_10102": null,
        "customfield_12402": null,
        "labels": [

        ],
        "customfield_12401": null,
        "customfield_11303": null,
        "customfield_11305": null,
        "customfield_11306": null,
        "customfield_11307": null,
        "timeestimate": null,
        "aggregatetimeoriginalestimate": null,
        "versions": [

        ],
        "customfield_11308": null,
        "issuelinks": [

        ],
        "assignee": null,
        "status": {
          "self": "https://goeuro.atlassian.net/rest/api/2/status/1",
          "description": "",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/statuses/open.png",
          "name": "To Do",
          "id": "1",
          "statusCategory": {
            "self": "https://goeuro.atlassian.net/rest/api/2/statuscategory/2",
            "id": 2,
            "key": "new",
            "colorName": "blue-gray",
            "name": "To Do"
          }
        },
        "components": [

        ],
        "customfield_10050": null,
        "customfield_10051": null,
        "customfield_10052": null,
        "customfield_11301": null,
        "customfield_11302": null,
        "customfield_10049": null,
        "customfield_10600": null,
        "customfield_10601": [

        ],
        "customfield_12900": null,
        "customfield_10602": null,
        "aggregatetimeestimate": null,
        "creator": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "subtasks": [

        ],
        "reporter": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "customfield_12100": "{}",
        "aggregateprogress": {
          "progress": 0,
          "total": 0
        },
        "customfield_10200": "1|i03jit:",
        "customfield_10201": null,
        "customfield_12500": null,
        "customfield_11800": null,
        "progress": {
          "progress": 0,
          "total": 0
        },
        "votes": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-974/votes",
          "votes": 0,
          "hasVoted": false
        },
        "issuetype": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issuetype/3",
          "id": "3",
          "description": "A task that needs to be done.",
          "iconUrl": "https://goeuro.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10318&avatarType=issuetype",
          "name": "Task",
          "subtask": false,
          "avatarId": 10318
        },
        "timespent": null,
        "project": {
          "self": "https://goeuro.atlassian.net/rest/api/2/project/11801",
          "id": "11801",
          "key": "AD",
          "name": "Advertising",
          "avatarUrls": {
            "48x48": "https://goeuro.atlassian.net/secure/projectavatar?pid=11801&avatarId=18802",
            "24x24": "https://goeuro.atlassian.net/secure/projectavatar?size=small&pid=11801&avatarId=18802",
            "16x16": "https://goeuro.atlassian.net/secure/projectavatar?size=xsmall&pid=11801&avatarId=18802",
            "32x32": "https://goeuro.atlassian.net/secure/projectavatar?size=medium&pid=11801&avatarId=18802"
          }
        },
        "aggregatetimespent": null,
        "customfield_10701": null,
        "resolutiondate": null,
        "workratio": -1,
        "watches": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-974/watchers",
          "watchCount": 1,
          "isWatching": true
        },
        "created": "2017-04-04T14:58:10.000+0200",
        "customfield_10020": null,
        "customfield_10021": null,
        "customfield_12200": null,
        "customfield_10024": null,
        "customfield_12600": null,
        "customfield_10300": null,
        "customfield_10026": null,
        "customfield_10016": null,
        "customfield_10017": null,
        "customfield_10018": null,
        "customfield_10019": null,
        "customfield_11902": "{panel:bgColor=#EAECFF}\r\nh3. Issue Summary\r\n* short summary (5 sentences)\r\n* list the duration along with start and end times (include timezone)\r\n* state the impact (e.g. most user requests resulted in 500 errors, at peak 100%)\r\n* close with root cause\r\n\r\nh3. Timeline\r\n* list the timezone\r\n* covers the outage duration\r\n* when outage began\r\n* when staff was notified\r\n* actions, events, ...\r\n* when service was restored\r\n\r\nh3. Root Cause\r\n\r\nh3. Resolution and recovery\r\n* give detailed explanation of actions taken (includes times)\r\n\r\nh3. Corrective and Preventative Measures\r\n(flag) Action items should be created as a tickets and linked to this report\r\n* itemized list of ways to prevent it from happening again\r\n* what can we do better next time?\r\n{panel}",
        "updated": "2017-04-04T14:58:11.000+0200",
        "timeoriginalestimate": null,
        "description": "One of the possible options is to create a new slack channel which logs all releases.",
        "customfield_11100": null,
        "customfield_10012": null,
        "customfield_10013": null,
        "customfield_10014": null,
        "customfield_10015": null,
        "customfield_12701": null,
        "customfield_12700": null,
        "customfield_12703": null,
        "customfield_10007": null,
        "customfield_10008": null,
        "customfield_12702": null,
        "customfield_10801": null,
        "customfield_12705": null,
        "customfield_12704": null,
        "customfield_12706": null,
        "summary": "Figure out way to log release information",
        "customfield_10001": null,
        "customfield_10002": null,
        "customfield_12300": null,
        "customfield_10003": null,
        "customfield_10004": null,
        "customfield_10400": null,
        "customfield_11600": null,
        "environment": null,
        "duedate": null
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "73086",
      "self": "https://goeuro.atlassian.net/rest/api/2/issue/73086",
      "key": "AD-926",
      "fields": {
        "fixVersions": [

        ],
        "resolution": null,
        "customfield_12800": null,
        "customfield_12802": null,
        "customfield_12801": null,
        "customfield_12804": null,
        "customfield_12803": null,
        "customfield_12806": null,
        "customfield_10903": null,
        "customfield_12805": null,
        "lastViewed": null,
        "customfield_12000": null,
        "customfield_12400": null,
        "priority": {
          "self": "https://goeuro.atlassian.net/rest/api/2/priority/6",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/priority_major.gif",
          "name": "Normal (P3)",
          "id": "6"
        },
        "customfield_10102": null,
        "customfield_12402": null,
        "customfield_12401": null,
        "labels": [

        ],
        "customfield_11303": null,
        "customfield_11305": null,
        "customfield_11306": null,
        "aggregatetimeoriginalestimate": null,
        "customfield_11307": null,
        "timeestimate": null,
        "versions": [

        ],
        "customfield_11308": null,
        "issuelinks": [

        ],
        "assignee": null,
        "status": {
          "self": "https://goeuro.atlassian.net/rest/api/2/status/1",
          "description": "",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/statuses/open.png",
          "name": "To Do",
          "id": "1",
          "statusCategory": {
            "self": "https://goeuro.atlassian.net/rest/api/2/statuscategory/2",
            "id": 2,
            "key": "new",
            "colorName": "blue-gray",
            "name": "To Do"
          }
        },
        "components": [

        ],
        "customfield_10050": null,
        "customfield_10051": null,
        "customfield_10052": null,
        "customfield_11301": null,
        "customfield_11302": null,
        "customfield_10049": null,
        "customfield_10600": null,
        "customfield_10601": [

        ],
        "customfield_12900": null,
        "customfield_10602": null,
        "aggregatetimeestimate": null,
        "creator": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "subtasks": [

        ],
        "reporter": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "customfield_12100": "{}",
        "aggregateprogress": {
          "progress": 0,
          "total": 0
        },
        "customfield_10200": "1|hzvcd5:hjzjv30l11y7hv",
        "customfield_10201": null,
        "customfield_12500": null,
        "customfield_11800": null,
        "progress": {
          "progress": 0,
          "total": 0
        },
        "votes": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-926/votes",
          "votes": 0,
          "hasVoted": false
        },
        "issuetype": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issuetype/10001",
          "id": "10001",
          "description": "Created by JIRA Agile - do not edit or delete. Issue type for a user story.",
          "iconUrl": "https://goeuro.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10315&avatarType=issuetype",
          "name": "Story",
          "subtask": false,
          "avatarId": 10315
        },
        "timespent": null,
        "project": {
          "self": "https://goeuro.atlassian.net/rest/api/2/project/11801",
          "id": "11801",
          "key": "AD",
          "name": "Advertising",
          "avatarUrls": {
            "48x48": "https://goeuro.atlassian.net/secure/projectavatar?pid=11801&avatarId=18802",
            "24x24": "https://goeuro.atlassian.net/secure/projectavatar?size=small&pid=11801&avatarId=18802",
            "16x16": "https://goeuro.atlassian.net/secure/projectavatar?size=xsmall&pid=11801&avatarId=18802",
            "32x32": "https://goeuro.atlassian.net/secure/projectavatar?size=medium&pid=11801&avatarId=18802"
          }
        },
        "aggregatetimespent": null,
        "customfield_10701": null,
        "resolutiondate": null,
        "workratio": -1,
        "watches": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-926/watchers",
          "watchCount": 1,
          "isWatching": true
        },
        "created": "2017-03-10T14:32:14.000+0100",
        "customfield_10020": null,
        "customfield_12200": null,
        "customfield_10021": null,
        "customfield_10024": null,
        "customfield_10300": null,
        "customfield_12600": null,
        "customfield_10026": null,
        "customfield_10016": null,
        "customfield_10017": null,
        "customfield_11501": null,
        "customfield_10018": null,
        "customfield_10019": null,
        "customfield_11902": "{panel:bgColor=#EAECFF}\r\nh3. Issue Summary\r\n* short summary (5 sentences)\r\n* list the duration along with start and end times (include timezone)\r\n* state the impact (e.g. most user requests resulted in 500 errors, at peak 100%)\r\n* close with root cause\r\n\r\nh3. Timeline\r\n* list the timezone\r\n* covers the outage duration\r\n* when outage began\r\n* when staff was notified\r\n* actions, events, ...\r\n* when service was restored\r\n\r\nh3. Root Cause\r\n\r\nh3. Resolution and recovery\r\n* give detailed explanation of actions taken (includes times)\r\n\r\nh3. Corrective and Preventative Measures\r\n(flag) Action items should be created as a tickets and linked to this report\r\n* itemized list of ways to prevent it from happening again\r\n* what can we do better next time?\r\n{panel}",
        "updated": "2017-03-10T14:32:20.000+0100",
        "timeoriginalestimate": null,
        "description": null,
        "customfield_11100": null,
        "customfield_10012": null,
        "customfield_10013": null,
        "customfield_11500": null,
        "customfield_10014": null,
        "customfield_10015": null,
        "customfield_10005": null,
        "customfield_12701": null,
        "customfield_12700": null,
        "customfield_12703": null,
        "customfield_10007": null,
        "customfield_10008": "AD-905",
        "customfield_12702": null,
        "customfield_10801": null,
        "customfield_12705": null,
        "customfield_12704": null,
        "customfield_12706": null,
        "summary": "Add cost to ticket price",
        "customfield_10001": null,
        "customfield_10002": null,
        "customfield_12300": null,
        "customfield_10003": null,
        "customfield_10004": null,
        "customfield_10400": null,
        "customfield_11600": null,
        "environment": null,
        "duedate": null
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "73085",
      "self": "https://goeuro.atlassian.net/rest/api/2/issue/73085",
      "key": "AD-925",
      "fields": {
        "fixVersions": [

        ],
        "resolution": null,
        "customfield_12800": null,
        "customfield_12802": null,
        "customfield_12801": null,
        "customfield_12804": null,
        "customfield_12803": null,
        "customfield_12806": null,
        "customfield_12805": null,
        "customfield_10903": null,
        "lastViewed": null,
        "customfield_12000": null,
        "priority": {
          "self": "https://goeuro.atlassian.net/rest/api/2/priority/6",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/priority_major.gif",
          "name": "Normal (P3)",
          "id": "6"
        },
        "customfield_12400": null,
        "customfield_12402": null,
        "customfield_10102": null,
        "customfield_12401": null,
        "labels": [

        ],
        "customfield_11303": null,
        "customfield_11305": null,
        "customfield_11306": null,
        "timeestimate": null,
        "customfield_11307": null,
        "aggregatetimeoriginalestimate": null,
        "versions": [

        ],
        "customfield_11308": null,
        "issuelinks": [

        ],
        "assignee": null,
        "status": {
          "self": "https://goeuro.atlassian.net/rest/api/2/status/1",
          "description": "",
          "iconUrl": "https://goeuro.atlassian.net/images/icons/statuses/open.png",
          "name": "To Do",
          "id": "1",
          "statusCategory": {
            "self": "https://goeuro.atlassian.net/rest/api/2/statuscategory/2",
            "id": 2,
            "key": "new",
            "colorName": "blue-gray",
            "name": "To Do"
          }
        },
        "components": [

        ],
        "customfield_10050": null,
        "customfield_10051": null,
        "customfield_10052": null,
        "customfield_11301": null,
        "customfield_11302": null,
        "customfield_10049": null,
        "customfield_10600": null,
        "customfield_10601": [

        ],
        "customfield_10602": null,
        "customfield_12900": null,
        "aggregatetimeestimate": null,
        "creator": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "subtasks": [

        ],
        "reporter": {
          "self": "https://goeuro.atlassian.net/rest/api/2/user?username=enzo.frantz",
          "name": "enzo.frantz",
          "key": "enzo.frantz",
          "accountId": "557058:c2d11c93-1b2a-43e2-a992-83ed685f5568",
          "emailAddress": "enzo.frantz@goeuro.com",
          "avatarUrls": {
            "48x48": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=48&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3FownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "24x24": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=24&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "16x16": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=16&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dxsmall%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue",
            "32x32": "https://avatar-cdn.atlassian.com/406f188304971e01e87265c0f8f6c5f4?s=32&d=https%3A%2F%2Fgoeuro.atlassian.net%2Fsecure%2Fuseravatar%3Fsize%3Dmedium%26ownerId%3Denzo.frantz%26avatarId%3D19200%26noRedirect%3Dtrue"
          },
          "displayName": "Enzo Borg Frantz",
          "active": true,
          "timeZone": "Europe/Berlin"
        },
        "customfield_12100": "{}",
        "aggregateprogress": {
          "progress": 0,
          "total": 0
        },
        "customfield_10200": "1|hzvcd5:hjzjv30l11y7hr",
        "customfield_10201": null,
        "customfield_12500": null,
        "customfield_11800": null,
        "progress": {
          "progress": 0,
          "total": 0
        },
        "votes": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-925/votes",
          "votes": 0,
          "hasVoted": false
        },
        "issuetype": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issuetype/10001",
          "id": "10001",
          "description": "Created by JIRA Agile - do not edit or delete. Issue type for a user story.",
          "iconUrl": "https://goeuro.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10315&avatarType=issuetype",
          "name": "Story",
          "subtask": false,
          "avatarId": 10315
        },
        "timespent": null,
        "project": {
          "self": "https://goeuro.atlassian.net/rest/api/2/project/11801",
          "id": "11801",
          "key": "AD",
          "name": "Advertising",
          "avatarUrls": {
            "48x48": "https://goeuro.atlassian.net/secure/projectavatar?pid=11801&avatarId=18802",
            "24x24": "https://goeuro.atlassian.net/secure/projectavatar?size=small&pid=11801&avatarId=18802",
            "16x16": "https://goeuro.atlassian.net/secure/projectavatar?size=xsmall&pid=11801&avatarId=18802",
            "32x32": "https://goeuro.atlassian.net/secure/projectavatar?size=medium&pid=11801&avatarId=18802"
          }
        },
        "aggregatetimespent": null,
        "customfield_10701": null,
        "resolutiondate": null,
        "workratio": -1,
        "watches": {
          "self": "https://goeuro.atlassian.net/rest/api/2/issue/AD-925/watchers",
          "watchCount": 1,
          "isWatching": true
        },
        "created": "2017-03-10T14:32:07.000+0100",
        "customfield_10020": null,
        "customfield_12200": null,
        "customfield_10021": null,
        "customfield_10024": null,
        "customfield_12600": null,
        "customfield_10300": null,
        "customfield_10026": null,
        "customfield_10016": null,
        "customfield_11501": null,
        "customfield_10017": null,
        "customfield_10018": null,
        "customfield_10019": null,
        "customfield_11902": "{panel:bgColor=#EAECFF}\r\nh3. Issue Summary\r\n* short summary (5 sentences)\r\n* list the duration along with start and end times (include timezone)\r\n* state the impact (e.g. most user requests resulted in 500 errors, at peak 100%)\r\n* close with root cause\r\n\r\nh3. Timeline\r\n* list the timezone\r\n* covers the outage duration\r\n* when outage began\r\n* when staff was notified\r\n* actions, events, ...\r\n* when service was restored\r\n\r\nh3. Root Cause\r\n\r\nh3. Resolution and recovery\r\n* give detailed explanation of actions taken (includes times)\r\n\r\nh3. Corrective and Preventative Measures\r\n(flag) Action items should be created as a tickets and linked to this report\r\n* itemized list of ways to prevent it from happening again\r\n* what can we do better next time?\r\n{panel}",
        "updated": "2017-03-10T14:32:20.000+0100",
        "timeoriginalestimate": null,
        "description": null,
        "customfield_11100": null,
        "customfield_10012": null,
        "customfield_10013": null,
        "customfield_10014": null,
        "customfield_11500": null,
        "customfield_10015": null,
        "customfield_10005": null,
        "customfield_12701": null,
        "customfield_12700": null,
        "customfield_12703": null,
        "customfield_10007": null,
        "customfield_12702": null,
        "customfield_10008": "AD-905",
        "customfield_12705": null,
        "customfield_10801": null,
        "customfield_12704": null,
        "customfield_12706": null,
        "summary": "Update price on frontend",
        "customfield_10001": null,
        "customfield_10002": null,
        "customfield_12300": null,
        "customfield_10003": null,
        "customfield_10400": null,
        "customfield_10004": null,
        "customfield_11600": null,
        "environment": null,
        "duedate": null
      }
    }
  ]
}
