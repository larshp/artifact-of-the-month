sap.ui.define(["sap/ui/core/UIComponent","sap/ui/model/json/JSONModel","sap/ui/core/routing/HashChanger","sap/ui/Device","aow/artifact/model/models"],function(e,t,i,a,n){"use strict";return e.extend("aow.artifact.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(n.createDeviceModel(),"device");const s=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;const o=new t({filter:"all",sidebarExpanded:false,lightTheme:!s,currentHash:i.getInstance().getHash()||"trends"});this.setModel(o,"settings");const d=new t(a);d.setDefaultBindingMode("OneWay");this.setModel(d,"device")}})});