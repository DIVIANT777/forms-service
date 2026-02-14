{\rtf1\ansi\ansicpg1251\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const CONTACT_METHODS = [\
  "\uc0\u1079 \u1074 \u1086 \u1085 \u1086 \u1082  \u1085 \u1072  \u1090 \u1077 \u1083 \u1077 \u1092 \u1086 \u1085 ",\
  "\uc0\u1087 \u1086  \u1087 \u1086 \u1095 \u1090 \u1077 ",\
  "\uc0\u1085 \u1072 \u1087 \u1080 \u1089 \u1072 \u1090 \u1100  \u1074  \u1090 \u1077 \u1083 \u1077 \u1075 \u1088 \u1072 \u1084 ",\
  "\uc0\u1074  \u1074 \u1086 \u1090 \u1089 \u1072 \u1087 "\
];\
\
window.FORMS_CONFIG = [\
  // 1\
  \{\
    formId: "form_01",\
    title: "\uc0\u1056 \u1072 \u1073 \u1086 \u1090 \u1072  \u1084 \u1072 \u1088 \u1082 \u1077 \u1090 \u1086 \u1083 \u1086 \u1075 \u1072 ",\
    sheetName: "01_\uc0\u1056 \u1072 \u1073 \u1086 \u1090 \u1072  \u1084 \u1072 \u1088 \u1082 \u1077 \u1090 \u1086 \u1083 \u1086 \u1075 \u1072 ",\
    fields: [\
      \{ name: "clinicName", label: "\uc0\u1053 \u1072 \u1079 \u1074 \u1072 \u1085 \u1080 \u1077  \u1084 \u1077 \u1076 \u1080 \u1094 \u1080 \u1085 \u1089 \u1082 \u1086 \u1075 \u1086  \u1094 \u1077 \u1085 \u1090 \u1088 \u1072 ", type: "text", required: true \},\
      \{ name: "phone", label: "\uc0\u1053 \u1086 \u1084 \u1077 \u1088  \u1090 \u1077 \u1083 \u1077 \u1092 \u1086 \u1085 \u1072 ", type: "text", required: true \},\
      \{ name: "email", label: "\uc0\u1055 \u1086 \u1095 \u1090 \u1072 ", type: "text", required: false \},\
      \{ name: "telegram", label: "\uc0\u1058 \u1077 \u1083 \u1077 \u1075 \u1088 \u1072 \u1084 ", type: "text", required: false \},\
      \{ name: "contactMethod", label: "\uc0\u1055 \u1088 \u1077 \u1076 \u1087 \u1086 \u1095 \u1090 \u1080 \u1090 \u1077 \u1083 \u1100 \u1085 \u1099 \u1081  \u1089 \u1087 \u1086 \u1089 \u1086 \u1073  \u1089 \u1074 \u1103 \u1079 \u1080 ", type: "select", required: true, options: CONTACT_METHODS \}\
    ]\
  \},\
\
  // 2\
  \{\
    formId: "form_02",\
    title: "\uc0\u1055 \u1086 \u1083 \u1085 \u1086 \u1077  \u1084 \u1072 \u1088 \u1082 \u1077 \u1090 \u1080 \u1085 \u1075 \u1086 \u1074 \u1086 \u1077  \u1089 \u1086 \u1087 \u1088 \u1086 \u1074 \u1086 \u1078 \u1076 \u1077 \u1085 \u1080 \u1077 ",\
    sheetName: "02_\uc0\u1055 \u1086 \u1083 \u1085 \u1086 \u1077  \u1089 \u1086 \u1087 \u1088 \u1086 \u1074 \u1086 \u1078 \u1076 \u1077 \u1085 \u1080 \u1077 ",\
    fields: [\
      \{ name: "clinicName", label: "\uc0\u1053 \u1072 \u1079 \u1074 \u1072 \u1085 \u1080 \u1077  \u1084 \u1077 \u1076 \u1080 \u1094 \u1080 \u1085 \u1089 \u1082 \u1086 \u1075 \u1086  \u1094 \u1077 \u1085 \u1090 \u1088 \u1072 ", type: "text", required: true \},\
      \{ name: "phone", label: "\uc0\u1053 \u1086 \u1084 \u1077 \u1088  \u1090 \u1077 \u1083 \u1077 \u1092 \u1086 \u1085 \u1072 ", type: "text", required: true \},\
      \{ name: "email", label: "\uc0\u1055 \u1086 \u1095 \u1090 \u1072 ", type: "text", required: false \},\
      \{ name: "telegram", label: "\uc0\u1058 \u1077 \u1083 \u1077 \u1075 \u1088 \u1072 \u1084 ", type: "text", required: false \},\
      \{ name: "specialistsCount", label: "\uc0\u1050 \u1086 \u1083 \u1080 \u1095 \u1077 \u1089 \u1090 \u1074 \u1086  \u1089 \u1087 \u1077 \u1094 \u1080 \u1072 \u1083 \u1080 \u1089 \u1090 \u1086 \u1074 ", type: "text", required: false \},\
      \{ name: "contactMethod", label: "\uc0\u1055 \u1088 \u1077 \u1076 \u1087 \u1086 \u1095 \u1090 \u1080 \u1090 \u1077 \u1083 \u1100 \u1085 \u1099 \u1081  \u1089 \u1087 \u1086 \u1089 \u1086 \u1073  \u1089 \u1074 \u1103 \u1079 \u1080 ", type: "select", required: true, options: CONTACT_METHODS \}\
    ]\
  \},\
\
  // 3\
  \{\
    formId: "form_03",\
    title: "\uc0\u1047 \u1072 \u1087 \u1080 \u1089 \u1100  \u1085 \u1072  \u1082 \u1086 \u1085 \u1089 \u1091 \u1083 \u1100 \u1090 \u1072 \u1094 \u1080 \u1102 ",\
    sheetName: "03_\uc0\u1050 \u1086 \u1085 \u1089 \u1091 \u1083 \u1100 \u1090 \u1072 \u1094 \u1080 \u1103 ",\
    fields: [\
      \{ name: "fio", label: "\uc0\u1060 \u1048 \u1054 ", type: "text", required: true \},\
      \{ name: "phone", label: "\uc0\u1053 \u1086 \u1084 \u1077 \u1088  \u1090 \u1077 \u1083 \u1077 \u1092 \u1086 \u1085 \u1072 ", type: "text", required: true \},\
      \{ name: "email", label: "\uc0\u1055 \u1086 \u1095 \u1090 \u1072 ", type: "text", required: false \},\
      \{ name: "telegram", label: "\uc0\u1058 \u1077 \u1083 \u1077 \u1075 \u1088 \u1072 \u1084 ", type: "text", required: false \},\
      \{ name: "question", label: "\uc0\u1050 \u1072 \u1082 \u1086 \u1081  \u1091  \u1074 \u1072 \u1089  \u1074 \u1086 \u1087 \u1088 \u1086 \u1089 ", type: "textarea", required: true \},\
      \{ name: "contactMethod", label: "\uc0\u1055 \u1088 \u1077 \u1076 \u1087 \u1086 \u1095 \u1090 \u1080 \u1090 \u1077 \u1083 \u1100 \u1085 \u1099 \u1081  \u1089 \u1087 \u1086 \u1089 \u1086 \u1073  \u1089 \u1074 \u1103 \u1079 \u1080 ", type: "select", required: true, options: CONTACT_METHODS \},\
      \{ name: "desiredTime", label: "\uc0\u1046 \u1077 \u1083 \u1072 \u1077 \u1084 \u1086 \u1077  \u1074 \u1088 \u1077 \u1084 \u1103  \u1076 \u1083 \u1103  \u1082 \u1086 \u1085 \u1089 \u1091 \u1083 \u1100 \u1090 \u1072 \u1094 \u1080 \u1080 ", type: "time", required: true \},\
      \{ name: "desiredDate", label: "\uc0\u1046 \u1077 \u1083 \u1072 \u1077 \u1084 \u1072 \u1103  \u1076 \u1072 \u1090 \u1072  \u1076 \u1083 \u1103  \u1082 \u1086 \u1085 \u1089 \u1091 \u1083 \u1100 \u1090 \u1072 \u1094 \u1080 \u1080 ", type: "date", required: true \}\
    ]\
  \},\
\
  // 4\
  \{\
    formId: "form_04",\
    title: "\uc0\u1040 \u1085 \u1072 \u1083 \u1080 \u1079  \u1074 \u1085 \u1091 \u1090 \u1088 \u1077 \u1085 \u1085 \u1080 \u1093  \u1087 \u1088 \u1086 \u1094 \u1077 \u1089 \u1089 \u1086 \u1074  \u1084 \u1072 \u1088 \u1082 \u1077 \u1090 \u1080 \u1085 \u1075 \u1072 ",\
    sheetName: "04_\uc0\u1042 \u1085 \u1091 \u1090 \u1088 \u1077 \u1085 \u1085 \u1080 \u1077  \u1087 \u1088 \u1086 \u1094 \u1077 \u1089 \u1089 \u1099 ",\
    fields: [\
      \{ name: "clinicName", label: "\uc0\u1053 \u1072 \u1079 \u1074 \u1072 \u1085 \u1080 \u1077  \u1084 \u1077 \u1076 \u1080 \u1094 \u1080 \u1085 \u1089 \u1082 \u1086 \u1075 \u1086  \u1094 \u1077 \u1085 \u1090 \u1088 \u1072 ", type: "text", required: true \},\
      \{ name: "phone", label: "\uc0\u1053 \u1086 \u1084 \u1077 \u1088  \u1090 \u1077 \u1083 \u1077 \u1092 \u1086 \u1085 \u1072 ", type: "text", required: true \},\
      \{ name: "email", label: "\uc0\u1055 \u1086 \u1095 \u1090 \u1072 ", type: "text", required: false \},\
      \{ name: "telegram", label: "\uc0\u1058 \u1077 \u1083 \u1077 \u1075 \u1088 \u1072 \u1084 ", type: "text", required: false \},\
      \{ name: "contactMethod", label: "\uc0\u1055 \u1088 \u1077 \u1076 \u1087 \u1086 \u1095 \u1090 \u1080 \u1090 \u1077 \u1083 \u1100 \u1085 \u1099 \u1081  \u1089 \u1087 \u1086 \u1089 \u1086 \u1073  \u1089 \u1074 \u1103 \u1079 \u1080 ", type: "select", required: true, options: CONTACT_METHODS \}\
    ]\
  \},\
\
  // 5\
  \{\
    formId: "form_05",\
    title: "\uc0\u1040 \u1085 \u1072 \u1083 \u1080 \u1079  \u1073 \u1088 \u1077 \u1085 \u1076 \u1072  \u1080  \u1088 \u1077 \u1087 \u1091 \u1090 \u1072 \u1094 \u1080 \u1080 ",\
    sheetName: "05_\uc0\u1041 \u1088 \u1077 \u1085 \u1076  \u1080  \u1088 \u1077 \u1087 \u1091 \u1090 \u1072 \u1094 \u1080 \u1103 ",\
    fields: [\
      \{ name: "clinicName", label: "\uc0\u1053 \u1072 \u1079 \u1074 \u1072 \u1085 \u1080 \u1077  \u1084 \u1077 \u1076 \u1080 \u1094 \u1080 \u1085 \u1089 \u1082 \u1086 \u1075 \u1086  \u1094 \u1077 \u1085 \u1090 \u1088 \u1072 ", type: "text", required: true \},\
      \{ name: "phone", label: "\uc0\u1053 \u1086 \u1084 \u1077 \u1088  \u1090 \u1077 \u1083 \u1077 \u1092 \u1086 \u1085 \u1072 ", type: "text", required: true \},\
      \{ name: "email", label: "\uc0\u1055 \u1086 \u1095 \u1090 \u1072 ", type: "text", required: false \},\
      \{ name: "telegram", label: "\uc0\u1058 \u1077 \u1083 \u1077 \u1075 \u1088 \u1072 \u1084 ", type: "text", required: false \},\
      \{ name: "contactMethod", label: "\uc0\u1055 \u1088 \u1077 \u1076 \u1087 \u1086 \u1095 \u1090 \u1080 \u1090 \u1077 \u1083 \u1100 \u1085 \u1099 \u1081  \u1089 \u1087 \u1086 \u1089 \u1086 \u1073  \u1089 \u1074 \u1103 \u1079 \u1080 ", type: "select", required: true, options: CONTACT_METHODS \}\
    ]\
  \},\
\
  // 6\
  \{\
    formId: "form_06",\
    title: "\uc0\u1040 \u1085 \u1072 \u1083 \u1080 \u1079  \u1074 \u1086 \u1088 \u1086 \u1085 \u1082 \u1080  \u1087 \u1088 \u1086 \u1076 \u1072 \u1078  \u1082 \u1083 \u1080 \u1085 \u1080 \u1082 \u1080 ",\
    sheetName: "06_\uc0\u1042 \u1086 \u1088 \u1086 \u1085 \u1082 \u1072  \u1087 \u1088 \u1086 \u1076 \u1072 \u1078 ",\
    fields: [\
      \{ name: "clinicName", label: "\uc0\u1053 \u1072 \u1079 \u1074 \u1072 \u1085 \u1080 \u1077  \u1084 \u1077 \u1076 \u1080 \u1094 \u1080 \u1085 \u1089 \u1082 \u1086 \u1075 \u1086  \u1094 \u1077 \u1085 \u1090 \u1088 \u1072 ", type: "text", required: true \},\
      \{ name: "phone", label: "\uc0\u1053 \u1086 \u1084 \u1077 \u1088  \u1090 \u1077 \u1083 \u1077 \u1092 \u1086 \u1085 \u1072 ", type: "text", required: true \},\
      \{ name: "email", label: "\uc0\u1055 \u1086 \u1095 \u1090 \u1072 ", type: "text", required: false \},\
      \{ name: "telegram", label: "\uc0\u1058 \u1077 \u1083 \u1077 \u1075 \u1088 \u1072 \u1084 ", type: "text", required: false \},\
      \{ name: "contactMethod", label: "\uc0\u1055 \u1088 \u1077 \u1076 \u1087 \u1086 \u1095 \u1090 \u1080 \u1090 \u1077 \u1083 \u1100 \u1085 \u1099 \u1081  \u1089 \u1087 \u1086 \u1089 \u1086 \u1073  \u1089 \u1074 \u1103 \u1079 \u1080 ", type: "select", required: true, options: CONTACT_METHODS \}\
    ]\
  \},\
\
  // 7\
  \{\
    formId: "form_07",\
    title: "\uc0\u1040 \u1085 \u1072 \u1083 \u1080 \u1079  \u1082 \u1086 \u1085 \u1082 \u1091 \u1088 \u1077 \u1085 \u1090 \u1086 \u1074 ",\
    sheetName: "07_\uc0\u1050 \u1086 \u1085 \u1082 \u1091 \u1088 \u1077 \u1085 \u1090 \u1099 ",\
    fields: [\
      \{ name: "clinicName", label: "\uc0\u1053 \u1072 \u1079 \u1074 \u1072 \u1085 \u1080 \u1077  \u1084 \u1077 \u1076 \u1080 \u1094 \u1080 \u1085 \u1089 \u1082 \u1086 \u1075 \u1086  \u1094 \u1077 \u1085 \u1090 \u1088 \u1072 ", type: "text", required: true \},\
      \{ name: "phone", label: "\uc0\u1053 \u1086 \u1084 \u1077 \u1088  \u1090 \u1077 \u1083 \u1077 \u1092 \u1086 \u1085 \u1072 ", type: "text", required: true \},\
      \{ name: "email", label: "\uc0\u1055 \u1086 \u1095 \u1090 \u1072 ", type: "text", required: false \},\
      \{ name: "telegram", label: "\uc0\u1058 \u1077 \u1083 \u1077 \u1075 \u1088 \u1072 \u1084 ", type: "text", required: false \},\
      \{ name: "contactMethod", label: "\uc0\u1055 \u1088 \u1077 \u1076 \u1087 \u1086 \u1095 \u1090 \u1080 \u1090 \u1077 \u1083 \u1100 \u1085 \u1099 \u1081  \u1089 \u1087 \u1086 \u1089 \u1086 \u1073  \u1089 \u1074 \u1103 \u1079 \u1080 ", type: "select", required: true, options: CONTACT_METHODS \}\
    ]\
  \},\
\
  // 8\
  \{\
    formId: "form_08",\
    title: "\uc0\u1040 \u1085 \u1072 \u1083 \u1080 \u1079  \u1088 \u1072 \u1073 \u1086 \u1090 \u1099  \u1072 \u1076 \u1084 \u1080 \u1085 \u1080 \u1089 \u1090 \u1088 \u1072 \u1090 \u1086 \u1088 \u1086 \u1074 ",\
    sheetName: "08_\uc0\u1040 \u1076 \u1084 \u1080 \u1085 \u1080 \u1089 \u1090 \u1088 \u1072 \u1090 \u1086 \u1088 \u1099 ",\
    fields: [\
      \{ name: "clinicName", label: "\uc0\u1053 \u1072 \u1079 \u1074 \u1072 \u1085 \u1080 \u1077  \u1084 \u1077 \u1076 \u1080 \u1094 \u1080 \u1085 \u1089 \u1082 \u1086 \u1075 \u1086  \u1094 \u1077 \u1085 \u1090 \u1088 \u1072 ", type: "text", required: true \},\
      \{ name: "phone", label: "\uc0\u1053 \u1086 \u1084 \u1077 \u1088  \u1090 \u1077 \u1083 \u1077 \u1092 \u1086 \u1085 \u1072 ", type: "text", required: true \},\
      \{ name: "email", label: "\uc0\u1055 \u1086 \u1095 \u1090 \u1072 ", type: "text", required: false \},\
      \{ name: "telegram", label: "\uc0\u1058 \u1077 \u1083 \u1077 \u1075 \u1088 \u1072 \u1084 ", type: "text", required: false \},\
      \{ name: "contactMethod", label: "\uc0\u1055 \u1088 \u1077 \u1076 \u1087 \u1086 \u1095 \u1090 \u1080 \u1090 \u1077 \u1083 \u1100 \u1085 \u1099 \u1081  \u1089 \u1087 \u1086 \u1089 \u1086 \u1073  \u1089 \u1074 \u1103 \u1079 \u1080 ", type: "select", required: true, options: CONTACT_METHODS \}\
    ]\
  \},\
\
  // 9\
  \{\
    formId: "form_09",\
    title: "\uc0\u1040 \u1085 \u1072 \u1083 \u1080 \u1079  \u1088 \u1077 \u1082 \u1083 \u1072 \u1084 \u1085 \u1099 \u1093  \u1082 \u1072 \u1085 \u1072 \u1083 \u1086 \u1074 ",\
    sheetName: "09_\uc0\u1056 \u1077 \u1082 \u1083 \u1072 \u1084 \u1085 \u1099 \u1077  \u1082 \u1072 \u1085 \u1072 \u1083 \u1099 ",\
    fields: [\
      \{ name: "clinicName", label: "\uc0\u1053 \u1072 \u1079 \u1074 \u1072 \u1085 \u1080 \u1077  \u1084 \u1077 \u1076 \u1080 \u1094 \u1080 \u1085 \u1089 \u1082 \u1086 \u1075 \u1086  \u1094 \u1077 \u1085 \u1090 \u1088 \u1072 ", type: "text", required: true \},\
      \{ name: "phone", label: "\uc0\u1053 \u1086 \u1084 \u1077 \u1088  \u1090 \u1077 \u1083 \u1077 \u1092 \u1086 \u1085 \u1072 ", type: "text", required: true \},\
      \{ name: "email", label: "\uc0\u1055 \u1086 \u1095 \u1090 \u1072 ", type: "text", required: false \},\
      \{ name: "telegram", label: "\uc0\u1058 \u1077 \u1083 \u1077 \u1075 \u1088 \u1072 \u1084 ", type: "text", required: false \},\
      \{ name: "contactMethod", label: "\uc0\u1055 \u1088 \u1077 \u1076 \u1087 \u1086 \u1095 \u1090 \u1080 \u1090 \u1077 \u1083 \u1100 \u1085 \u1099 \u1081  \u1089 \u1087 \u1086 \u1089 \u1086 \u1073  \u1089 \u1074 \u1103 \u1079 \u1080 ", type: "select", required: true, options: CONTACT_METHODS \}\
    ]\
  \},\
\
  // 10\
  \{\
    formId: "form_10",\
    title: "\uc0\u1040 \u1085 \u1072 \u1083 \u1080 \u1079  \u1089 \u1072 \u1081 \u1090 \u1072  \u1080  \u1086 \u1085 \u1083 \u1072 \u1081 \u1085 -\u1087 \u1088 \u1080 \u1089 \u1091 \u1090 \u1089 \u1090 \u1074 \u1080 \u1103 ",\
    sheetName: "10_\uc0\u1057 \u1072 \u1081 \u1090  \u1080  \u1086 \u1085 \u1083 \u1072 \u1081 \u1085 ",\
    fields: [\
      \{ name: "clinicName", label: "\uc0\u1053 \u1072 \u1079 \u1074 \u1072 \u1085 \u1080 \u1077  \u1084 \u1077 \u1076 \u1080 \u1094 \u1080 \u1085 \u1089 \u1082 \u1086 \u1075 \u1086  \u1094 \u1077 \u1085 \u1090 \u1088 \u1072 ", type: "text", required: true \},\
      \{ name: "phone", label: "\uc0\u1053 \u1086 \u1084 \u1077 \u1088  \u1090 \u1077 \u1083 \u1077 \u1092 \u1086 \u1085 \u1072 ", type: "text", required: true \},\
      \{ name: "email", label: "\uc0\u1055 \u1086 \u1095 \u1090 \u1072 ", type: "text", required: false \},\
      \{ name: "telegram", label: "\uc0\u1058 \u1077 \u1083 \u1077 \u1075 \u1088 \u1072 \u1084 ", type: "text", required: false \},\
      \{ name: "contactMethod", label: "\uc0\u1055 \u1088 \u1077 \u1076 \u1087 \u1086 \u1095 \u1090 \u1080 \u1090 \u1077 \u1083 \u1100 \u1085 \u1099 \u1081  \u1089 \u1087 \u1086 \u1089 \u1086 \u1073  \u1089 \u1074 \u1103 \u1079 \u1080 ", type: "select", required: true, options: CONTACT_METHODS \}\
    ]\
  \},\
\
  // 11\
  \{\
    formId: "form_11",\
    title: "\uc0\u1040 \u1085 \u1072 \u1083 \u1080 \u1079  \u1089 \u1086 \u1094 \u1080 \u1072 \u1083 \u1100 \u1085 \u1099 \u1093  \u1089 \u1077 \u1090 \u1077 \u1081  \u1082 \u1083 \u1080 \u1085 \u1080 \u1082 \u1080  \u1080  \u1074 \u1088 \u1072 \u1095 \u1077 \u1081 ",\
    sheetName: "11_\uc0\u1057 \u1086 \u1094 \u1089 \u1077 \u1090 \u1080 ",\
    fields: [\
      \{ name: "clinicName", label: "\uc0\u1053 \u1072 \u1079 \u1074 \u1072 \u1085 \u1080 \u1077  \u1084 \u1077 \u1076 \u1080 \u1094 \u1080 \u1085 \u1089 \u1082 \u1086 \u1075 \u1086  \u1094 \u1077 \u1085 \u1090 \u1088 \u1072 ", type: "text", required: true \},\
      \{ name: "phone", label: "\uc0\u1053 \u1086 \u1084 \u1077 \u1088  \u1090 \u1077 \u1083 \u1077 \u1092 \u1086 \u1085 \u1072 ", type: "text", required: true \},\
      \{ name: "email", label: "\uc0\u1055 \u1086 \u1095 \u1090 \u1072 ", type: "text", required: false \},\
      \{ name: "telegram", label: "\uc0\u1058 \u1077 \u1083 \u1077 \u1075 \u1088 \u1072 \u1084 ", type: "text", required: false \},\
      \{ name: "contactMethod", label: "\uc0\u1055 \u1088 \u1077 \u1076 \u1087 \u1086 \u1095 \u1090 \u1080 \u1090 \u1077 \u1083 \u1100 \u1085 \u1099 \u1081  \u1089 \u1087 \u1086 \u1089 \u1086 \u1073  \u1089 \u1074 \u1103 \u1079 \u1080 ", type: "select", required: true, options: CONTACT_METHODS \}\
    ]\
  \},\
\
  // 12\
  \{\
    formId: "form_12",\
    title: "\uc0\u1040 \u1085 \u1072 \u1083 \u1080 \u1079  \u1089 \u1088 \u1077 \u1076 \u1085 \u1077 \u1075 \u1086  \u1095 \u1077 \u1082 \u1072  \u1080  LTV \u1087 \u1072 \u1094 \u1080 \u1077 \u1085 \u1090 \u1072 ",\
    sheetName: "12_\uc0\u1057 \u1088 \u1077 \u1076 \u1085 \u1080 \u1081  \u1095 \u1077 \u1082  \u1080  LTV",\
    fields: [\
      \{ name: "clinicName", label: "\uc0\u1053 \u1072 \u1079 \u1074 \u1072 \u1085 \u1080 \u1077  \u1084 \u1077 \u1076 \u1080 \u1094 \u1080 \u1085 \u1089 \u1082 \u1086 \u1075 \u1086  \u1094 \u1077 \u1085 \u1090 \u1088 \u1072 ", type: "text", required: true \},\
      \{ name: "phone", label: "\uc0\u1053 \u1086 \u1084 \u1077 \u1088  \u1090 \u1077 \u1083 \u1077 \u1092 \u1086 \u1085 \u1072 ", type: "text", required: true \},\
      \{ name: "email", label: "\uc0\u1055 \u1086 \u1095 \u1090 \u1072 ", type: "text", required: false \},\
      \{ name: "telegram", label: "\uc0\u1058 \u1077 \u1083 \u1077 \u1075 \u1088 \u1072 \u1084 ", type: "text", required: false \},\
      \{ name: "contactMethod", label: "\uc0\u1055 \u1088 \u1077 \u1076 \u1087 \u1086 \u1095 \u1090 \u1080 \u1090 \u1077 \u1083 \u1100 \u1085 \u1099 \u1081  \u1089 \u1087 \u1086 \u1089 \u1086 \u1073  \u1089 \u1074 \u1103 \u1079 \u1080 ", type: "select", required: true, options: CONTACT_METHODS \}\
    ]\
  \},\
\
  // 13\
  \{\
    formId: "form_13",\
    title: "\uc0\u1040 \u1085 \u1072 \u1083 \u1080 \u1079  \u1094 \u1077 \u1083 \u1077 \u1074 \u1086 \u1081  \u1072 \u1091 \u1076 \u1080 \u1090 \u1086 \u1088 \u1080 \u1080  \u1080  \u1087 \u1086 \u1088 \u1090 \u1088 \u1077 \u1090  \u1087 \u1072 \u1094 \u1080 \u1077 \u1085 \u1090 \u1086 \u1074 ",\
    sheetName: "13_\uc0\u1062 \u1040  \u1080  \u1087 \u1086 \u1088 \u1090 \u1088 \u1077 \u1090 ",\
    fields: [\
      \{ name: "clinicName", label: "\uc0\u1053 \u1072 \u1079 \u1074 \u1072 \u1085 \u1080 \u1077  \u1084 \u1077 \u1076 \u1080 \u1094 \u1080 \u1085 \u1089 \u1082 \u1086 \u1075 \u1086  \u1094 \u1077 \u1085 \u1090 \u1088 \u1072 ", type: "text", required: true \},\
      \{ name: "phone", label: "\uc0\u1053 \u1086 \u1084 \u1077 \u1088  \u1090 \u1077 \u1083 \u1077 \u1092 \u1086 \u1085 \u1072 ", type: "text", required: true \},\
      \{ name: "email", label: "\uc0\u1055 \u1086 \u1095 \u1090 \u1072 ", type: "text", required: false \},\
      \{ name: "telegram", label: "\uc0\u1058 \u1077 \u1083 \u1077 \u1075 \u1088 \u1072 \u1084 ", type: "text", required: false \},\
      \{ name: "contactMethod", label: "\uc0\u1055 \u1088 \u1077 \u1076 \u1087 \u1086 \u1095 \u1090 \u1080 \u1090 \u1077 \u1083 \u1100 \u1085 \u1099 \u1081  \u1089 \u1087 \u1086 \u1089 \u1086 \u1073  \u1089 \u1074 \u1103 \u1079 \u1080 ", type: "select", required: true, options: CONTACT_METHODS \}\
    ]\
  \},\
\
  // 14\
  \{\
    formId: "form_14",\
    title: "\uc0\u1052 \u1072 \u1088 \u1082 \u1077 \u1090 \u1080 \u1085 \u1075 \u1086 \u1074 \u1099 \u1081  \u1072 \u1091 \u1076 \u1080 \u1090  \u1082 \u1083 \u1080 \u1085 \u1080 \u1082 \u1080 ",\
    sheetName: "14_\uc0\u1052 \u1072 \u1088 \u1082 \u1077 \u1090 \u1080 \u1085 \u1075 \u1086 \u1074 \u1099 \u1081  \u1072 \u1091 \u1076 \u1080 \u1090 ",\
    fields: [\
      \{ name: "clinicName", label: "\uc0\u1053 \u1072 \u1079 \u1074 \u1072 \u1085 \u1080 \u1077  \u1084 \u1077 \u1076 \u1080 \u1094 \u1080 \u1085 \u1089 \u1082 \u1086 \u1075 \u1086  \u1094 \u1077 \u1085 \u1090 \u1088 \u1072 ", type: "text", required: true \},\
      \{ name: "phone", label: "\uc0\u1053 \u1086 \u1084 \u1077 \u1088  \u1090 \u1077 \u1083 \u1077 \u1092 \u1086 \u1085 \u1072 ", type: "text", required: true \},\
      \{ name: "email", label: "\uc0\u1055 \u1086 \u1095 \u1090 \u1072 ", type: "text", required: false \},\
      \{ name: "telegram", label: "\uc0\u1058 \u1077 \u1083 \u1077 \u1075 \u1088 \u1072 \u1084 ", type: "text", required: false \},\
      \{ name: "contactMethod", label: "\uc0\u1055 \u1088 \u1077 \u1076 \u1087 \u1086 \u1095 \u1090 \u1080 \u1090 \u1077 \u1083 \u1100 \u1085 \u1099 \u1081  \u1089 \u1087 \u1086 \u1089 \u1086 \u1073  \u1089 \u1074 \u1103 \u1079 \u1080 ", type: "select", required: true, options: CONTACT_METHODS \}\
    ]\
  \},\
\
  // 15\
  \{\
    formId: "form_15",\
    title: "\uc0\u1060 \u1080 \u1085 \u1072 \u1085 \u1089 \u1086 \u1074 \u1086 -\u1084 \u1072 \u1088 \u1082 \u1077 \u1090 \u1080 \u1085 \u1075 \u1086 \u1074 \u1099 \u1081  \u1072 \u1085 \u1072 \u1083 \u1080 \u1079 ",\
    sheetName: "15_\uc0\u1060 \u1080 \u1085 \u1084 \u1072 \u1088 \u1082 \u1077 \u1090 \u1080 \u1085 \u1075 ",\
    fields: [\
      \{ name: "clinicName", label: "\uc0\u1053 \u1072 \u1079 \u1074 \u1072 \u1085 \u1080 \u1077  \u1084 \u1077 \u1076 \u1080 \u1094 \u1080 \u1085 \u1089 \u1082 \u1086 \u1075 \u1086  \u1094 \u1077 \u1085 \u1090 \u1088 \u1072 ", type: "text", required: true \},\
      \{ name: "phone", label: "\uc0\u1053 \u1086 \u1084 \u1077 \u1088  \u1090 \u1077 \u1083 \u1077 \u1092 \u1086 \u1085 \u1072 ", type: "text", required: true \},\
      \{ name: "email", label: "\uc0\u1055 \u1086 \u1095 \u1090 \u1072 ", type: "text", required: false \},\
      \{ name: "telegram", label: "\uc0\u1058 \u1077 \u1083 \u1077 \u1075 \u1088 \u1072 \u1084 ", type: "text", required: false \},\
      \{ name: "contactMethod", label: "\uc0\u1055 \u1088 \u1077 \u1076 \u1087 \u1086 \u1095 \u1090 \u1080 \u1090 \u1077 \u1083 \u1100 \u1085 \u1099 \u1081  \u1089 \u1087 \u1086 \u1089 \u1086 \u1073  \u1089 \u1074 \u1103 \u1079 \u1080 ", type: "select", required: true, options: CONTACT_METHODS \}\
    ]\
  \},\
\
  // 16\
  \{\
    formId: "form_16",\
    title: "\uc0\u1044 \u1080 \u1072 \u1075 \u1085 \u1086 \u1089 \u1090 \u1080 \u1082 \u1072 ",\
    sheetName: "16_\uc0\u1044 \u1080 \u1072 \u1075 \u1085 \u1086 \u1089 \u1090 \u1080 \u1082 \u1072 ",\
    fields: [\
      \{ name: "fio", label: "\uc0\u1060 \u1048 \u1054 ", type: "text", required: true \},\
      \{ name: "phone", label: "\uc0\u1053 \u1086 \u1084 \u1077 \u1088  \u1090 \u1077 \u1083 \u1077 \u1092 \u1086 \u1085 \u1072 ", type: "text", required: true \},\
      \{ name: "email", label: "\uc0\u1055 \u1086 \u1095 \u1090 \u1072 ", type: "text", required: false \},\
      \{ name: "telegram", label: "\uc0\u1058 \u1077 \u1083 \u1077 \u1075 \u1088 \u1072 \u1084 ", type: "text", required: false \},\
      \{ name: "instaNick", label: "\uc0\u1042 \u1072 \u1096  \u1085 \u1080 \u1082  \u1074  \u1048 \u1085 \u1089 \u1090 \u1072 \u1075 \u1088 \u1072 \u1084 ", type: "text", required: true \},\
      \{ name: "contactMethod", label: "\uc0\u1055 \u1088 \u1077 \u1076 \u1087 \u1086 \u1095 \u1090 \u1080 \u1090 \u1077 \u1083 \u1100 \u1085 \u1099 \u1081  \u1089 \u1087 \u1086 \u1089 \u1086 \u1073  \u1089 \u1074 \u1103 \u1079 \u1080 ", type: "select", required: true, options: CONTACT_METHODS \},\
      \{ name: "desiredTime", label: "\uc0\u1046 \u1077 \u1083 \u1072 \u1077 \u1084 \u1086 \u1077  \u1074 \u1088 \u1077 \u1084 \u1103  \u1076 \u1083 \u1103  \u1082 \u1086 \u1085 \u1089 \u1091 \u1083 \u1100 \u1090 \u1072 \u1094 \u1080 \u1080 ", type: "time", required: true \},\
      \{ name: "desiredDate", label: "\uc0\u1046 \u1077 \u1083 \u1072 \u1077 \u1084 \u1072 \u1103  \u1076 \u1072 \u1090 \u1072  \u1076 \u1083 \u1103  \u1082 \u1086 \u1085 \u1089 \u1091 \u1083 \u1100 \u1090 \u1072 \u1094 \u1080 \u1080 ", type: "date", required: true \}\
    ]\
  \},\
\
  // 17\
  \{\
    formId: "form_17",\
    title: "\uc0\u1042 \u1077 \u1076 \u1077 \u1085 \u1080 \u1077  \u1089 \u1090 \u1088 \u1072 \u1085 \u1080 \u1094 \u1099  \u1074  \u1080 \u1085 \u1089 \u1090 \u1072 \u1075 \u1088 \u1072 \u1084  \u1074 \u1088 \u1072 \u1095 \u1072 ",\
    sheetName: "17_\uc0\u1048 \u1085 \u1089 \u1090 \u1072 \u1075 \u1088 \u1072 \u1084  \u1074 \u1088 \u1072 \u1095 ",\
    fields: [\
      \{ name: "fio", label: "\uc0\u1060 \u1048 \u1054 ", type: "text", required: true \},\
      \{ name: "phone", label: "\uc0\u1053 \u1086 \u1084 \u1077 \u1088  \u1090 \u1077 \u1083 \u1077 \u1092 \u1086 \u1085 \u1072 ", type: "text", required: true \},\
      \{ name: "email", label: "\uc0\u1055 \u1086 \u1095 \u1090 \u1072 ", type: "text", required: false \},\
      \{ name: "telegram", label: "\uc0\u1058 \u1077 \u1083 \u1077 \u1075 \u1088 \u1072 \u1084 ", type: "text", required: false \},\
      \{ name: "instaNick", label: "\uc0\u1042 \u1072 \u1096  \u1085 \u1080 \u1082  \u1074  \u1048 \u1085 \u1089 \u1090 \u1072 \u1075 \u1088 \u1072 \u1084 ", type: "text", required: true \},\
      \{ name: "contactMethod", label: "\uc0\u1055 \u1088 \u1077 \u1076 \u1087 \u1086 \u1095 \u1090 \u1080 \u1090 \u1077 \u1083 \u1100 \u1085 \u1099 \u1081  \u1089 \u1087 \u1086 \u1089 \u1086 \u1073  \u1089 \u1074 \u1103 \u1079 \u1080 ", type: "select", required: true, options: CONTACT_METHODS \},\
      \{ name: "desiredTime", label: "\uc0\u1046 \u1077 \u1083 \u1072 \u1077 \u1084 \u1086 \u1077  \u1074 \u1088 \u1077 \u1084 \u1103  \u1076 \u1083 \u1103  \u1082 \u1086 \u1085 \u1089 \u1091 \u1083 \u1100 \u1090 \u1072 \u1094 \u1080 \u1080 ", type: "time", required: true \},\
      \{ name: "desiredDate", label: "\uc0\u1046 \u1077 \u1083 \u1072 \u1077 \u1084 \u1072 \u1103  \u1076 \u1072 \u1090 \u1072  \u1076 \u1083 \u1103  \u1082 \u1086 \u1085 \u1089 \u1091 \u1083 \u1100 \u1090 \u1072 \u1094 \u1080 \u1080 ", type: "date", required: true \}\
    ]\
  \},\
\
  // 18\
  \{\
    formId: "form_18",\
    title: "\uc0\u1042 \u1077 \u1076 \u1077 \u1085 \u1080 \u1077  \u1089 \u1090 \u1088 \u1072 \u1085 \u1080 \u1094 \u1099  \u1074  \u1080 \u1085 \u1089 \u1090 \u1072 \u1075 \u1088 \u1072 \u1084  \u1080  Youtube \u1074 \u1088 \u1072 \u1095 \u1072 ",\
    sheetName: "18_\uc0\u1048 \u1085 \u1089 \u1090 \u1072 +YouTube",\
    fields: [\
      \{ name: "fio", label: "\uc0\u1060 \u1048 \u1054 ", type: "text", required: true \},\
      \{ name: "phone", label: "\uc0\u1053 \u1086 \u1084 \u1077 \u1088  \u1090 \u1077 \u1083 \u1077 \u1092 \u1086 \u1085 \u1072 ", type: "text", required: true \},\
      \{ name: "email", label: "\uc0\u1055 \u1086 \u1095 \u1090 \u1072 ", type: "text", required: false \},\
      \{ name: "telegram", label: "\uc0\u1058 \u1077 \u1083 \u1077 \u1075 \u1088 \u1072 \u1084 ", type: "text", required: false \},\
      \{ name: "instaNick", label: "\uc0\u1042 \u1072 \u1096  \u1085 \u1080 \u1082  \u1074  \u1048 \u1085 \u1089 \u1090 \u1072 \u1075 \u1088 \u1072 \u1084 ", type: "text", required: true \},\
      \{ name: "contactMethod", label: "\uc0\u1055 \u1088 \u1077 \u1076 \u1087 \u1086 \u1095 \u1090 \u1080 \u1090 \u1077 \u1083 \u1100 \u1085 \u1099 \u1081  \u1089 \u1087 \u1086 \u1089 \u1086 \u1073  \u1089 \u1074 \u1103 \u1079 \u1080 ", type: "select", required: true, options: CONTACT_METHODS \},\
      \{ name: "desiredTime", label: "\uc0\u1046 \u1077 \u1083 \u1072 \u1077 \u1084 \u1086 \u1077  \u1074 \u1088 \u1077 \u1084 \u1103  \u1076 \u1083 \u1103  \u1082 \u1086 \u1085 \u1089 \u1091 \u1083 \u1100 \u1090 \u1072 \u1094 \u1080 \u1080 ", type: "time", required: true \},\
      \{ name: "desiredDate", label: "\uc0\u1046 \u1077 \u1083 \u1072 \u1077 \u1084 \u1072 \u1103  \u1076 \u1072 \u1090 \u1072  \u1076 \u1083 \u1103  \u1082 \u1086 \u1085 \u1089 \u1091 \u1083 \u1100 \u1090 \u1072 \u1094 \u1080 \u1080 ", type: "date", required: true \}\
    ]\
  \}\
];\
}