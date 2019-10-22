define({ "api": [
  {
    "group": "Admin",
    "type": "get",
    "url": "/api/user/employee/all",
    "title": "Get All Employee",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "auth-token",
            "description": "<p>JWT Token need to be assigned against this</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n [\n    {\n        \"_id\": \"5da25efc79478c2144240913\",\n        \"name\": \"test\",\n        \"email\": \"testing@gmail.com\"\n        \"__v\": 0\n    },\n    {\n        \"_id\": \"5da9919847d96214e0708560\",\n        \"name\": \"zubair\",\n        \"email\": \"test@test.com\"\n        \"__v\": 0\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/users/routes/usersRoute.js",
    "groupTitle": "Admin",
    "name": "GetApiUserEmployeeAll"
  },
  {
    "group": "Admin",
    "type": "post",
    "url": "/api/user/admin/login",
    "title": "Admin Login",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>required</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGE3MmQ5ZGE0ZTRjNDA2YzgzNjkwNmQiLCJuYW1lIjoiYWRtaW4iLCJsZXZlbCI6eyJyb2xlIjoiYWRtaW4iLCJfX3YiOjB9LCJpYXQiOjE1NzEzOTQxNzMsImV4cCI6MTU3MTk5ODk3M30.rEt974_1FxlnT8ZMiIv3WNc15cgLPAXbUjeJdOFmqqY\",\n    \"userData\": {\n        \"_id\": \"5da72d9da4e4c406c836906d\",\n        \"name\": \"admin\",\n        \"email\": \"admin@gmail.com\",\n        \"lev\": {\n            \"role\": \"admin\",\n            \"__v\": 0\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/users/routes/usersRoute.js",
    "groupTitle": "Admin",
    "name": "PostApiUserAdminLogin"
  },
  {
    "group": "Admin",
    "type": "post",
    "url": "/api/user/register/employee",
    "title": "Register Employee",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "auth-token",
            "description": "<p>JWT Token need to be assigned against this</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>required</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>required</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Successfully registered Employee!...\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/users/routes/usersRoute.js",
    "groupTitle": "Admin",
    "name": "PostApiUserRegisterEmployee"
  },
  {
    "group": "Claim",
    "type": "post",
    "url": "/api/expert/claim",
    "title": "Claim Expert For Project",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "auth-token",
            "description": "<p>JWT Token need to be assigned against this</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "projectId",
            "description": "<p>required</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "experts",
            "description": "<p>required</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "experts.expertId",
            "description": "<p>required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Expert Claimed!...\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/expert/routes/claimRoutes.js",
    "groupTitle": "Claim",
    "name": "PostApiExpertClaim"
  },
  {
    "group": "Client",
    "type": "get",
    "url": "/api/client/all",
    "title": "Get All Clients",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "auth-token",
            "description": "<p>JWT Token need to be assigned against this</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n[\n   {\n        \"_id\": \"5da1a40ddbb55725981fd32d\",\n        \"clientCompany\": \"LLC update \",\n        \"payAsYouGo\": null,\n        \"creditRemaining\": 15000,\n        \"billingCurrency\": \"USD\",\n        \"pricingRules\": \"This is new pricing Rules for the company\",\n        \"pricePerhourCall\": 1000,\n        \"entityToInvoice\": \"This is new  invoice from the company\",\n        \"InvoiceContacts\": [\n            {\n                \"_id\": \"5da1a487dbb55725981fd333\",\n                \"name\": \"sahib one\"\n            },\n            {\n                \"_id\": \"5da1a487dbb55725981fd332\",\n                \"name\": \"hanzala\"\n            },\n            {\n                \"_id\": \"5da1a487dbb55725981fd331\",\n                \"name\": \"zubair\"\n            }\n        ],\n        \"vat\": \"1\",\n        \"__v\": 0,\n        \"prepaid\": true\n    },\n    {\n        \"_id\": \"5da9b8bc80036017f0148b80\",\n        \"clientCompany\": \"hM Production\",\n        \"prepaid\": true,\n        \"creditRemaining\": 2400,\n        \"billingCurrency\": \"USD\",\n        \"pricingRules\": \"This is Pricing Rules\",\n        \"pricePerhourCall\": 50,\n        \"entityToInvoice\": \"This is invoice\",\n        \"InvoiceContacts\": [\n            {\n                \"_id\": \"5da9b8bc80036017f0148b81\",\n                \"name\": \"Hanzala\"\n            }\n        ],\n        \"vat\": \"this is vat\",\n        \"__v\": 0\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/project/routes/clientRoutes.js",
    "groupTitle": "Client",
    "name": "GetApiClientAll"
  },
  {
    "group": "Client",
    "type": "post",
    "url": "/api/client/add/credit",
    "title": "Add Credit(Client)",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "auth-token",
            "description": "<p>JWT Token need to be assigned against this</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "clientId",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "credit",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n  \"message\": \"Credit Updated!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/project/routes/clientRoutes.js",
    "groupTitle": "Client",
    "name": "PostApiClientAddCredit"
  },
  {
    "group": "Client",
    "type": "post",
    "url": "/api/client/charge",
    "title": "Charge Client",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "auth-token",
            "description": "<p>JWT Token need to be assigned against this</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "clientId",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "credit",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n  \"message\": \"Charge Credit Successfull!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/project/routes/clientRoutes.js",
    "groupTitle": "Client",
    "name": "PostApiClientCharge"
  },
  {
    "group": "Client",
    "type": "post",
    "url": "/api/client/check/remainingBalance",
    "title": "Check Remaining Balance Of  Client",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "auth-token",
            "description": "<p>JWT Token need to be assigned against this</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "clientId",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n     \"_id\": \"5da9b8bc80036017f0148b80\",\n     \"creditRemaining\": 2000\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/project/routes/clientRoutes.js",
    "groupTitle": "Client",
    "name": "PostApiClientCheckRemainingbalance"
  },
  {
    "group": "Client",
    "type": "post",
    "url": "/api/client/create",
    "title": "Create Client",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "auth-token",
            "description": "<p>JWT Token need to be assigned against this</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientCompany",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "prepaid",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "payAsYouGo",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "creditRemaining",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "billingCurrency",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pricingRules",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pricePerhourCall",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entityToInvoice",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "InvoiceContacts",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "InvoiceContacts.name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vat",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n       \"message\": \"Client created Successfully!...\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/project/routes/clientRoutes.js",
    "groupTitle": "Client",
    "name": "PostApiClientCreate"
  },
  {
    "group": "Client",
    "type": "put",
    "url": "/api/client/update",
    "title": "Update Client",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "auth-token",
            "description": "<p>JWT Token need to be assigned against this</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientCompany",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "prepaid",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "payAsYouGo",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "billingCurrency",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pricingRules",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pricePerhourCall",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entityToInvoice",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "InvoiceContacts",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "InvoiceContacts.name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vat",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n       \"message\": \"Successfully updated Client!...\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/project/routes/clientRoutes.js",
    "groupTitle": "Client",
    "name": "PutApiClientUpdate"
  },
  {
    "group": "Employee",
    "type": "post",
    "url": "/api/user/login",
    "title": "Employee Login",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>required</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGE5OTE5ODQ3ZDk2MjE0ZTA3MDg1NjAiLCJuYW1lIjoienViYWlyIiwiaWF0IjoxNTcxMzk0MDM1LCJleHAiOjE1NzE5OTg4MzV9.LHvtcr2FUC6pWAqg_uz5Yx31SQnNeFZiXcveqhH1vEM\",\n    \"userData\": {\n        \"_id\": \"5da9919847d96214e0708560\",\n        \"name\": \"zubair\",\n        \"email\": \"test@test.com\"\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/users/routes/usersRoute.js",
    "groupTitle": "Employee",
    "name": "PostApiUserLogin"
  },
  {
    "group": "Expert",
    "type": "get",
    "url": "/api/expert/all/countries",
    "title": "Get All Countries",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "auth-token",
            "description": "<p>JWT Token need to be assigned against this</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n[\n   {\n         \"_id\": \"5da0d63f817da31da86727ef\",\n         \"id\": 243,\n         \"sortname\": \"YE\",\n         \"name\": \"Yemen\",\n         \"phoneCode\": 967,\n         \"__v\": 0\n     },\n     {\n         \"_id\": \"5da0d63f817da31da86727f0\",\n         \"id\": 244,\n         \"sortname\": \"YU\",\n         \"name\": \"Yugoslavia\",\n         \"phoneCode\": 38,\n         \"__v\": 0\n     },\n     {\n         \"_id\": \"5da0d63f817da31da86727f1\",\n         \"id\": 245,\n         \"sortname\": \"ZM\",\n         \"name\": \"Zambia\",\n         \"phoneCode\": 260,\n         \"__v\": 0\n     },\n     {\n         \"_id\": \"5da0d63f817da31da86727f2\",\n         \"id\": 246,\n         \"sortname\": \"ZW\",\n         \"name\": \"Zimbabwe\",\n         \"phoneCode\": 26,\n         \"__v\": 0\n     }\n ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/expert/routes/expertRoute.js",
    "groupTitle": "Expert",
    "name": "GetApiExpertAllCountries"
  },
  {
    "group": "Expert",
    "type": "get",
    "url": "/api/expert/all/regions",
    "title": "Get All Regions",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "auth-token",
            "description": "<p>JWT Token need to be assigned against this</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n  [   \n         {\n        \"_id\": \"5da0d47b817da31da86726f7\",\n        \"region\": \"middle east\",\n        \"country\": \"qatar\",\n        \"country_code\": \"qa\",\n        \"__v\": 0\n    },\n    {\n        \"_id\": \"5da0d47b817da31da86726f8\",\n        \"region\": \"middle east\",\n        \"country\": \"jordan\",\n        \"country_code\": \"jo\",\n        \"__v\": 0\n    },\n    {\n        \"_id\": \"5da0d47b817da31da86726f9\",\n        \"region\": \"middle east\",\n        \"country\": \"kuwait\",\n        \"country_code\": \"kw\",\n        \"__v\": 0\n    },\n    {\n        \"_id\": \"5da0d47b817da31da86726fa\",\n        \"region\": \"middle east\",\n        \"country\": \"israel\",\n        \"country_code\": \"il\",\n        \"__v\": 0\n    },\n    {\n        \"_id\": \"5da0d47b817da31da86726fb\",\n        \"region\": \"middle east\",\n        \"country\": \"united arab emirates\",\n        \"country_code\": \"ae\",\n        \"__v\": 0\n    },\n    {\n        \"_id\": \"5da0d47b817da31da86726fc\",\n        \"region\": \"middle east\",\n        \"country\": \"saudi arabia\",\n        \"country_code\": \"sa\",\n        \"__v\": 0\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/expert/routes/expertRoute.js",
    "groupTitle": "Expert",
    "name": "GetApiExpertAllRegions"
  },
  {
    "group": "Expert",
    "type": "get",
    "url": "/api/expert/:expertId",
    "title": "Get Expert Profile",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "auth-token",
            "description": "<p>JWT Token need to be assigned against this</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "expertId",
            "description": "<p>required</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n       \"introduction\": {\n           \"first_name\": \"Ehsaan\",\n           \"last_name\": \"Israr\",\n           \"picture\": \"\",\n           \"location_name\": \"Lahore, Pakistan\",\n           \"country\": \"Pakistan\",\n           \"headline\": \"Full Stack Developer\",\n           \"region\": \"asia\",\n           \"public_identifier\": \"ehsaan-israr-812991aa\"\n       },\n       \"summary\": {\n           \"text\": \"An innovative thinker, initiative taker and multi dimensional professional with exceptional logical and analytical skills with ability to Implement new ideas in a wide variety of business applications, use new technologies and develop        applications with eye catching features.\"\n       },\n       \"_id\": \"5da9a1751c98c72a58900a6d\",\n       \"employeeId\": \"5da991368d78ff7f3fbbb85f\",\n       \"projectId\": \"5da1e4df1562722830f697fc\",\n       \"experiences\": [\n           {\n               \"time_period\": {\n                   \"start\": {\n                       \"month\": \"Apr\",\n                       \"year\": \"2018\"\n                   },\n                   \"end\": {\n                       \"month\": \"Jun\",\n                       \"year\": \"2019\"\n                   }\n               },\n               \"_id\": \"5da9a1751c98c72a58900a6e\",\n               \"position_name\": \"Full Stack Developer\",\n               \"company_name\": \"xiQ, Inc.\",\n               \"location_name\": \"Pakistan\",\n               \"description\": \"xiQ Inc. is Account based marketing (ABM) Company. This product help companies to curate, personalize and publish contents to mobile apps (iphone, ipad and android), web apps , salesforce app and email in minutes. It also provide user management, contacts management, reports module and dashboards module.  Following are some of the majors on which I worked on in python/django project:  Added campaign management tool  Added contact list management tool  Added customize user permissions system  Added logging system  Added personalization of email  Sending and scheduling of emails  Added different highcharts in dashboards\"\n           }\n       ],\n       \"educations\": [\n           {\n               \"time_period\": {\n                   \"start\": {\n                       \"year\": \"2018\"\n                   },\n                   \"end\": {\n                       \"year\": \"2018\"\n                   }\n               },\n               \"_id\": \"5da9a1751c98c72a58900a73\",\n               \"school_name\": \"PUCIT\",\n               \"degree_name\": \"nasn\",\n               \"field_of_study\": \"Business Administration and Management, General\",\n               \"description\": \"Located in the heart of Lahore, neighboring the buzzing Anarkali Bazar and the Mall Road, PUCIT is the largest institution of higher learning in Pakistan in Computer Science, Information Technology, and Software Engineering. The College took a modest...\",\n               \"degree_grade\": \"3.0/4.0\"\n           },\n           {\n               \"time_period\": {\n                   \"start\": {\n                       \"year\": \"2013\"\n                   },\n                   \"end\": {\n                       \"year\": \"2015\"\n                   }\n               },\n               \"_id\": \"5da9a1751c98c72a58900a72\",\n               \"school_name\": \"University of the Punjab, Lahore\",\n               \"degree_name\": \"Master in Computer Science\",\n               \"field_of_study\": \"CS\",\n               \"description\": \"Providing a high level Enviroment of Learning\",\n               \"degree_grade\": \"3.57 cgpa\"\n           },\n           {\n               \"time_period\": {\n                   \"start\": {\n                       \"year\": \"2011\"\n                   },\n                   \"end\": {\n                       \"year\": \"2013\"\n                   }\n               },\n               \"_id\": \"5da9a1751c98c72a58900a71\",\n               \"school_name\": \"Govt. Dyal Singh College,Lahore\",\n               \"degree_name\": \"Bachelor's degree\",\n               \"field_of_study\": \"E-Commerce\",\n               \"description\": \"Gather the wisdom of east and west\",\n               \"degree_grade\": \"Ist Division\"\n           },\n           {\n               \"time_period\": {\n                   \"start\": {\n                       \"year\": \"2009\"\n                   },\n                   \"end\": {\n                       \"year\": \"2011\"\n                   }\n               },\n               \"_id\": \"5da9a1751c98c72a58900a70\",\n               \"school_name\": \"Govt. Shalimar College,Lahore\",\n               \"degree_name\": \"Associates Degree\",\n               \"field_of_study\": \"Pre-Engineering\",\n               \"description\": \"Nice Institute\",\n               \"degree_grade\": \"Ist Division\"\n           },\n           {\n               \"time_period\": {\n                   \"start\": {\n                       \"year\": \"2007\"\n                   },\n                   \"end\": {\n                       \"year\": \"2009\"\n                   }\n               },\n               \"_id\": \"5da9a1751c98c72a58900a6f\",\n               \"school_name\": \"P.R High School,Lahore\",\n               \"degree_name\": \"High School\",\n               \"field_of_study\": \"Science\",\n               \"description\": \"Nice Institute with nice teachers\",\n               \"degree_grade\": \"Ist Division\"\n           }\n       ],\n       \"certifications\": [\n           {\n               \"_id\": \"5da9a1751c98c72a58900a74\",\n               \"institute_name\": \"https://acloud.guru\",\n               \"certification_name\": \"Introduction to AWS\"\n           }\n       ],\n       \"volunteer_experiences\": [\n           {\n               \"_id\": \"5da9a1751c98c72a58900a75\",\n               \"role\": \"Mentor\",\n               \"organization_name\": \"Django Girls\",\n               \"description\": \"I served a day with Django Girls Event at ITU as a Mentor. Django Girls organize free Python and Django workshops, create open sourced online tutorials and curate amazing first experiences with technology.\",\n               \"cause\": \"Science and Technology\"\n           }\n       ],\n       \"skills\": [\n           {\n               \"_id\": \"5da9a1751c98c72a58900a7a\",\n               \"name\": \"Python\",\n               \"endorsement_count\": \"8\"\n           },\n           {\n               \"_id\": \"5da9a1751c98c72a58900a79\",\n               \"name\": \"Django\",\n               \"endorsement_count\": \"8\"\n           },\n           {\n               \"_id\": \"5da9a1751c98c72a58900a78\",\n               \"name\": \"MySQL\",\n               \"endorsement_count\": \"10\"\n           },\n           {\n               \"_id\": \"5da9a1751c98c72a58900a77\",\n               \"name\": \"boto\",\n               \"endorsement_count\": \"5\"\n           },\n           {\n               \"_id\": \"5da9a1751c98c72a58900a76\",\n               \"name\": \"CKEditor\",\n               \"endorsement_count\": \"4\"\n           }\n       ],\n       \"projects\": [\n           {\n               \"time_period\": {\n                   \"start\": {\n                       \"month\": \"Jan\"\n                   },\n                   \"end\": {\n                       \"month\": \"Jan\"\n                   }\n               },\n               \"_id\": \"5da9a1751c98c72a58900a7c\",\n               \"name\": \"Online Job Shop\",\n               \"description\": \"Tools and Technologies:: C#,WebRTC,Asp.Net,SignalR,Visual Studio 2013\\nDescription::\\nAn web application, providing complete replacement of manual job system.Employer can post job and job seeker can apply to that job.Employer take the Interview fortheir final selection.\\nFeatures:\\n•\\tUser can create and manage his account.\\n•       Employer can create and manage Job\\n•\\tJob seeker can create or upload his C.V.\\n•       Job Seeker can Apply to job\\n•\\tEmployer can Interview the selected Job Seeker.\\n•\\tJob Seeker and Employer can search for Jobs and Job Seeker respectively.\",\n               \"url\": null\n           },\n           {\n               \"time_period\": {\n                   \"start\": {\n                       \"month\": \"Apr 2015\"\n                   },\n                   \"end\": {\n                       \"month\": \"Apr 2015\"\n                   }\n               },\n               \"_id\": \"5da9a1751c98c72a58900a7b\",\n               \"name\": \"One to One Video Call\",\n               \"description\": \"Tools and Techniques:: C# , ASP.NET , WebRTC , Alertify , SignalR , Visual Studio 2013\\nDescription::\\nIt uses the chrome WebRTC API for one to one video call means you noting have to install and for Signalling it uses the  SignalR  API.WebRTC is written in javascript  core level and giving a high quality of video streaming.you do not need a space for video streaming.\",\n               \"url\": null\n           }\n       ],\n       \"publications\": [],\n       \"currentEmployer\": [],\n       \"previousEmployees\": [],\n       \"__v\": 0\n   },\n   {\n       \"introduction\": {\n           \"first_name\": \"Zubair\",\n           \"last_name\": \"Arif\",\n           \"picture\": \"\",\n           \"country\": \"Pakistan\",\n           \"region\": \"asia\",\n           \"location_name\": \"Lahore, Pakistan\",\n           \"headline\": \"Full Stack Developer\",\n           \"public_identifier\": \"ehsaan-israr-812991aa\"\n       },\n       \"summary\": {\n           \"text\": \"An innovative thinker, initiative taker and multi dimensional professional with exceptional logical and analytical skills with ability to Implement new ideas in a wide variety of business applications, use new technologies and develop        applications with eye catching features.\"\n       },\n       \"_id\": \"5da9a20d1c98c72a58900a7d\",\n       \"employeeId\": \"5da991368d78ff7f3fbbb85f\",\n       \"projectId\": \"5da1e4df1562722830f697fc\",\n       \"experiences\": [\n           {\n               \"time_period\": {\n                   \"start\": {\n                       \"month\": \"Apr\",\n                       \"year\": \"2018\"\n                   },\n                   \"end\": {\n                       \"month\": \"Jun\",\n                       \"year\": \"2019\"\n                   }\n               },\n               \"_id\": \"5da9a20d1c98c72a58900a7e\",\n               \"position_name\": \"Full Stack Developer\",\n               \"company_name\": \"xiQ, Inc.\",\n               \"location_name\": \"Pakistan\",\n               \"description\": \"xiQ Inc. is Account based marketing (ABM) Company. This product help companies to curate, personalize and publish contents to mobile apps (iphone, ipad and android), web apps , salesforce app and email in minutes. It also provide user management, contacts management, reports module and dashboards module.  Following are some of the majors on which I worked on in python/django project:  Added campaign management tool  Added contact list management tool  Added customize user permissions system  Added logging system  Added personalization of email  Sending and scheduling of emails  Added different highcharts in dashboards\"\n           }\n       ],\n       \"educations\": [\n           {\n               \"time_period\": {\n                   \"start\": {\n                       \"year\": \"2018\"\n                   },\n                   \"end\": {\n                       \"year\": \"2018\"\n                   }\n               },\n               \"_id\": \"5da9a20d1c98c72a58900a83\",\n               \"school_name\": \"PUCIT\",\n               \"degree_name\": \"nasn\",\n               \"field_of_study\": \"Business Administration and Management, General\",\n               \"description\": \"Located in the heart of Lahore, neighboring the buzzing Anarkali Bazar and the Mall Road, PUCIT is the largest institution of higher learning in Pakistan in Computer Science, Information Technology, and Software Engineering. The College took a modest...\",\n               \"degree_grade\": \"3.0/4.0\"\n           },\n           {\n               \"time_period\": {\n                   \"start\": {\n                       \"year\": \"2013\"\n                   },\n                   \"end\": {\n                       \"year\": \"2015\"\n                   }\n               },\n               \"_id\": \"5da9a20d1c98c72a58900a82\",\n               \"school_name\": \"University of the Punjab, Lahore\",\n               \"degree_name\": \"Master in Computer Science\",\n               \"field_of_study\": \"CS\",\n               \"description\": \"Providing a high level Enviroment of Learning\",\n               \"degree_grade\": \"3.57 cgpa\"\n           },\n           {\n               \"time_period\": {\n                   \"start\": {\n                       \"year\": \"2011\"\n                   },\n                   \"end\": {\n                       \"year\": \"2013\"\n                   }\n               },\n               \"_id\": \"5da9a20d1c98c72a58900a81\",\n               \"school_name\": \"Govt. Dyal Singh College,Lahore\",\n               \"degree_name\": \"Bachelor's degree\",\n               \"field_of_study\": \"E-Commerce\",\n               \"description\": \"Gather the wisdom of east and west\",\n               \"degree_grade\": \"Ist Division\"\n           },\n           {\n               \"time_period\": {\n                   \"start\": {\n                       \"year\": \"2009\"\n                   },\n                   \"end\": {\n                       \"year\": \"2011\"\n                   }\n               },\n               \"_id\": \"5da9a20d1c98c72a58900a80\",\n               \"school_name\": \"Govt. Shalimar College,Lahore\",\n               \"degree_name\": \"Associates Degree\",\n               \"field_of_study\": \"Pre-Engineering\",\n               \"description\": \"Nice Institute\",\n               \"degree_grade\": \"Ist Division\"\n           },\n           {\n               \"time_period\": {\n                   \"start\": {\n                       \"year\": \"2007\"\n                   },\n                   \"end\": {\n                       \"year\": \"2009\"\n                   }\n               },\n               \"_id\": \"5da9a20d1c98c72a58900a7f\",\n               \"school_name\": \"P.R High School,Lahore\",\n               \"degree_name\": \"High School\",\n               \"field_of_study\": \"Science\",\n               \"description\": \"Nice Institute with nice teachers\",\n               \"degree_grade\": \"Ist Division\"\n           }\n       ],\n       \"certifications\": [\n           {\n               \"_id\": \"5da9a20d1c98c72a58900a84\",\n               \"institute_name\": \"https://acloud.guru\",\n               \"certification_name\": \"Introduction to AWS\"\n           }\n       ],\n       \"volunteer_experiences\": [\n           {\n               \"_id\": \"5da9a20d1c98c72a58900a85\",\n               \"role\": \"Mentor\",\n               \"organization_name\": \"Django Girls\",\n               \"description\": \"I served a day with Django Girls Event at ITU as a Mentor. Django Girls organize free Python and Django workshops, create open sourced online tutorials and curate amazing first experiences with technology.\",\n               \"cause\": \"Science and Technology\"\n           }\n       ],\n       \"skills\": [\n           {\n               \"_id\": \"5da9a20d1c98c72a58900a8a\",\n               \"name\": \"Python\",\n               \"endorsement_count\": \"8\"\n           },\n           {\n               \"_id\": \"5da9a20d1c98c72a58900a89\",\n               \"name\": \"Django\",\n               \"endorsement_count\": \"8\"\n           },\n           {\n               \"_id\": \"5da9a20d1c98c72a58900a88\",\n               \"name\": \"MySQL\",\n               \"endorsement_count\": \"10\"\n           },\n           {\n               \"_id\": \"5da9a20d1c98c72a58900a87\",\n               \"name\": \"boto\",\n               \"endorsement_count\": \"5\"\n           },\n           {\n               \"_id\": \"5da9a20d1c98c72a58900a86\",\n               \"name\": \"CKEditor\",\n               \"endorsement_count\": \"4\"\n           }\n       ],\n       \"projects\": [\n           {\n               \"time_period\": {\n                   \"start\": {\n                       \"month\": \"Jan\"\n                   },\n                   \"end\": {\n                       \"month\": \"Jan\"\n                   }\n               },\n               \"_id\": \"5da9a20d1c98c72a58900a8c\",\n               \"name\": \"Online Job Shop\",\n               \"description\": \"Tools and Technologies:: C#,WebRTC,Asp.Net,SignalR,Visual Studio 2013\\nDescription::\\nAn web application, providing complete replacement of manual job system.Employer can post job and job seeker can apply to that job.Employer take the Interview fortheir final selection.\\nFeatures:\\n•\\tUser can create and manage his account.\\n•       Employer can create and manage Job\\n•\\tJob seeker can create or upload his C.V.\\n•       Job Seeker can Apply to job\\n•\\tEmployer can Interview the selected Job Seeker.\\n•\\tJob Seeker and Employer can search for Jobs and Job Seeker respectively.\",\n               \"url\": null\n           },\n           {\n               \"time_period\": {\n                   \"start\": {\n                       \"month\": \"Apr 2015\"\n                   },\n                   \"end\": {\n                       \"month\": \"Apr 2015\"\n                   }\n               },\n               \"_id\": \"5da9a20d1c98c72a58900a8b\",\n               \"name\": \"One to One Video Call\",\n               \"description\": \"Tools and Techniques:: C# , ASP.NET , WebRTC , Alertify , SignalR , Visual Studio 2013\\nDescription::\\nIt uses the chrome WebRTC API for one to one video call means you noting have to install and for Signalling it uses the  SignalR  API.WebRTC is written in javascript  core level and giving a high quality of video streaming.you do not need a space for video streaming.\",\n               \"url\": null\n           }\n       ],\n       \"publications\": [],\n       \"currentEmployer\": [],\n       \"previousEmployees\": [],\n       \"__v\": 0\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/expert/routes/expertRoute.js",
    "groupTitle": "Expert",
    "name": "GetApiExpertExpertid"
  },
  {
    "group": "Expert",
    "type": "get",
    "url": "/api/user/register/:projectNumber",
    "title": "Verify Project Number For Expert",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "projectNumber",
            "description": "<p>required</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n    \"project\": {\n        \"createdAt\": \"2019-10-16T12:57:09.433Z\",\n        \"_id\": \"5da71776e6384a75ddf33785\",\n        \"projectName\": \"qwwe\",\n        \"projectCode\": \"nkscjcbv\",\n        \"projectNumber\": \"1123sassdaD\",\n        \"projectOwner\": \"zubair aif\",\n        \"projectteam\": \"sdfsadf\",\n        \"employeeId\": \"5da71695e6384a75ddf33784\",\n        \"description\": \"bkbb\",\n        \"clientContacts\": [\n            {\n                \"_id\": \"5da71776e6384a75ddf33786\",\n                \"name\": \"zubair saif\",\n                \"email\": \"techstash@gmail.com\"\n            }\n        ],\n        \"projectStatus\": true,\n        \"__v\": 0\n    },\n    \"found\": true\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/users/routes/usersRoute.js",
    "groupTitle": "Expert",
    "name": "GetApiUserRegisterProjectnumber"
  },
  {
    "group": "Expert",
    "type": "post",
    "url": "/api/expert/create",
    "title": "Create Custom Expert Profile",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "auth-token",
            "description": "<p>JWT Token need to be assigned against this</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "projectId",
            "description": "<p>required</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "introduction",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "introduction.first_name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "introduction.last_name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "introduction.public_identifier",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "introduction.picture",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "introduction.headline",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "introduction.location_name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "introduction.country",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "introduction.region",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "summary",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "experiences",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "experiences.company_logo",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "experiences.position_name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "experiences.location_name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "experiences.description",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "experiences.time_period",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "experiences.time_period.start",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "experiences.time_period.start.month",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "experiences.time_period.start.year",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "experiences.time_period.end",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "experiences.time_period.end.month",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "experiences.time_period.end.year",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "currentEmployer",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "currentEmployer.company_logo",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "currentEmployer.position_name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "currentEmployer.company_name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "currentEmployer.location_name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "currentEmployer.description",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "currentEmployer.time_period",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "currentEmployer.time_period.start",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "currentEmployer.time_period.start.month",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "currentEmployer.time_period.start.year",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "previousEmployees",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "previousEmployees.company_logo",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "previousEmployees.position_name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "previousEmployees.company_name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "previousEmployees.location_name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "previousEmployees.description",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "previousEmployees.time_period",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "previousEmployees.time_period.start",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "previousEmployees.time_period.start.month",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "previousEmployees.time_period.start.year",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "previousEmployees.time_period.end",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "previousEmployees.time_period.end.month",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "previousEmployees.time_period.end.year",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "educations",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "educations.school_logo",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "educations.school_name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "educations.degree_name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "educations.field_of_study",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "educations.description",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "educations.degree_grade",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "educations.time_period",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "educations.time_period.start",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "educations.time_period.start.year",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "educations.time_period.end",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "educations.time_period.end.year",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "certifications",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "certifications.institute_logo",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "certifications.institute_name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "certifications.certification_name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "volunteer_experiences",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "volunteer_experiences.organization_logo",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "volunteer_experiences.role",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "volunteer_experiences.organization_name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "volunteer_experiences.description",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "volunteer_experiences.cause",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "volunteer_experiences.time_period",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "volunteer_experiences.time_period.start",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "volunteer_experiences.time_period.start.month",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "volunteer_experiences.time_period.start.year",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "volunteer_experiences.time_period.end",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "volunteer_experiences.time_period.end.month",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "volunteer_experiences.time_period.end.year",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "skills",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "skills.name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "skills.endorsement_count",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "projects",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "projects.name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "projects.description",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "projects.url",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "projects.time_period",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "projects.time_period.start",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "projects.time_period.start.month",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "projects.time_period.end",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "projects.time_period.end.month",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "publications",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "publications.name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "publications.publish_date",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "publications.description",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "publications.publisher",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "publications.url",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n     \"message\": \"Successfully Created Custom Profile!...\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/expert/routes/expertRoute.js",
    "groupTitle": "Expert",
    "name": "PostApiExpertCreate"
  },
  {
    "group": "Expert",
    "type": "post",
    "url": "/api/expert/get/project",
    "title": "Get Projects By Expert",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "auth-token",
            "description": "<p>JWT Token need to be assigned against this</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "expertId",
            "description": "<p>required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n       {\n        \"_id\": \"5da31494ea4fe2248865008f\",\n        \"employeeId\": {\n            \"_id\": \"5da0ef84d0eb9d13acce5c92\",\n            \"name\": \"zubair\",\n            \"email\": \"zubairsaif@gmail.com\",\n            \"__v\": 0\n        },\n        \"experts\": [\n            {\n                \"_id\": \"5da31494ea4fe22488650090\",\n                \"expertId\": \"5d8a91949e470a24404d2d9e\"\n            }\n        ],\n        \"projectId\": {\n            \"createdAt\": \"2019-10-12T21:39:59.671Z\",\n            \"_id\": \"5da314812769ff18544e0e94\",\n            \"projectName\": \"test project\",\n            \"projectCode\": \" testcode\",\n            \"projectNumber\": \"wde123\",\n            \"projectOwner\": \"xzxxzzx\",\n            \"projectteam\": \" canda\",\n            \"clientId\": \"5da1a19a0334311b24a44836\",\n            \"employeeId\": \"5da0ef84d0eb9d13acce5c92\",\n            \"clientContacts\": [\n                {\n                    \"_id\": \"5da25108850e0e210c9fae9d\",\n                    \"name\": \"zubair saif\",\n                    \"email\": \"zubairsaif@yandex.com\"\n                }\n            ],\n            \"projectStatus\": true,\n            \"__v\": 0\n        },\n        \"__v\": 0\n    },\n    {\n        \"_id\": \"5da393e8f6b725278c5571db\",\n        \"employeeId\": {\n            \"_id\": \"5da0ef84d0eb9d13acce5c92\",\n            \"name\": \"zubair\",\n            \"email\": \"zubairsaif@gmail.com\",\n            \"__v\": 0\n        },\n        \"experts\": [\n            {\n                \"_id\": \"5da393e8f6b725278c5571dc\",\n                \"expertId\": \"5d8a91949e470a24404d2d9e\"\n            }\n        ],\n        \"projectId\": {\n            \"createdAt\": \"2019-10-13T20:06:35.135Z\",\n            \"_id\": \"5da38a67ce9f5635104c2ad7\",\n            \"projectName\": \"Air share\",\n            \"projectCode\": \"131362ZK\",\n            \"projectNumber\": \"131362\",\n            \"projectOwner\": \"Zubair saif\",\n            \"projectteam\": \"Pakistan\",\n            \"clientId\": \"5da1a17a0334311b24a44832\",\n            \"employeeId\": \"5da0ef84d0eb9d13acce5c92\",\n            \"description\": \"This project for document sharing\",\n            \"clientContacts\": [],\n            \"projectStatus\": true,\n            \"__v\": 0\n        },\n        \"__v\": 0\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/expert/routes/expertRoute.js",
    "groupTitle": "Expert",
    "name": "PostApiExpertGetProject"
  },
  {
    "group": "Expert",
    "type": "post",
    "url": "/api/expert/getByProject/customProfile",
    "title": "Get Custom Expert Profile By Project",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "auth-token",
            "description": "<p>JWT Token need to be assigned against this</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "projectId",
            "description": "<p>required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n[\n    {\n        \"introduction\": {\n            \"first_name\": \"Ehsaan\",\n            \"last_name\": \"Israr\",\n            \"picture\": \"\",\n            \"location_name\": \"Lahore, Pakistan\",\n            \"country\": \"Pakistan\",\n            \"headline\": \"Full Stack Developer\",\n            \"region\": \"asia\",\n            \"public_identifier\": \"ehsaan-israr-812991aa\"\n        },\n        \"summary\": {\n            \"text\": \"An innovative thinker, initiative taker and multi dimensional professional with exceptional logical and analytical skills with ability to Implement new ideas in a wide variety of business applications, use new technologies and develop        applications with eye catching features.\"\n        },\n        \"_id\": \"5da9a1751c98c72a58900a6d\",\n        \"employeeId\": \"5da991368d78ff7f3fbbb85f\",\n        \"projectId\": \"5da1e4df1562722830f697fc\",\n        \"experiences\": [\n            {\n                \"time_period\": {\n                    \"start\": {\n                        \"month\": \"Apr\",\n                        \"year\": \"2018\"\n                    },\n                    \"end\": {\n                        \"month\": \"Jun\",\n                        \"year\": \"2019\"\n                    }\n                },\n                \"_id\": \"5da9a1751c98c72a58900a6e\",\n                \"position_name\": \"Full Stack Developer\",\n                \"company_name\": \"xiQ, Inc.\",\n                \"location_name\": \"Pakistan\",\n                \"description\": \"xiQ Inc. is Account based marketing (ABM) Company. This product help companies to curate, personalize and publish contents to mobile apps (iphone, ipad and android), web apps , salesforce app and email in minutes. It also provide user management, contacts management, reports module and dashboards module.  Following are some of the majors on which I worked on in python/django project:  Added campaign management tool  Added contact list management tool  Added customize user permissions system  Added logging system  Added personalization of email  Sending and scheduling of emails  Added different highcharts in dashboards\"\n            }\n        ],\n        \"educations\": [\n            {\n                \"time_period\": {\n                    \"start\": {\n                        \"year\": \"2018\"\n                    },\n                    \"end\": {\n                        \"year\": \"2018\"\n                    }\n                },\n                \"_id\": \"5da9a1751c98c72a58900a73\",\n                \"school_name\": \"PUCIT\",\n                \"degree_name\": \"nasn\",\n                \"field_of_study\": \"Business Administration and Management, General\",\n                \"description\": \"Located in the heart of Lahore, neighboring the buzzing Anarkali Bazar and the Mall Road, PUCIT is the largest institution of higher learning in Pakistan in Computer Science, Information Technology, and Software Engineering. The College took a modest...\",\n                \"degree_grade\": \"3.0/4.0\"\n            },\n            {\n                \"time_period\": {\n                    \"start\": {\n                        \"year\": \"2013\"\n                    },\n                    \"end\": {\n                        \"year\": \"2015\"\n                    }\n                },\n                \"_id\": \"5da9a1751c98c72a58900a72\",\n                \"school_name\": \"University of the Punjab, Lahore\",\n                \"degree_name\": \"Master in Computer Science\",\n                \"field_of_study\": \"CS\",\n                \"description\": \"Providing a high level Enviroment of Learning\",\n                \"degree_grade\": \"3.57 cgpa\"\n            },\n            {\n                \"time_period\": {\n                    \"start\": {\n                        \"year\": \"2011\"\n                    },\n                    \"end\": {\n                        \"year\": \"2013\"\n                    }\n                },\n                \"_id\": \"5da9a1751c98c72a58900a71\",\n                \"school_name\": \"Govt. Dyal Singh College,Lahore\",\n                \"degree_name\": \"Bachelor's degree\",\n                \"field_of_study\": \"E-Commerce\",\n                \"description\": \"Gather the wisdom of east and west\",\n                \"degree_grade\": \"Ist Division\"\n            },\n            {\n                \"time_period\": {\n                    \"start\": {\n                        \"year\": \"2009\"\n                    },\n                    \"end\": {\n                        \"year\": \"2011\"\n                    }\n                },\n                \"_id\": \"5da9a1751c98c72a58900a70\",\n                \"school_name\": \"Govt. Shalimar College,Lahore\",\n                \"degree_name\": \"Associates Degree\",\n                \"field_of_study\": \"Pre-Engineering\",\n                \"description\": \"Nice Institute\",\n                \"degree_grade\": \"Ist Division\"\n            },\n            {\n                \"time_period\": {\n                    \"start\": {\n                        \"year\": \"2007\"\n                    },\n                    \"end\": {\n                        \"year\": \"2009\"\n                    }\n                },\n                \"_id\": \"5da9a1751c98c72a58900a6f\",\n                \"school_name\": \"P.R High School,Lahore\",\n                \"degree_name\": \"High School\",\n                \"field_of_study\": \"Science\",\n                \"description\": \"Nice Institute with nice teachers\",\n                \"degree_grade\": \"Ist Division\"\n            }\n        ],\n        \"certifications\": [\n            {\n                \"_id\": \"5da9a1751c98c72a58900a74\",\n                \"institute_name\": \"https://acloud.guru\",\n                \"certification_name\": \"Introduction to AWS\"\n            }\n        ],\n        \"volunteer_experiences\": [\n            {\n                \"_id\": \"5da9a1751c98c72a58900a75\",\n                \"role\": \"Mentor\",\n                \"organization_name\": \"Django Girls\",\n                \"description\": \"I served a day with Django Girls Event at ITU as a Mentor. Django Girls organize free Python and Django workshops, create open sourced online tutorials and curate amazing first experiences with technology.\",\n                \"cause\": \"Science and Technology\"\n            }\n        ],\n        \"skills\": [\n            {\n                \"_id\": \"5da9a1751c98c72a58900a7a\",\n                \"name\": \"Python\",\n                \"endorsement_count\": \"8\"\n            },\n            {\n                \"_id\": \"5da9a1751c98c72a58900a79\",\n                \"name\": \"Django\",\n                \"endorsement_count\": \"8\"\n            },\n            {\n                \"_id\": \"5da9a1751c98c72a58900a78\",\n                \"name\": \"MySQL\",\n                \"endorsement_count\": \"10\"\n            },\n            {\n                \"_id\": \"5da9a1751c98c72a58900a77\",\n                \"name\": \"boto\",\n                \"endorsement_count\": \"5\"\n            },\n            {\n                \"_id\": \"5da9a1751c98c72a58900a76\",\n                \"name\": \"CKEditor\",\n                \"endorsement_count\": \"4\"\n            }\n        ],\n        \"projects\": [\n            {\n                \"time_period\": {\n                    \"start\": {\n                        \"month\": \"Jan\"\n                    },\n                    \"end\": {\n                        \"month\": \"Jan\"\n                    }\n                },\n                \"_id\": \"5da9a1751c98c72a58900a7c\",\n                \"name\": \"Online Job Shop\",\n                \"description\": \"Tools and Technologies:: C#,WebRTC,Asp.Net,SignalR,Visual Studio 2013\\nDescription::\\nAn web application, providing complete replacement of manual job system.Employer can post job and job seeker can apply to that job.Employer take the Interview fortheir final selection.\\nFeatures:\\n•\\tUser can create and manage his account.\\n•       Employer can create and manage Job\\n•\\tJob seeker can create or upload his C.V.\\n•       Job Seeker can Apply to job\\n•\\tEmployer can Interview the selected Job Seeker.\\n•\\tJob Seeker and Employer can search for Jobs and Job Seeker respectively.\",\n                \"url\": null\n            },\n            {\n                \"time_period\": {\n                    \"start\": {\n                        \"month\": \"Apr 2015\"\n                    },\n                    \"end\": {\n                        \"month\": \"Apr 2015\"\n                    }\n                },\n                \"_id\": \"5da9a1751c98c72a58900a7b\",\n                \"name\": \"One to One Video Call\",\n                \"description\": \"Tools and Techniques:: C# , ASP.NET , WebRTC , Alertify , SignalR , Visual Studio 2013\\nDescription::\\nIt uses the chrome WebRTC API for one to one video call means you noting have to install and for Signalling it uses the  SignalR  API.WebRTC is written in javascript  core level and giving a high quality of video streaming.you do not need a space for video streaming.\",\n                \"url\": null\n            }\n        ],\n        \"publications\": [],\n        \"currentEmployer\": [],\n        \"previousEmployees\": [],\n        \"__v\": 0\n    },\n    {\n        \"introduction\": {\n            \"first_name\": \"Zubair\",\n            \"last_name\": \"Arif\",\n            \"picture\": \"\",\n            \"country\": \"Pakistan\",\n            \"region\": \"asia\",\n            \"location_name\": \"Lahore, Pakistan\",\n            \"headline\": \"Full Stack Developer\",\n            \"public_identifier\": \"ehsaan-israr-812991aa\"\n        },\n        \"summary\": {\n            \"text\": \"An innovative thinker, initiative taker and multi dimensional professional with exceptional logical and analytical skills with ability to Implement new ideas in a wide variety of business applications, use new technologies and develop        applications with eye catching features.\"\n        },\n        \"_id\": \"5da9a20d1c98c72a58900a7d\",\n        \"employeeId\": \"5da991368d78ff7f3fbbb85f\",\n        \"projectId\": \"5da1e4df1562722830f697fc\",\n        \"experiences\": [\n            {\n                \"time_period\": {\n                    \"start\": {\n                        \"month\": \"Apr\",\n                        \"year\": \"2018\"\n                    },\n                    \"end\": {\n                        \"month\": \"Jun\",\n                        \"year\": \"2019\"\n                    }\n                },\n                \"_id\": \"5da9a20d1c98c72a58900a7e\",\n                \"position_name\": \"Full Stack Developer\",\n                \"company_name\": \"xiQ, Inc.\",\n                \"location_name\": \"Pakistan\",\n                \"description\": \"xiQ Inc. is Account based marketing (ABM) Company. This product help companies to curate, personalize and publish contents to mobile apps (iphone, ipad and android), web apps , salesforce app and email in minutes. It also provide user management, contacts management, reports module and dashboards module.  Following are some of the majors on which I worked on in python/django project:  Added campaign management tool  Added contact list management tool  Added customize user permissions system  Added logging system  Added personalization of email  Sending and scheduling of emails  Added different highcharts in dashboards\"\n            }\n        ],\n        \"educations\": [\n            {\n                \"time_period\": {\n                    \"start\": {\n                        \"year\": \"2018\"\n                    },\n                    \"end\": {\n                        \"year\": \"2018\"\n                    }\n                },\n                \"_id\": \"5da9a20d1c98c72a58900a83\",\n                \"school_name\": \"PUCIT\",\n                \"degree_name\": \"nasn\",\n                \"field_of_study\": \"Business Administration and Management, General\",\n                \"description\": \"Located in the heart of Lahore, neighboring the buzzing Anarkali Bazar and the Mall Road, PUCIT is the largest institution of higher learning in Pakistan in Computer Science, Information Technology, and Software Engineering. The College took a modest...\",\n                \"degree_grade\": \"3.0/4.0\"\n            },\n            {\n                \"time_period\": {\n                    \"start\": {\n                        \"year\": \"2013\"\n                    },\n                    \"end\": {\n                        \"year\": \"2015\"\n                    }\n                },\n                \"_id\": \"5da9a20d1c98c72a58900a82\",\n                \"school_name\": \"University of the Punjab, Lahore\",\n                \"degree_name\": \"Master in Computer Science\",\n                \"field_of_study\": \"CS\",\n                \"description\": \"Providing a high level Enviroment of Learning\",\n                \"degree_grade\": \"3.57 cgpa\"\n            },\n            {\n                \"time_period\": {\n                    \"start\": {\n                        \"year\": \"2011\"\n                    },\n                    \"end\": {\n                        \"year\": \"2013\"\n                    }\n                },\n                \"_id\": \"5da9a20d1c98c72a58900a81\",\n                \"school_name\": \"Govt. Dyal Singh College,Lahore\",\n                \"degree_name\": \"Bachelor's degree\",\n                \"field_of_study\": \"E-Commerce\",\n                \"description\": \"Gather the wisdom of east and west\",\n                \"degree_grade\": \"Ist Division\"\n            },\n            {\n                \"time_period\": {\n                    \"start\": {\n                        \"year\": \"2009\"\n                    },\n                    \"end\": {\n                        \"year\": \"2011\"\n                    }\n                },\n                \"_id\": \"5da9a20d1c98c72a58900a80\",\n                \"school_name\": \"Govt. Shalimar College,Lahore\",\n                \"degree_name\": \"Associates Degree\",\n                \"field_of_study\": \"Pre-Engineering\",\n                \"description\": \"Nice Institute\",\n                \"degree_grade\": \"Ist Division\"\n            },\n            {\n                \"time_period\": {\n                    \"start\": {\n                        \"year\": \"2007\"\n                    },\n                    \"end\": {\n                        \"year\": \"2009\"\n                    }\n                },\n                \"_id\": \"5da9a20d1c98c72a58900a7f\",\n                \"school_name\": \"P.R High School,Lahore\",\n                \"degree_name\": \"High School\",\n                \"field_of_study\": \"Science\",\n                \"description\": \"Nice Institute with nice teachers\",\n                \"degree_grade\": \"Ist Division\"\n            }\n        ],\n        \"certifications\": [\n            {\n                \"_id\": \"5da9a20d1c98c72a58900a84\",\n                \"institute_name\": \"https://acloud.guru\",\n                \"certification_name\": \"Introduction to AWS\"\n            }\n        ],\n        \"volunteer_experiences\": [\n            {\n                \"_id\": \"5da9a20d1c98c72a58900a85\",\n                \"role\": \"Mentor\",\n                \"organization_name\": \"Django Girls\",\n                \"description\": \"I served a day with Django Girls Event at ITU as a Mentor. Django Girls organize free Python and Django workshops, create open sourced online tutorials and curate amazing first experiences with technology.\",\n                \"cause\": \"Science and Technology\"\n            }\n        ],\n        \"skills\": [\n            {\n                \"_id\": \"5da9a20d1c98c72a58900a8a\",\n                \"name\": \"Python\",\n                \"endorsement_count\": \"8\"\n            },\n            {\n                \"_id\": \"5da9a20d1c98c72a58900a89\",\n                \"name\": \"Django\",\n                \"endorsement_count\": \"8\"\n            },\n            {\n                \"_id\": \"5da9a20d1c98c72a58900a88\",\n                \"name\": \"MySQL\",\n                \"endorsement_count\": \"10\"\n            },\n            {\n                \"_id\": \"5da9a20d1c98c72a58900a87\",\n                \"name\": \"boto\",\n                \"endorsement_count\": \"5\"\n            },\n            {\n                \"_id\": \"5da9a20d1c98c72a58900a86\",\n                \"name\": \"CKEditor\",\n                \"endorsement_count\": \"4\"\n            }\n        ],\n        \"projects\": [\n            {\n                \"time_period\": {\n                    \"start\": {\n                        \"month\": \"Jan\"\n                    },\n                    \"end\": {\n                        \"month\": \"Jan\"\n                    }\n                },\n                \"_id\": \"5da9a20d1c98c72a58900a8c\",\n                \"name\": \"Online Job Shop\",\n                \"description\": \"Tools and Technologies:: C#,WebRTC,Asp.Net,SignalR,Visual Studio 2013\\nDescription::\\nAn web application, providing complete replacement of manual job system.Employer can post job and job seeker can apply to that job.Employer take the Interview fortheir final selection.\\nFeatures:\\n•\\tUser can create and manage his account.\\n•       Employer can create and manage Job\\n•\\tJob seeker can create or upload his C.V.\\n•       Job Seeker can Apply to job\\n•\\tEmployer can Interview the selected Job Seeker.\\n•\\tJob Seeker and Employer can search for Jobs and Job Seeker respectively.\",\n                \"url\": null\n            },\n            {\n                \"time_period\": {\n                    \"start\": {\n                        \"month\": \"Apr 2015\"\n                    },\n                    \"end\": {\n                        \"month\": \"Apr 2015\"\n                    }\n                },\n                \"_id\": \"5da9a20d1c98c72a58900a8b\",\n                \"name\": \"One to One Video Call\",\n                \"description\": \"Tools and Techniques:: C# , ASP.NET , WebRTC , Alertify , SignalR , Visual Studio 2013\\nDescription::\\nIt uses the chrome WebRTC API for one to one video call means you noting have to install and for Signalling it uses the  SignalR  API.WebRTC is written in javascript  core level and giving a high quality of video streaming.you do not need a space for video streaming.\",\n                \"url\": null\n            }\n        ],\n        \"publications\": [],\n        \"currentEmployer\": [],\n        \"previousEmployees\": [],\n        \"__v\": 0\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/expert/routes/expertRoute.js",
    "groupTitle": "Expert",
    "name": "PostApiExpertGetbyprojectCustomprofile"
  },
  {
    "group": "Expert",
    "type": "post",
    "url": "/api/expert/search",
    "title": "Search Expert",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "auth-token",
            "description": "<p>JWT Token need to be assigned against this</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "region",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "previousCompany",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "currentCompany",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "find",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/expert/routes/expertRoute.js",
    "groupTitle": "Expert",
    "name": "PostApiExpertSearch"
  },
  {
    "group": "Expert",
    "type": "post",
    "url": "/api/user/register",
    "title": "Register Expert",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>required</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>required</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>required</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>required</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "linkedInUrl",
            "description": "<p>required</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "projectNumber",
            "description": "<p>required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Successfully registered!...\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/users/routes/usersRoute.js",
    "groupTitle": "Expert",
    "name": "PostApiUserRegister"
  },
  {
    "group": "Invitation",
    "type": "put",
    "url": "/api/invitation",
    "title": "Send Invitaion to Experts",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "auth-token",
            "description": "<p>JWT Token need to be assigned against this</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>required</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>required</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "projectNumber",
            "description": "<p>required</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n     \"message\": \"Successfully Send Invitation!...\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/project/routes/invitationRoutes.js",
    "groupTitle": "Invitation",
    "name": "PutApiInvitation"
  },
  {
    "group": "Project",
    "type": "get",
    "url": "/api/project/all",
    "title": "Get All Project",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "auth-token",
            "description": "<p>JWT Token need to be assigned against this</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n [\n    {\n        \"createdAt\": \"2019-10-18T11:59:41.668Z\",\n        \"_id\": \"5da9acf852c7b4197077943d\",\n        \"projectName\": \"hnb\",\n        \"projectCode\": \"123Abc\",\n        \"projectNumber\": \"147sa\",\n        \"projectOwner\": \"zubair\",\n        \"projectteam\": \"east\",\n        \"clientId\": {\n            \"_id\": \"5da1a17a0334311b24a44832\",\n            \"clientCompany\": \"netsole\",\n            \"prepaid\": true,\n            \"creditRemaining\": 100,\n            \"billingCurrency\": \"USD\",\n            \"pricingRules\": \"This is pricing Rules for the company\",\n            \"pricePerhourCall\": 10,\n            \"entityToInvoice\": \"This is invoice from the company\",\n            \"InvoiceContacts\": [\n                {\n                    \"_id\": \"5da1a17a0334311b24a44835\",\n                    \"name\": \"sahib\"\n                },\n                {\n                    \"_id\": \"5da1a17a0334311b24a44834\",\n                    \"name\": \"hanzala\"\n                },\n                {\n                    \"_id\": \"5da1a17a0334311b24a44833\",\n                    \"name\": \"zubair\"\n                }\n            ],\n            \"vat\": \"1\",\n            \"__v\": 0\n        },\n        \"employeeId\": {\n            \"_id\": \"5da9919847d96214e0708560\",\n            \"name\": \"zubair\",\n            \"email\": \"test@test.com\",\n            \"adminId\": \"5da72d9da4e4c406c836906d\",\n            \"__v\": 0\n        },\n        \"description\": \"This is description\",\n        \"clientContacts\": [\n            {\n                \"_id\": \"5da9acf852c7b4197077943e\",\n                \"email\": \"zubair@gmail.com\",\n                \"name\": \"zubair\"\n            }\n        ],\n        \"projectStatus\": true,\n        \"__v\": 0\n    },\n    {\n        \"createdAt\": \"2019-10-18T12:16:11.249Z\",\n        \"_id\": \"5da9ad744650fc39c458c888\",\n        \"projectName\": \"hnb000\",\n        \"projectCode\": \"123Abc00\",\n        \"projectNumber\": \"147sa00\",\n        \"projectOwner\": \"zubair00\",\n        \"projectteam\": \"east00\",\n        \"clientId\": {\n            \"_id\": \"5da1a17a0334311b24a44832\",\n            \"clientCompany\": \"netsole\",\n            \"prepaid\": true,\n            \"creditRemaining\": 100,\n            \"billingCurrency\": \"USD\",\n            \"pricingRules\": \"This is pricing Rules for the company\",\n            \"pricePerhourCall\": 10,\n            \"entityToInvoice\": \"This is invoice from the company\",\n            \"InvoiceContacts\": [\n                {\n                    \"_id\": \"5da1a17a0334311b24a44835\",\n                    \"name\": \"sahib\"\n                },\n                {\n                    \"_id\": \"5da1a17a0334311b24a44834\",\n                    \"name\": \"hanzala\"\n                },\n               {\n                    \"_id\": \"5da1a17a0334311b24a44833\",\n                    \"name\": \"zubair\"\n                }\n            ],\n            \"vat\": \"1\",\n            \"__v\": 0\n        },\n        \"employeeId\": {\n            \"_id\": \"5da9919847d96214e0708560\",\n            \"name\": \"zubair\",\n            \"email\": \"test@test.com\",\n            \"adminId\": \"5da72d9da4e4c406c836906d\",\n            \"__v\": 0\n        },\n        \"description\": \"This is description\",\n        \"clientContacts\": [\n            {\n                \"_id\": \"5da9ad744650fc39c458c889\",\n                \"email\": \"zubair@gmail.com\",\n                \"name\": \"zubair\"\n            }\n        ],\n        \"projectStatus\": true,\n        \"__v\": 0\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/project/routes/projectRoute.js",
    "groupTitle": "Project",
    "name": "GetApiProjectAll"
  },
  {
    "group": "Project",
    "type": "get",
    "url": "/api/project/employee",
    "title": "Get Project By Employee",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "auth-token",
            "description": "<p>JWT Token need to be assigned against this</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n [\n    {\n        \"createdAt\": \"2019-10-18T11:59:41.668Z\",\n        \"_id\": \"5da9acf852c7b4197077943d\",\n        \"projectName\": \"hnb\",\n        \"projectCode\": \"123Abc\",\n        \"projectNumber\": \"147sa\",\n        \"projectOwner\": \"zubair\",\n        \"projectteam\": \"east\",\n        \"clientId\": \"5da1a17a0334311b24a44832\",\n        \"employeeId\": \"5da9919847d96214e0708560\",\n        \"description\": \"This is description\",\n        \"clientContacts\": [\n            {\n                \"_id\": \"5da9acf852c7b4197077943e\",\n                \"email\": \"zubair@gmail.com\",\n                \"name\": \"zubair\"\n            }\n        ],\n        \"projectStatus\": true,\n        \"__v\": 0\n    },\n    {\n        \"createdAt\": \"2019-10-18T12:16:11.249Z\",\n        \"_id\": \"5da9ad744650fc39c458c888\",\n        \"projectName\": \"hnb000\",\n        \"projectCode\": \"123Abc00\",\n        \"projectNumber\": \"147sa00\",\n        \"projectOwner\": \"zubair00\",\n        \"projectteam\": \"east00\",\n        \"clientId\": \"5da1a17a0334311b24a44832\",\n        \"employeeId\": \"5da9919847d96214e0708560\",\n        \"description\": \"This is description\",\n        \"clientContacts\": [\n            {\n                \"_id\": \"5da9ad744650fc39c458c889\",\n                \"email\": \"zubair@gmail.com\",\n                \"name\": \"zubair\"\n            }\n        ],\n        \"projectStatus\": true,\n        \"__v\": 0\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/project/routes/projectRoute.js",
    "groupTitle": "Project",
    "name": "GetApiProjectEmployee"
  },
  {
    "group": "Project",
    "type": "get",
    "url": "/api/project/:projectId",
    "title": "Get Project",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "auth-token",
            "description": "<p>JWT Token need to be assigned against this</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "projectId",
            "description": "<p>required</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n    \"createdAt\": \"2019-10-18T12:16:11.249Z\",\n    \"_id\": \"5da9ad744650fc39c458c888\",\n    \"projectName\": \"hnb000\",\n    \"projectCode\": \"123Abc00\",\n    \"projectNumber\": \"147sa00\",\n    \"projectOwner\": \"zubair00\",\n    \"projectteam\": \"east00\",\n    \"clientId\": {\n        \"_id\": \"5da1a17a0334311b24a44832\",\n        \"clientCompany\": \"netsole\",\n        \"prepaid\": true,\n        \"creditRemaining\": 100,\n        \"billingCurrency\": \"USD\",\n        \"pricingRules\": \"This is pricing Rules for the company\",\n        \"pricePerhourCall\": 10,\n        \"entityToInvoice\": \"This is invoice from the company\",\n        \"InvoiceContacts\": [\n            {\n                \"_id\": \"5da1a17a0334311b24a44835\",\n                \"name\": \"sahib\"\n            },\n            {\n                \"_id\": \"5da1a17a0334311b24a44834\",\n                \"name\": \"hanzala\"\n            },\n            {\n                \"_id\": \"5da1a17a0334311b24a44833\",\n                \"name\": \"zubair\"\n            }\n        ],\n        \"vat\": \"1\",\n        \"__v\": 0\n    },\n    \"employeeId\": \"5da9919847d96214e0708560\",\n    \"description\": \"This is description\",\n    \"clientContacts\": [\n        {\n            \"_id\": \"5da9ad744650fc39c458c889\",\n            \"email\": \"zubair@gmail.com\",\n            \"name\": \"zubair\"\n        }\n    ],\n    \"projectStatus\": true,\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/project/routes/projectRoute.js",
    "groupTitle": "Project",
    "name": "GetApiProjectProjectid"
  },
  {
    "group": "Project",
    "type": "post",
    "url": "/api/project/create",
    "title": "Create Project",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "auth-token",
            "description": "<p>JWT Token need to be assigned against this</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "projectName",
            "description": "<p>required</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "projectCode",
            "description": "<p>required</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "projectNumber",
            "description": "<p>required</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "projectOwner",
            "description": "<p>required</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "projectteam",
            "description": "<p>required</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "clientId",
            "description": "<p>required</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>required</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "projectStatus",
            "description": "<p>required</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "employeeId",
            "description": "<p>required</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "clientContacts",
            "description": "<p>required</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientContacts.email",
            "description": "<p>required</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientContacts.name",
            "description": "<p>required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Successfully Created Project!...\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/project/routes/projectRoute.js",
    "groupTitle": "Project",
    "name": "PostApiProjectCreate"
  },
  {
    "group": "Project",
    "type": "post",
    "url": "/api/project/get/expert",
    "title": "Get Expert By Project",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "auth-token",
            "description": "<p>JWT Token need to be assigned against this</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "projectId",
            "description": "<p>required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n     \"_id\": \"5da393e8f6b725278c5571db\",\n     \"employeeId\": \"5da9919847d96214e0708560\",\n     \"experts\": [\n         {\n             \"_id\": \"5da393e8f6b725278c5571dc\",\n             \"expertId\": {\n                 \"introduction\": {\n                     \"last_name\": \"Peters\",\n                     \"public_identifier\": \"michaelpeters13\",\n                     \"picture\": \"https://user-profile-images.s3.us-east-2.amazonaws.com/15684587440cd376a6-71c4-467d-a196-6e047ab25367\",\n                     \"headline\": \"Senior Healthcare Strategy Consultant at HDR\",\n                     \"location_name\": \"Clearwater, Florida\",\n                     \"first_name\": \"Michael\"\n                 },\n                 \"_id\": \"5d8a91949e470a24404d2d9e\"\n             }\n         }\n     ],\n     \"projectId\": \"5da9ad744650fc39c458c888\",\n     \"__v\": 0\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/project/routes/projectRoute.js",
    "groupTitle": "Project",
    "name": "PostApiProjectGetExpert"
  },
  {
    "group": "Project",
    "type": "put",
    "url": "/api/project",
    "title": "Update Project Employee",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "auth-token",
            "description": "<p>JWT Token need to be assigned against this</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "projectId",
            "description": "<p>required</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "employeeId",
            "description": "<p>required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n     \"message\": \"Successfully Changed Employee!...\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/project/routes/projectRoute.js",
    "groupTitle": "Project",
    "name": "PutApiProject"
  },
  {
    "group": "Roles",
    "type": "post",
    "url": "/api/roles",
    "title": "Create Role",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n      \"message\": \"succeed\",\n      \"id\": \"5da995c348871e2900bcf37b\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/users/routes/rolesRoute.js",
    "groupTitle": "Roles",
    "name": "PostApiRoles"
  }
] });
