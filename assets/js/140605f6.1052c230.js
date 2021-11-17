(self.webpackChunkalaya_docs=self.webpackChunkalaya_docs||[]).push([[1282],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return h}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=p(n),h=a,k=s["".concat(c,".").concat(h)]||s[h]||u[h]||r;return n?o.createElement(k,l(l({ref:t},d),{},{components:n})):o.createElement(k,l({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4023:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var o=n(2122),a=n(9756),r=(n(7294),n(3905)),l={id:"Join_the_dev_network",title:"Join the dev network",sidebar_label:"Join the dev network"},i=void 0,c={unversionedId:"Join_the_dev_network",id:"Join_the_dev_network",isDocsHomePage:!1,title:"Join the dev network",description:"This article will introduce how to debug local applications by connecting to the Alaya development network.",source:"@site/docs/Join_the_dev_network.md",sourceDirName:".",slug:"/Join_the_dev_network",permalink:"/alaya-devdocs/Join_the_dev_network",editUrl:"https://github.com/AlayaNetwork/alaya-devdocs/tree/main/website/docs/Join_the_dev_network.md",version:"current",frontMatter:{id:"Join_the_dev_network",title:"Join the dev network",sidebar_label:"Join the dev network"},sidebar:"docs",previous:{title:"Development guide",permalink:"/alaya-devdocs/Development_guide"},next:{title:"Run a dev node",permalink:"/alaya-devdocs/Run_a_dev_node"}},p=[{value:"How to connect to the development network to debug local applications?",id:"how-to-connect-to-the-development-network-to-debug-local-applications",children:[{value:"Token Receive the development network test token at the faucet",id:"token-receive-the-development-network-test-token-at-the-faucet",children:[]}]}],d={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This article will introduce how to debug local applications by connecting to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Alaya")," development network. "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: The ",(0,r.kt)("inlineCode",{parentName:"p"},"ChainId")," of the Alaya mainnet is 201018; the ",(0,r.kt)("inlineCode",{parentName:"p"},"ChainId")," of the development network is 201030. ")),(0,r.kt)("h2",{id:"how-to-connect-to-the-development-network-to-debug-local-applications"},"How to connect to the development network to debug local applications?"),(0,r.kt)("p",null,"Alaya Development Network has opened the following RPC ports to developers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"RPC Address\uff1ahttp://47.241.91.2:6789 and ws://47.241.91.2:6790\n")),(0,r.kt)("h4",{id:"access-to-the-development-network-through-local-programs"},"Access to the development network through local programs"),(0,r.kt)("p",null,"On the ubuntu18.04 server, download and install the Alaya binary file with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo wget https://download.alaya.network/alaya/platon/0.16.1/alaya -P /usr/bin    \n")),(0,r.kt)("p",null,"Connect to the development network by the following method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"alaya attach http://47.241.91.2:6789\n")),(0,r.kt)("h4",{id:"connect-to-alaya-development-network-through-sdk"},"Connect to Alaya development network through SDK"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("a",{parentName:"li",href:"/alaya-devdocs/en/Java_SDK"},"Java SDK")," to connect to the development network, for example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Web3j platonWeb3j = Web3j.build(new HttpService("http://47.241.91.2:6789"));\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("a",{parentName:"li",href:"/alaya-devdocs/en/JS_SDK"},"JS SDK")," to access the development network, for example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"var Web3 = require('web3');\nvar web3 = new Web3('http://47.241.91.2:6789');\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("a",{parentName:"li",href:"/alaya-devdocs/en/Json_Rpc"},"JSON RPC")," to access the development network, for example: ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl -X POST -H \'content-type: application/json\' --data \'{"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":67}\' 47.241.91.2:6789\n')),(0,r.kt)("p",null,"You can also access the network through SDKs in other languages than in the above. "),(0,r.kt)("h3",{id:"token-receive-the-development-network-test-token-at-the-faucet"},"Token Receive the development network test token at the faucet"),(0,r.kt)("p",null,"Click ",(0,r.kt)("a",{parentName:"p",href:"https://faucet.alaya.network/faucet/?id=f93426c0887f11eb83b900163e06151c"},"Faucet")," to receive the test token. If you need a large number of test tokens, please send an email to ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@latticex.foundation"},"support@latticex.foundation")," in the following format: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," Title: Alaya Development Network Test Token Application\n Name:\n Contact details:\n WeChat ID (or other instant messaging software):\n Application amount:\n Usage:\n Account receivable:\n Remarks: \n")),(0,r.kt)("p",null,"After successfully accessing the development network, you can send the transaction after receiving the test token, and start testing. You can check the transaction in the ",(0,r.kt)("a",{parentName:"p",href:"https://devnetscan.alaya.network"},"development network explorer"),"."))}u.isMDXComponent=!0}}]);