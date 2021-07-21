(self.webpackChunkalaya_docs=self.webpackChunkalaya_docs||[]).push([[1519],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(a),m=l,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||r;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2498:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return d},default:function(){return c}});var n=a(2122),l=a(9756),r=(a(7294),a(3905)),o={id:"Wallet_Guide",title:"Wallet Guide",sidebar_label:"Wallet Guide"},i=void 0,s={unversionedId:"Wallet_Guide",id:"Wallet_Guide",isDocsHomePage:!1,title:"Wallet Guide",description:"In this article, we will introduce the usage of different wallets.",source:"@site/docs/Wallet_Guide.md",sourceDirName:".",slug:"/Wallet_Guide",permalink:"/alaya-devdocs/en/Wallet_Guide",editUrl:"https://github.com/AlayaNetwork/alaya-devdocs/tree/main/website/docs/Wallet_Guide.md",version:"current",frontMatter:{id:"Wallet_Guide",title:"Wallet Guide",sidebar_label:"Wallet Guide"},sidebar:"docs",previous:{title:"PlatEye",permalink:"/alaya-devdocs/en/PlatEye"},next:{title:"ATON Wallet",permalink:"/alaya-devdocs/en/ATON_user_manual"}},d=[{value:"What&#39;s a Wallet?",id:"whats-a-wallet",children:[]},{value:"Wallets that Support Alaya",id:"wallets-that-support-alaya",children:[{value:"Mobile Wallet",id:"mobile-wallet",children:[]},{value:"Web Wallet",id:"web-wallet",children:[]},{value:"Command Line",id:"command-line",children:[]}]}],u={toc:d};function c(e){var t=e.components,a=(0,l.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this article, we will introduce the usage of different wallets. "),(0,r.kt)("h2",{id:"whats-a-wallet"},"What's a Wallet?"),(0,r.kt)("p",null,"A wallet is a device or application that stores a set of keys, which can be used to send, receive, and track digital currency. Wallets can take many forms: software wallets, hardware wallets, and paper wallets. Hardware wallets guarantees security, and software wallets, such as APP wallets, provide a simpler and more user-friendly way to create and manage wallets."),(0,r.kt)("p",null,"The public address and private key can be generated through the wallet: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"A public address")," is also called the receiving address of the wallet or ",(0,r.kt)("strong",{parentName:"li"},"address")," for short. ",(0,r.kt)("strong",{parentName:"li"},"Alaya's address is a string of 42 characters starting with ",(0,r.kt)("inlineCode",{parentName:"strong"},"lat"),".")," A wallet address can be shared and made public. The receiving address is required for sending a certain number of tokens to a wallet. Based on the implementation of the blockchain, the address can also be used to view relevant information about the wallet, such as the balance."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"A private Key")," is necessary to digitally sign any transaction, to transfer the token or to change account-related data. The private key must ",(0,r.kt)("strong",{parentName:"li"},"never be made public"),". If someone obtains the private key of wallet, he can withdraw all the tokens in it. If the private key is lost, all tokens sent to the wallet address will be ",(0,r.kt)("strong",{parentName:"li"},"permanently lost"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To receive ATP on the Alaya chain, you need to select a wallet and then create an Alaya wallet address. ")),(0,r.kt)("h2",{id:"wallets-that-support-alaya"},"Wallets that Support Alaya"),(0,r.kt)("p",null,"We encourage developers and contributors from all over the world to build wallets based on the Alaya ecosystem."),(0,r.kt)("p",null,"Alaya currently supports multiple types of software wallets, including web wallets, mobile wallets, and command line wallets to meet the basic needs of developers and ordinary users."),(0,r.kt)("p",null,"For most users, we recommend using mobile wallets or explorer-based web wallets that are familiar to users and therefore save the trouble of learning. "),(0,r.kt)("p",null,"The command line wallet may be more suitable for nodes and developers for it meets the demand for intensive development and integration."),(0,r.kt)("h3",{id:"mobile-wallet"},"Mobile Wallet"),(0,r.kt)("p",null,"The mobile wallet is the ideal choice for everyday transactions and payments due to its portability, good experience, and the ability to send and receive tokens through QR codes."),(0,r.kt)("h4",{id:"aton"},"ATON"),(0,r.kt)("p",null,"ATON is a mobile wallet for iOS and Android that supports both PlatON and Alaya networks. It can be used to send and receive ATP, and at the same time provides convenient ATP delegation services to obtain delegation rewards. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ATON security")),(0,r.kt)("p",null,"All wallet keys created by ATON are stored locally on the user\u2019s mobile phone, and the server will not store any information about the wallet key. Therefore, the security of the token in ATON depends on the device where the application is installed."),(0,r.kt)("p",null,"For the security of your mobile device, it is recommended that you activate the touch ID/face ID to lock the app and properly back up your private key or mnemonic phrase in case the mobile device is lost or damaged. If necessary, you can also use the hot and cold wallet mode to manage your wallet."),(0,r.kt)("p",null,"For more tutorials on ATON functions and usage, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/alaya-devdocs/en/ATON_user_manual"},"ATON Wallet User Guide"),"."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"We embrace more community wallet applications that can fully support the Alaya and PlatON networks.")," "),(0,r.kt)("h3",{id:"web-wallet"},"Web Wallet"),(0,r.kt)("p",null,"With a web wallet, you can easily access distributed applications (DApp) without downloading or installing another software."),(0,r.kt)("h4",{id:"samurai"},"Samurai"),(0,r.kt)("p",null,"Samurai is an open-source explorer plug-in wallet that supports the PlatON and Alaya networks. It can be used to send and receive ATP and connect DApps of the PlatON and Alaya ecosystems."),(0,r.kt)("p",null,"For more tutorials on functions and usage of Samurai, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/alaya-devdocs/en/Samurai_user_manual"},"Samurai Wallet User Guide"),"."),(0,r.kt)("h3",{id:"command-line"},"Command Line"),(0,r.kt)("p",null,"Alaya allows users to create wallets with several command line tools."),(0,r.kt)("p",null,"If you are not familiar with the use of command-line programs and just need to send and receive ATP, it is recommended that you use a ",(0,r.kt)("strong",{parentName:"p"},"mobile wallet"),"."),(0,r.kt)("h4",{id:"mtool"},"MTool"),(0,r.kt)("p",null,"MTool is a command-line tool for node-oriented management. It can be used for ATP sending and staking, as well as governance and other related operations. It also supports online and offline signatures."),(0,r.kt)("p",null,"For more tutorials on MTool functions and usage, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/alaya-devdocs/en/OnLine_MTool_Manual"},"MTool User Guide"),"."),(0,r.kt)("h4",{id:"alaya-cli"},(0,r.kt)("strong",{parentName:"h4"},"Alaya CLI")),(0,r.kt)("p",null,"Alaya CLI is a command-line tool that directly interacts with Alaya node programs. It provides the most direct, flexible and secure access to Alaya accounts, and can be used to send and receive ATP and to check the address balance."),(0,r.kt)("p",null,"For more tutorials on Alaya CLI functions and usage, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/alaya-devdocs/en/Command_Line_Tools"},"CLI User Guide"),". "),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Help us improve this document")))}c.isMDXComponent=!0}}]);