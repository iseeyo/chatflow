/* eslint-disable sort-keys */

import type {
  Sheet,
  // Field,
} from '../Model'

import { replaceSyncStatus, actionState } from '../actionBar.js'

const name = '环境变量|Env'
const code = 'envSheet'

const vikaFields = { code: 200, success: true, data: { fields: [ { id: 'fldNTOtH9LDvN', name: '配置项|name', type: 'SingleText', property: {}, editable: true, isPrimary: true }, { id: 'fld4hEZqDpWck', name: '标识|key', type: 'SingleText', property: {}, editable: true }, { id: 'fldN7PzpNtC2V', name: '值|value', type: 'Text', editable: true }, { id: 'fldTmdV4rFU0v', name: '说明|desc', type: 'Text', editable: true } ] }, message: 'SUCCESS' }
let fields: any = vikaFields.data.fields

if (actionState[code]) {
  fields = replaceSyncStatus(fields)
}

const defaultRecords: any
= {
  code: 200,
  success: true,
  data: {
    total: 35,
    records: [
      {
        recordId: 'recBqOCIixmOz',
        createdAt: 1694149439000,
        updatedAt: 1694517252000,
        fields: {
          '标识|key': 'WECHATY_PUPPET',
          '配置项|name': 'Wechaty-Puppet',
          '说明|desc': '可选值：\nwechaty-puppet-wechat4u\nwechaty-puppet-wechat\nwechaty-puppet-xp\nwechaty-puppet-engine\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\u0000\nwechaty-puppet-padlocal\nwechaty-puppet-service',
          '值|value': 'wechaty-puppet-wechat4u',
        },
      },
      {
        recordId: 'recaATRV2334O',
        createdAt: 1694149439000,
        updatedAt: 1694517255000,
        fields: {
          '标识|key': 'WECHATY_TOKEN',
          '配置项|name': 'Wechaty-Token',
          '说明|desc': '使用wechaty-puppet-padlocal、wechaty-puppet-service时需配置此token',
        },
      },
      {
        recordId: 'recfLxNpe6uVS',
        createdAt: 1694149439000,
        updatedAt: 1694516466000,
        fields: {
          '标识|key': 'ADMINROOM_ADMINROOMID',
          '配置项|name': '基础配置-管理群ID',
          '说明|desc': '管理群的ID，只有在此群内发布管理指令才会生效',
        },
      },
      {
        recordId: 'recX4FGiEthOz',
        createdAt: 1694149439000,
        updatedAt: 1694516471000,
        fields: {
          '标识|key': 'ADMINROOM_ADMINROOMTOPIC',
          '配置项|name': '基础配置-管理群名称',
          '说明|desc': '管理群名称，只有在此群内发布管理指令才会生效',
        },
      },
      {
        recordId: 'recJCF9sLZoey',
        createdAt: 1694516497000,
        updatedAt: 1694516551000,
        fields: {
          '标识|key': 'BASE_BOT_ID',
          '配置项|name': '基础配置-机器人微信号',
          '说明|desc': '机器人微信号，登录成功后自动更新',
        },
      },
      {
        recordId: 'recJCF9sLZoey2',
        createdAt: 1694516497000,
        updatedAt: 1694516551000,
        fields: {
          '标识|key': 'BASE_BOT_NAME',
          '配置项|name': '基础配置-机器人微信昵称',
          '说明|desc': '机器人微信昵称，登录成功后自动更新',
        },
      },
      {
        recordId: 'reca0pBJVEtCK',
        createdAt: 1694149442000,
        updatedAt: 1694518863000,
        fields: {
          '标识|key': 'VIKA_USEVIKA',
          '配置项|name': '维格表-启用维格表',
          '说明|desc': '启用维格表托管配置',
          '值|value': 'false',
        },
      },
      {
        recordId: 'recOpj77TzTeL',
        createdAt: 1694149442000,
        updatedAt: 1694516889000,
        fields: {
          '标识|key': 'VIKA_UPLOADMESSAGETOVIKA',
          '配置项|name': '维格表-消息上传到维格表',
          '说明|desc': '开启后消息记录会自动上传到维格表的【消息记录】表',
          '值|value': 'true',
        },
      },
      {
        recordId: 'recvWeB9eh96e',
        createdAt: 1694149441000,
        updatedAt: 1694516867000,
        fields: {
          '标识|key': 'AUTOQA_AUTOREPLY',
          '配置项|name': '智能问答-启用自动问答',
          '说明|desc': '开启后可以使用微信对话平台只能问答',
          '值|value': 'false',
        },
      },
      {
        recordId: 'recBKWX6WHMfj',
        createdAt: 1694149439000,
        updatedAt: 1694149439000,
        fields: {
          '标识|key': 'WXOPENAI_TOKEN',
          '配置项|name': '微信对话开放平台-Token',
          '说明|desc': '微信对话开放平台中获取',
        },
      },
      {
        recordId: 'rec07Z8lRaref',
        createdAt: 1694149439000,
        updatedAt: 1694149439000,
        fields: {
          '标识|key': 'WXOPENAI_ENCODINGAESKEY',
          '配置项|name': '微信对话开放平台-EncodingAESKey',
          '说明|desc': '微信对话开放平台中获取',
        },
      },
      {
        recordId: 'recb0YfnQVM2T',
        createdAt: 1694516606000,
        updatedAt: 1694516663000,
        fields: {
          '标识|key': 'WXOPENAI_APPID',
          '配置项|name': '微信对话开放平台-APPID',
          '说明|desc': '微信对话开放平台中获取，应用ID',
        },
      },
      {
        recordId: 'recrbGcNpBoGB',
        createdAt: 1694516605000,
        updatedAt: 1694516666000,
        fields: {
          '标识|key': 'WXOPENAI_MANAGERID',
          '配置项|name': '微信对话开放平台-管理员ID',
          '说明|desc': '微信对话开放平台中获取',
        },
      },
      {
        recordId: 'rechG41dcUMQy',
        createdAt: 1694149439000,
        updatedAt: 1694516686000,
        fields: {
          '标识|key': 'CHATGPT_KEY',
          '配置项|name': 'ChatGPT-Key',
          '说明|desc': 'openai平台获取',
        },
      },
      {
        recordId: 'rec5gMPYOQi12',
        createdAt: 1694149439000,
        updatedAt: 1694516688000,
        fields: {
          '标识|key': 'CHATGPT_ENDPOINT',
          '配置项|name': 'ChatGPT-Endpoint',
          '说明|desc': 'openai平台获取',
        },
      },
      {
        recordId: 'rec5gMPYOQi1L',
        createdAt: 1694149439000,
        updatedAt: 1694516688000,
        fields: {
          '标识|key': 'CHATGPT_MODEL',
          '配置项|name': 'ChatGPT-Model',
          '说明|desc': '默认模型gpt-3.5-turbo，可修改为chatgpt支持的其他模型',
          '值|value': 'gpt-3.5-turbo',
        },
      },
      {
        recordId: 'recOTv3IjR9SB',
        createdAt: 1694149442000,
        updatedAt: 1694516874000,
        fields: {
          '标识|key': 'MQTT_MQTTMESSAGEPUSH',
          '配置项|name': 'MQTT连接-MQTT推送',
          '说明|desc': '开启后消息会发送到MQTT队列，需要先配置MQTT配置项',
          '值|value': 'false',
        },
      },
      {
        recordId: 'recJtfMwm4jqs',
        createdAt: 1694149442000,
        updatedAt: 1694516876000,
        fields: {
          '标识|key': 'MQTT_MQTTCONTROL',
          '配置项|name': 'MQTT连接-MQTT控制',
          '说明|desc': '开启可以通过MQTT控制微信，需要先配置MQTT配置项',
          '值|value': 'false',
        },
      },
      {
        recordId: 'recmbYnwIZZ0k',
        createdAt: 1694149439000,
        updatedAt: 1694149439000,
        fields: {
          '标识|key': 'MQTT_USERNAME',
          '配置项|name': 'MQTT连接-用户名',
          '说明|desc': 'MQTT连接配置信息，推荐使用百度云的物联网核心套件',
        },
      },
      {
        recordId: 'recUE3LkEmGu3',
        createdAt: 1694149441000,
        updatedAt: 1694149441000,
        fields: {
          '标识|key': 'MQTT_PASSWORD',
          '配置项|name': 'MQTT连接-密码',
          '说明|desc': 'MQTT连接配置信息，推荐使用百度云的物联网核心套件',
        },
      },
      {
        recordId: 'recTgNAPslJdh',
        createdAt: 1694149441000,
        updatedAt: 1694149441000,
        fields: {
          '标识|key': 'MQTT_ENDPOINT',
          '配置项|name': 'MQTT连接-接入地址',
          '说明|desc': 'MQTT连接配置信息，推荐使用百度云的物联网核心套件',
          '值|value': 'broker.emqx.io',
        },
      },
      {
        recordId: 'recnp5ZezzfXn',
        createdAt: 1694149441000,
        updatedAt: 1694149441000,
        fields: {
          '标识|key': 'MQTT_PORT',
          '配置项|name': 'MQTT连接-端口号',
          '说明|desc': 'MQTT连接配置信息，推荐使用百度云的物联网核心套件',
          '值|value': '8883',
        },
      },
      {
        recordId: 'rec3wtpjXE3Wm',
        createdAt: 1694149442000,
        updatedAt: 1694516873000,
        fields: {
          '标识|key': 'WEBHOOK_WEBHOOKMESSAGEPUSH',
          '配置项|name': 'HTTP消息推送-WebHook推送',
          '说明|desc': 'TODO-开启后系统将机器人事件消息推送到指定的地址',
          '值|value': 'false',
        },
      },
      {
        recordId: 'rec6gsmydj4eg',
        createdAt: 1694149441000,
        updatedAt: 1694149441000,
        fields: {
          '标识|key': 'WEBHOOK_URL',
          '配置项|name': 'HTTP消息推送-地址',
          '说明|desc': '格式 http://baidu.com/abc,多个地址使用英文逗号隔开，使用post请求推送',
        },
      },
      {
        recordId: 'recbTf77gR2G8',
        createdAt: 1694149441000,
        updatedAt: 1694149441000,
        fields: {
          '标识|key': 'WEBHOOK_TOKEN',
          '配置项|name': 'HTTP消息推送-Token',
          '说明|desc': '当填写token时优先使用token，其次用户名+密码，再次无鉴权请求',
        },
      },
      {
        recordId: 'recure3Q115gt',
        createdAt: 1694149441000,
        updatedAt: 1694149441000,
        fields: {
          '标识|key': 'WEBHOOK_USERNAME',
          '配置项|name': 'HTTP消息推送-用户名',
          '说明|desc': '当填写token时优先使用token，其次用户名+密码，再次无鉴权请求',
        },
      },
      {
        recordId: 'rec4o1ExmfN3P',
        createdAt: 1694149441000,
        updatedAt: 1694149441000,
        fields: {
          '标识|key': 'WEBHOOK_PASSWORD',
          '配置项|name': 'HTTP消息推送-密码',
          '说明|desc': '当填写token时优先使用token，其次用户名+密码，再次无鉴权请求',
        },
      },
      {
        recordId: 'recwRJEJCuesw',
        createdAt: 1694149441000,
        updatedAt: 1694149441000,
        fields: {
          '标识|key': 'YUQUE_TOKEN',
          '配置项|name': '语雀-token',
          '说明|desc': '语雀知识库token',
        },
      },
      {
        recordId: 'reckTO9r9MHFK',
        createdAt: 1694149441000,
        updatedAt: 1694149441000,
        fields: {
          '标识|key': 'YUQUE_NAMESPACE',
          '配置项|name': '语雀-空间名称',
          '说明|desc': '语雀知识库空间名称',
        },
      },
      {
        recordId: 'recJg5CbSyIlu',
        createdAt: 1694516737000,
        updatedAt: 1694516927000,
        fields: {
          '标识|key': 'MESSAGE_ENCRYPT',
          '配置项|name': '消息加密-下发消息加密',
          '值|value': 'false',
        },
      },
      {
        recordId: 'recTUcZk8GobR',
        createdAt: 1694516736000,
        updatedAt: 1694516937000,
        fields: {
          '标识|key': 'MESSAGE_ENCODINGAESKEY',
          '配置项|name': '消息加密-消息加密密钥',
          '说明|desc': '消息加密密钥，vika推送地址https://3sewxanjdvsbp.cfc-execute.bj.baidubce.com/mqtt',
          '值|value': 'X00fcQHkvRkNUdJefu4FD6pym2oIvs63Y5NP3pnZ5po',
        },
      },
      {
        recordId: 'recAqIuUbtrJz',
        createdAt: 1701446368000,
        updatedAt: 1701449027000,
        fields: {
          '配置项|name': '对象存储-accessKeyId',
          '值|value': '',
          '标识|key': 'accessKeyId',
          '同步状态|syncStatus': '未同步',
          '操作|action': '选择操作',
          '最后操作时间|lastOperationTime': 1701446368608,
          '说明|desc': '对象存储ak',
        },
      },
      {
        recordId: 'recWnHKhWGlEx',
        createdAt: 1701446405000,
        updatedAt: 1701449033000,
        fields: {
          '配置项|name': '对象存储-secretAccessKey',
          '值|value': '',
          '标识|key': 'secretAccessKey',
          '同步状态|syncStatus': '未同步',
          '操作|action': '选择操作',
          '最后操作时间|lastOperationTime': 1701446404971,
          '说明|desc': '对象存储ak',
        },
      },
      {
        recordId: 'rec6Fr5LQ3ita',
        createdAt: 1701446428000,
        updatedAt: 1701449041000,
        fields: {
          '配置项|name': '对象存储-region',
          '值|value': '',
          '标识|key': 'region',
          '同步状态|syncStatus': '未同步',
          '操作|action': '选择操作',
          '最后操作时间|lastOperationTime': 1701446427589,
          '说明|desc': '区域',
        },
      },
      {
        recordId: 'recaF7StPVYIy',
        createdAt: 1701446438000,
        updatedAt: 1701449048000,
        fields: {
          '配置项|name': '对象存储-endpoint',
          '值|value': '',
          '标识|key': 'endpoint',
          '同步状态|syncStatus': '未同步',
          '操作|action': '选择操作',
          '最后操作时间|lastOperationTime': 1701446437895,
          '说明|desc': '接入点',
        },
      },
      {
        recordId: 'recuP5oe8ybU7',
        createdAt: 1701446461000,
        updatedAt: 1701449056000,
        fields: {
          '配置项|name': '对象存储-bucketName',
          '值|value': '',
          '标识|key': 'bucketName',
          '同步状态|syncStatus': '未同步',
          '操作|action': '选择操作',
          '最后操作时间|lastOperationTime': 1701446461066,
          '说明|desc': '存储桶',
        },
      },
    ],
    pageNum: 1,
    pageSize: 35,
  },
  message: 'SUCCESS',
}

export const sheet: Sheet = {
  fields,
  name,
  defaultRecords: defaultRecords.data.records,
}
