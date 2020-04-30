$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Join22.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    }
  ],
  "line": 6,
  "name": "Join 22",
  "description": "",
  "id": "join-22",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 9,
  "name": "Join 22",
  "description": "",
  "id": "join-22;join-22",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@Smoke"
    },
    {
      "line": 8,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user is in the Join  22 page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user enters \"Parigul\" in the first name text box",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enters \"GulJan\" in the last name text box",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user select Country/Region \"USA\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user enters \"22191\" in zip/postalcode text box",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enters \"Parigul@hotmail.com\" in the email text box",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enters \"Parigulgulmjan!\" in password text box",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user confirms \"Parigulgulmjan!\" in password text box",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user Close the Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "22",
      "offset": 21
    }
  ],
  "location": "JoinMTwentytow.user_is_in_the_Join_page(int)"
});
formatter.result({
  "duration": 15723984314,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Parigul",
      "offset": 13
    }
  ],
  "location": "JoinMTwentytow.user_enters_in_the_first_name_text_box(String)"
});
formatter.result({
  "duration": 3605397240,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GulJan",
      "offset": 13
    }
  ],
  "location": "JoinMTwentytow.user_enters_in_the_last_name_text_box(String)"
});
formatter.result({
  "duration": 3518207703,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "USA",
      "offset": 28
    }
  ],
  "location": "JoinMTwentytow.user_select_Country_Region(String)"
});
formatter.result({
  "duration": 186549596,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22191",
      "offset": 13
    }
  ],
  "location": "JoinMTwentytow.user_enters_in_zip_postalcode_text_box(String)"
});
formatter.result({
  "duration": 165547361,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Parigul@hotmail.com",
      "offset": 13
    }
  ],
  "location": "JoinMTwentytow.user_enters_in_the_email_text_box(String)"
});
formatter.result({
  "duration": 536016188,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Parigulgulmjan!",
      "offset": 13
    }
  ],
  "location": "JoinMTwentytow.user_enters_in_password_text_box(String)"
});
formatter.result({
  "duration": 308057973,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Parigulgulmjan!",
      "offset": 15
    }
  ],
  "location": "JoinMTwentytow.user_confirms_in_password_text_box(String)"
});
formatter.result({
  "duration": 334670226,
  "status": "passed"
});
formatter.match({
  "location": "JoinMTwentytow.user_Close_the_Page()"
});
formatter.result({
  "duration": 446645843,
  "status": "passed"
});
formatter.uri("Join22Data.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    }
  ],
  "line": 4,
  "name": "Join with Data Table",
  "description": "",
  "id": "join-with-data-table",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Join with Data Table",
  "description": "",
  "id": "join-with-data-table;join-with-data-table",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Smoke"
    },
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user is in the Join  22 page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user enters \"\u003cFirstName\u003e\" in first name text box",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user enters \"\u003cLastName\u003e\" in last name text box",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user select Country/Region \"USA\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user enters \"\u003cZipCode\u003e\" in zip/postalcode text box",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enters \"\u003cEmail\u003e\" in email text box",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enters \"\u003cPassword\u003e\" in password text box",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user confirms \"\u003cConfirmPassword\u003e\" in password text box",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user Close the Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "join-with-data-table;join-with-data-table;",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "ZipCode",
        "Email",
        "Password",
        "ConfrimPassword"
      ],
      "line": 21,
      "id": "join-with-data-table;join-with-data-table;;1"
    },
    {
      "cells": [
        "Parigul",
        "Gulali",
        "22191",
        "Parigul@hotmail.com",
        "Parigul@1",
        "Parigul@gmail.com"
      ],
      "line": 22,
      "id": "join-with-data-table;join-with-data-table;;2"
    },
    {
      "cells": [
        "Qarigul",
        "Qulali",
        "22192",
        "Qarigul@hotmail.com",
        "Qarigul@1",
        "Qarigul@gmail.com"
      ],
      "line": 23,
      "id": "join-with-data-table;join-with-data-table;;3"
    },
    {
      "cells": [
        "Sarigul",
        "Sulali",
        "22195",
        "Sarigul@hotmail.com",
        "Sarigul@1",
        "Sarigul@gmail.com"
      ],
      "line": 24,
      "id": "join-with-data-table;join-with-data-table;;4"
    },
    {
      "cells": [
        "Parigul",
        "Gulali",
        "22191",
        "Parigul@hotmail.com",
        "Parigul@1",
        "Parigul@gmail.com"
      ],
      "line": 25,
      "id": "join-with-data-table;join-with-data-table;;5"
    },
    {
      "cells": [
        "KHrigul",
        "KHlali",
        "22080",
        "KHrigul@hotmail.com",
        "KHrigul@1",
        "KHrigul@gmail.com"
      ],
      "line": 26,
      "id": "join-with-data-table;join-with-data-table;;6"
    },
    {
      "cells": [
        "Parigul",
        "Gulali",
        "22191",
        "Parigul@hotmail.com",
        "Parigul@1",
        "Parigul@gmail.com"
      ],
      "line": 27,
      "id": "join-with-data-table;join-with-data-table;;7"
    },
    {
      "cells": [
        "SPOigul",
        "SPOali",
        "22079",
        "SPOigul@hotmail.com",
        "SPOigul@1",
        "SPOigul@gmail.com"
      ],
      "line": 28,
      "id": "join-with-data-table;join-with-data-table;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 22,
  "name": "Join with Data Table",
  "description": "",
  "id": "join-with-data-table;join-with-data-table;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Smoke"
    },
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user is in the Join  22 page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user enters \"Parigul\" in first name text box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user enters \"Gulali\" in last name text box",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user select Country/Region \"USA\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user enters \"22191\" in zip/postalcode text box",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enters \"Parigul@hotmail.com\" in email text box",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enters \"Parigul@1\" in password text box",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user confirms \"\u003cConfirmPassword\u003e\" in password text box",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user Close the Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "22",
      "offset": 21
    }
  ],
  "location": "JoinMTwentytow.user_is_in_the_Join_page(int)"
});
formatter.result({
  "duration": 9261119875,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Parigul",
      "offset": 13
    }
  ],
  "location": "JoinMTwentytow.user_enters_in_first_name_text_box(String)"
});
formatter.result({
  "duration": 2691478498,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gulali",
      "offset": 13
    }
  ],
  "location": "JoinMTwentytow.user_enters_in_last_name_text_box(String)"
});
formatter.result({
  "duration": 2708831261,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "USA",
      "offset": 28
    }
  ],
  "location": "JoinMTwentytow.user_select_Country_Region(String)"
});
formatter.result({
  "duration": 152878792,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22191",
      "offset": 13
    }
  ],
  "location": "JoinMTwentytow.user_enters_in_zip_postalcode_text_box(String)"
});
formatter.result({
  "duration": 208967895,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Parigul@hotmail.com",
      "offset": 13
    }
  ],
  "location": "JoinMTwentytow.user_enters_in_email_text_box(String)"
});
formatter.result({
  "duration": 437816597,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Parigul@1",
      "offset": 13
    }
  ],
  "location": "JoinMTwentytow.user_enters_in_password_text_box(String)"
});
formatter.result({
  "duration": 374956596,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cConfirmPassword\u003e",
      "offset": 15
    }
  ],
  "location": "JoinMTwentytow.user_confirms_in_password_text_box(String)"
});
formatter.result({
  "duration": 703439445,
  "status": "passed"
});
formatter.match({
  "location": "JoinMTwentytow.user_Close_the_Page()"
});
formatter.result({
  "duration": 421325144,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Join with Data Table",
  "description": "",
  "id": "join-with-data-table;join-with-data-table;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Smoke"
    },
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user is in the Join  22 page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user enters \"Qarigul\" in first name text box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user enters \"Qulali\" in last name text box",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user select Country/Region \"USA\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user enters \"22192\" in zip/postalcode text box",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enters \"Qarigul@hotmail.com\" in email text box",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enters \"Qarigul@1\" in password text box",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user confirms \"\u003cConfirmPassword\u003e\" in password text box",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user Close the Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "22",
      "offset": 21
    }
  ],
  "location": "JoinMTwentytow.user_is_in_the_Join_page(int)"
});
formatter.result({
  "duration": 8771692083,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qarigul",
      "offset": 13
    }
  ],
  "location": "JoinMTwentytow.user_enters_in_first_name_text_box(String)"
});
formatter.result({
  "duration": 2267499157,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qulali",
      "offset": 13
    }
  ],
  "location": "JoinMTwentytow.user_enters_in_last_name_text_box(String)"
});
formatter.result({
  "duration": 922909896,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "USA",
      "offset": 28
    }
  ],
  "location": "JoinMTwentytow.user_select_Country_Region(String)"
});
formatter.result({
  "duration": 212567234,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22192",
      "offset": 13
    }
  ],
  "location": "JoinMTwentytow.user_enters_in_zip_postalcode_text_box(String)"
});
formatter.result({
  "duration": 162554967,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qarigul@hotmail.com",
      "offset": 13
    }
  ],
  "location": "JoinMTwentytow.user_enters_in_email_text_box(String)"
});
formatter.result({
  "duration": 2443252382,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qarigul@1",
      "offset": 13
    }
  ],
  "location": "JoinMTwentytow.user_enters_in_password_text_box(String)"
});
formatter.result({
  "duration": 275970894,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cConfirmPassword\u003e",
      "offset": 15
    }
  ],
  "location": "JoinMTwentytow.user_confirms_in_password_text_box(String)"
});
formatter.result({
  "duration": 297051616,
  "status": "passed"
});
formatter.match({
  "location": "JoinMTwentytow.user_Close_the_Page()"
});
formatter.result({
  "duration": 288258531,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Join with Data Table",
  "description": "",
  "id": "join-with-data-table;join-with-data-table;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Smoke"
    },
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user is in the Join  22 page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user enters \"Sarigul\" in first name text box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user enters \"Sulali\" in last name text box",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user select Country/Region \"USA\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user enters \"22195\" in zip/postalcode text box",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enters \"Sarigul@hotmail.com\" in email text box",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enters \"Sarigul@1\" in password text box",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user confirms \"\u003cConfirmPassword\u003e\" in password text box",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user Close the Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "22",
      "offset": 21
    }
  ],
  "location": "JoinMTwentytow.user_is_in_the_Join_page(int)"
});
formatter.result({
  "duration": 9371851607,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sarigul",
      "offset": 13
    }
  ],
  "location": "JoinMTwentytow.user_enters_in_first_name_text_box(String)"
});
formatter.result({
  "duration": 5757263500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sulali",
      "offset": 13
    }
  ],
  "location": "JoinMTwentytow.user_enters_in_last_name_text_box(String)"
});
formatter.result({
  "duration": 217542365,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "USA",
      "offset": 28
    }
  ],
  "location": "JoinMTwentytow.user_select_Country_Region(String)"
});
formatter.result({
  "duration": 54905212,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22195",
      "offset": 13
    }
  ],
  "location": "JoinMTwentytow.user_enters_in_zip_postalcode_text_box(String)"
});
formatter.result({
  "duration": 211383754,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sarigul@hotmail.com",
      "offset": 13
    }
  ],
  "location": "JoinMTwentytow.user_enters_in_email_text_box(String)"
});
formatter.result({
  "duration": 405781707,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sarigul@1",
      "offset": 13
    }
  ],
  "location": "JoinMTwentytow.user_enters_in_password_text_box(String)"
});
formatter.result({
  "duration": 348366531,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cConfirmPassword\u003e",
      "offset": 15
    }
  ],
  "location": "JoinMTwentytow.user_confirms_in_password_text_box(String)"
});
formatter.result({
  "duration": 530240152,
  "status": "passed"
});
formatter.match({
  "location": "JoinMTwentytow.user_Close_the_Page()"
});
formatter.result({
  "duration": 2407088875,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Join with Data Table",
  "description": "",
  "id": "join-with-data-table;join-with-data-table;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Smoke"
    },
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user is in the Join  22 page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user enters \"Parigul\" in first name text box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user enters \"Gulali\" in last name text box",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user select Country/Region \"USA\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user enters \"22191\" in zip/postalcode text box",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enters \"Parigul@hotmail.com\" in email text box",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enters \"Parigul@1\" in password text box",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user confirms \"\u003cConfirmPassword\u003e\" in password text box",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user Close the Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "22",
      "offset": 21
    }
  ],
  "location": "JoinMTwentytow.user_is_in_the_Join_page(int)"
});
formatter.result({
  "duration": 9522307144,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Parigul",
      "offset": 13
    }
  ],
  "location": "JoinMTwentytow.user_enters_in_first_name_text_box(String)"
});
formatter.result({
  "duration": 2758536974,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gulali",
      "offset": 13
    }
  ],
  "location": "JoinMTwentytow.user_enters_in_last_name_text_box(String)"
});
formatter.result({
  "duration": 358590477,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "USA",
      "offset": 28
    }
  ],
  "location": "JoinMTwentytow.user_select_Country_Region(String)"
});
formatter.result({
  "duration": 81461991,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22191",
      "offset": 13
    }
  ],
  "location": "JoinMTwentytow.user_enters_in_zip_postalcode_text_box(String)"
});
formatter.result({
  "duration": 212206025,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Parigul@hotmail.com",
      "offset": 13
    }
  ],
  "location": "JoinMTwentytow.user_enters_in_email_text_box(String)"
});
formatter.result({
  "duration": 580429118,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Parigul@1",
      "offset": 13
    }
  ],
  "location": "JoinMTwentytow.user_enters_in_password_text_box(String)"
});
formatter.result({
  "duration": 287889516,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cConfirmPassword\u003e",
      "offset": 15
    }
  ],
  "location": "JoinMTwentytow.user_confirms_in_password_text_box(String)"
});
formatter.result({
  "duration": 358260499,
  "status": "passed"
});
formatter.match({
  "location": "JoinMTwentytow.user_Close_the_Page()"
});
formatter.result({
  "duration": 143726554,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Join with Data Table",
  "description": "",
  "id": "join-with-data-table;join-with-data-table;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Smoke"
    },
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user is in the Join  22 page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user enters \"KHrigul\" in first name text box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user enters \"KHlali\" in last name text box",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user select Country/Region \"USA\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user enters \"22080\" in zip/postalcode text box",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enters \"KHrigul@hotmail.com\" in email text box",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enters \"KHrigul@1\" in password text box",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user confirms \"\u003cConfirmPassword\u003e\" in password text box",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user Close the Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "22",
      "offset": 21
    }
  ],
  "location": "JoinMTwentytow.user_is_in_the_Join_page(int)"
});
formatter.result({
  "duration": 9214531069,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "KHrigul",
      "offset": 13
    }
  ],
  "location": "JoinMTwentytow.user_enters_in_first_name_text_box(String)"
});
formatter.result({
  "duration": 2425788667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "KHlali",
      "offset": 13
    }
  ],
  "location": "JoinMTwentytow.user_enters_in_last_name_text_box(String)"
});
formatter.result({
  "duration": 2605154792,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "USA",
      "offset": 28
    }
  ],
  "location": "JoinMTwentytow.user_select_Country_Region(String)"
});
formatter.result({
  "duration": 85464452,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22080",
      "offset": 13
    }
  ],
  "location": "JoinMTwentytow.user_enters_in_zip_postalcode_text_box(String)"
});
formatter.result({
  "duration": 288791508,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "KHrigul@hotmail.com",
      "offset": 13
    }
  ],
  "location": "JoinMTwentytow.user_enters_in_email_text_box(String)"
});
formatter.result({
  "duration": 435491142,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "KHrigul@1",
      "offset": 13
    }
  ],
  "location": "JoinMTwentytow.user_enters_in_password_text_box(String)"
});
formatter.result({
  "duration": 387586947,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cConfirmPassword\u003e",
      "offset": 15
    }
  ],
  "location": "JoinMTwentytow.user_confirms_in_password_text_box(String)"
});
formatter.result({
  "duration": 500236901,
  "status": "passed"
});
formatter.match({
  "location": "JoinMTwentytow.user_Close_the_Page()"
});
formatter.result({
  "duration": 350279412,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Join with Data Table",
  "description": "",
  "id": "join-with-data-table;join-with-data-table;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Smoke"
    },
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user is in the Join  22 page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user enters \"Parigul\" in first name text box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user enters \"Gulali\" in last name text box",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user select Country/Region \"USA\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user enters \"22191\" in zip/postalcode text box",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enters \"Parigul@hotmail.com\" in email text box",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enters \"Parigul@1\" in password text box",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user confirms \"\u003cConfirmPassword\u003e\" in password text box",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user Close the Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "22",
      "offset": 21
    }
  ],
  "location": "JoinMTwentytow.user_is_in_the_Join_page(int)"
});
formatter.result({
  "duration": 9428790924,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Parigul",
      "offset": 13
    }
  ],
  "location": "JoinMTwentytow.user_enters_in_first_name_text_box(String)"
});
formatter.result({
  "duration": 5681019502,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gulali",
      "offset": 13
    }
  ],
  "location": "JoinMTwentytow.user_enters_in_last_name_text_box(String)"
});
formatter.result({
  "duration": 238772666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "USA",
      "offset": 28
    }
  ],
  "location": "JoinMTwentytow.user_select_Country_Region(String)"
});
formatter.result({
  "duration": 40511559,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22191",
      "offset": 13
    }
  ],
  "location": "JoinMTwentytow.user_enters_in_zip_postalcode_text_box(String)"
});
formatter.result({
  "duration": 175798838,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Parigul@hotmail.com",
      "offset": 13
    }
  ],
  "location": "JoinMTwentytow.user_enters_in_email_text_box(String)"
});
formatter.result({
  "duration": 463899572,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Parigul@1",
      "offset": 13
    }
  ],
  "location": "JoinMTwentytow.user_enters_in_password_text_box(String)"
});
formatter.result({
  "duration": 411498979,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cConfirmPassword\u003e",
      "offset": 15
    }
  ],
  "location": "JoinMTwentytow.user_confirms_in_password_text_box(String)"
});
formatter.result({
  "duration": 540946528,
  "status": "passed"
});
formatter.match({
  "location": "JoinMTwentytow.user_Close_the_Page()"
});
formatter.result({
  "duration": 2670352574,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Join with Data Table",
  "description": "",
  "id": "join-with-data-table;join-with-data-table;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Smoke"
    },
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user is in the Join  22 page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user enters \"SPOigul\" in first name text box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user enters \"SPOali\" in last name text box",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user select Country/Region \"USA\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user enters \"22079\" in zip/postalcode text box",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enters \"SPOigul@hotmail.com\" in email text box",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enters \"SPOigul@1\" in password text box",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user confirms \"\u003cConfirmPassword\u003e\" in password text box",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user Close the Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "22",
      "offset": 21
    }
  ],
  "location": "JoinMTwentytow.user_is_in_the_Join_page(int)"
});
formatter.result({
  "duration": 8969377067,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SPOigul",
      "offset": 13
    }
  ],
  "location": "JoinMTwentytow.user_enters_in_first_name_text_box(String)"
});
formatter.result({
  "duration": 1850026073,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SPOali",
      "offset": 13
    }
  ],
  "location": "JoinMTwentytow.user_enters_in_last_name_text_box(String)"
});
formatter.result({
  "duration": 2310371921,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "USA",
      "offset": 28
    }
  ],
  "location": "JoinMTwentytow.user_select_Country_Region(String)"
});
formatter.result({
  "duration": 91630871,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22079",
      "offset": 13
    }
  ],
  "location": "JoinMTwentytow.user_enters_in_zip_postalcode_text_box(String)"
});
formatter.result({
  "duration": 221627424,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SPOigul@hotmail.com",
      "offset": 13
    }
  ],
  "location": "JoinMTwentytow.user_enters_in_email_text_box(String)"
});
formatter.result({
  "duration": 572783349,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SPOigul@1",
      "offset": 13
    }
  ],
  "location": "JoinMTwentytow.user_enters_in_password_text_box(String)"
});
formatter.result({
  "duration": 281202858,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cConfirmPassword\u003e",
      "offset": 15
    }
  ],
  "location": "JoinMTwentytow.user_confirms_in_password_text_box(String)"
});
formatter.result({
  "duration": 427623061,
  "status": "passed"
});
formatter.match({
  "location": "JoinMTwentytow.user_Close_the_Page()"
});
formatter.result({
  "duration": 2283857879,
  "status": "passed"
});
});