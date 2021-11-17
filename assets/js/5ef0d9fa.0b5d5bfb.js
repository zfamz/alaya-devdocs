(self.webpackChunkalaya_docs=self.webpackChunkalaya_docs||[]).push([[8354],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return k}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),k=r,m=u["".concat(d,".").concat(k)]||u[k]||s[k]||o;return a?n.createElement(m,l(l({ref:t},c),{},{components:a})):n.createElement(m,l({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3042:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return d},toc:function(){return p},default:function(){return s}});var n=a(2122),r=a(9756),o=(a(7294),a(3905)),l={id:"Join_Alaya_NetWork",title:"Join Alaya",sidebar_label:"Join Alaya"},i=void 0,d={unversionedId:"Join_Alaya_NetWork",id:"Join_Alaya_NetWork",isDocsHomePage:!1,title:"Join Alaya",description:"Overview",source:"@site/docs/Join_Alaya_NetWork.md",sourceDirName:".",slug:"/Join_Alaya_NetWork",permalink:"/alaya-devdocs/Join_Alaya_NetWork",editUrl:"https://github.com/AlayaNetwork/alaya-devdocs/tree/main/website/docs/Join_Alaya_NetWork.md",version:"current",frontMatter:{id:"Join_Alaya_NetWork",title:"Join Alaya",sidebar_label:"Join Alaya"}},p=[{value:"Overview",id:"overview",children:[]},{value:"Preparation",id:"preparation",children:[]},{value:"Join the Alaya Main Network",id:"join-the-alaya-main-network",children:[{value:"Start as a validator node",id:"start-as-a-validator-node",children:[]}]},{value:"Join the Alaya Develop Network",id:"join-the-alaya-develop-network",children:[{value:"Develop network related resources",id:"develop-network-related-resources",children:[]},{value:"Initialize the genesis block",id:"initialize-the-genesis-block",children:[]},{value:"Start as a validator node",id:"start-as-a-validator-node-1",children:[]},{value:"Other",id:"other",children:[]}]},{value:"View node status",id:"view-node-status",children:[{value:"Enter <code>Alaya</code> console",id:"enter-alaya-console",children:[]},{value:"View peers of a node",id:"view-peers-of-a-node",children:[]},{value:"View the current block height",id:"view-the-current-block-height",children:[]}]}],c={toc:p};function s(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The Alaya main network will be officially launched on October 24, 2020 Beijing time, and the ChainID is 201018; The other is the Alaya develop network(Chainid 201030)."),(0,o.kt)("h2",{id:"preparation"},"Preparation"),(0,o.kt)("p",null,"Before joining the Alaya public network, please ensure that the server has the following conditions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The Alaya node has been installed and the wallet file and node key have been created according to the instructions of ",(0,o.kt)("a",{parentName:"li",href:"/alaya-devdocs/en/Install_Node"},"Installing a Node"),".")),(0,o.kt)("p",null,"This section assumes that the server is Ubuntu 18.04, and the working directory of the executable file is ",(0,o.kt)("inlineCode",{parentName:"p"},"~/alaya-node"),". Note that all subsequent commands should be run under the same working directory."),(0,o.kt)("h2",{id:"join-the-alaya-main-network"},"Join the Alaya Main Network"),(0,o.kt)("p",null,"Anyone and any organization can join the Alaya main network."),(0,o.kt)("h3",{id:"start-as-a-validator-node"},"Start as a validator node"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Execute the following command to join the Alaya as a validator node")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'cd ~/alaya-node/ && nohup alaya --identity alaya-node --datadir ./data --port 16789 --rpcport 6789 --rpcapi "db,platon,net,web3,admin,personal" --rpc --nodekey ./data/nodekey --cbft.blskey ./data/blskey --verbosity 1 --rpcaddr 127.0.0.1 --syncmode "fast" > ./data/alaya.log 2>&1 &\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Prompt:")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Parameters")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Description")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--identity"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify the network name")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--datadir"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify the data directory path")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--port"),(0,o.kt)("td",{parentName:"tr",align:null},"Specifying the P2P protocol communication port")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--rpcaddr"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify rpc server address")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--rpcport"),(0,o.kt)("td",{parentName:"tr",align:null},"Specifying the RPC protocol communication port")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--rpcapi"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify the rpcapi name open by the node")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--rpc"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify http-rpc communication method")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--nodekey"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify the node private key file")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--cbft.blskey"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify the node bls private key file")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--verbosity"),(0,o.kt)("td",{parentName:"tr",align:null},"The level of logging, 0: CRIT;  1: ERROR; 2: WARN;  3: INFO;  4: DEBUG; 5: TRACE")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--syncmode"),(0,o.kt)("td",{parentName:"tr",align:null},"fast: Fast synchronization mode, full: All synchronous mode")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--db.nogc"),(0,o.kt)("td",{parentName:"tr",align:null},"Enable archive mode")))),(0,o.kt)("p",null,"See more parameters with the command ",(0,o.kt)("inlineCode",{parentName:"p"},"alaya --help"),";"),(0,o.kt)("h2",{id:"join-the-alaya-develop-network"},"Join the Alaya Develop Network"),(0,o.kt)("p",null,"The development network provides a development test environment for the developer or node.There may be instability and a network reset.The current version of the development network is 0.15.1."),(0,o.kt)("h3",{id:"develop-network-related-resources"},"Develop network related resources"),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"alaya\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://download.alaya.network/alaya/platon/0.16.1/alaya"},"https://download.alaya.network/alaya/platon/0.16.1/alaya"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"alayakey\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://download.alaya.network/alaya/platon/0.16.1/alayakey"},"https://download.alaya.network/alaya/platon/0.16.1/alayakey"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"mtool windows\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://download.alaya.network/alaya/mtool/windows/0.15.1/alaya_mtool.exe"},"https://download.alaya.network/alaya/mtool/windows/0.15.1/alaya_mtool.exe"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"mtool linux\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://download.alaya.network/alaya/mtool/linux/0.15.1/alaya_mtool.zip"},"https://download.alaya.network/alaya/mtool/linux/0.15.1/alaya_mtool.zip")),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"You need to change the chain ID in the configuration file config.properties to the development network chain ID: 201030\uff1b"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"samurai\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AlayaNetwork/Samurai/raw/develop/devnet/samurai-devnet-chrome-8.0.11.zip"},"https://github.com/AlayaNetwork/Samurai/raw/develop/devnet/samurai-devnet-chrome-8.0.11.zip"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Open the RPC URL: ",(0,o.kt)("a",{parentName:"p",href:"http://47.241.91.2:6789"},"http://47.241.91.2:6789"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Scan Browser Address: ",(0,o.kt)("a",{parentName:"p",href:"https://devnetscan.alaya.network"},"https://devnetscan.alaya.network"))))),(0,o.kt)("h3",{id:"initialize-the-genesis-block"},"Initialize the genesis block"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Save the genesis block file"),(0,o.kt)("p",{parentName:"li"},"Save the following to the genesis.json file:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/alaya-node && wget https://download.alaya.network/alaya/platon/0.15.1/genesis.json \n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Initialize the genesis block file"),(0,o.kt)("p",{parentName:"li"}," Executive command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd ~/alaya-node && alaya --datadir ./data init genesis.json\n")),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Description:"),(0,o.kt)("p",{parentName:"blockquote"},"A prompt for ",(0,o.kt)("inlineCode",{parentName:"p"},"Successfully wrote genesis state")," indicates that the initialization creation information is complete.")))),(0,o.kt)("h3",{id:"start-as-a-validator-node-1"},"Start as a validator node"),(0,o.kt)("p",null,"Please refer to ",(0,o.kt)("a",{parentName:"p",href:"/alaya-devdocs/en/Install_Node"},"Install node")," section to create a nodekey: nodekey, blskey, and then execute the following command to start the verification node to join the Alaya development network;If you need to become a verification node, please apply for a large test ATP by following instructions (the development network will be reset irregularly according to the test needs, and the ATP of the test network has no practical value)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'cd ~/alaya-node/ && nohup alaya --identity alaya-node --datadir ./data --port 16789 --rpcport 6789 --rpcapi "db,platon,net,web3,admin,personal" --rpc --nodekey ./data/nodekey --cbft.blskey ./data/blskey --verbosity 1 --rpcaddr 127.0.0.1 --bootnodes enode://48f9ebd7559b7849f80e00d89d87fb92604c74a541a7d76fcef9f2bcc67043042dfab0cfbaeb5386f921208ed9192c403f438934a0a39f4cad53c55d8272e5fb@devnetnode1.alaya.network:16789 --syncmode "fast" > ./data/alaya.log 2>&1 &\n')),(0,o.kt)("h3",{id:"other"},"Other"),(0,o.kt)("p",null,"If you need to receive large amount of test ATP, please send an email to ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@latticex.foundation"},"support@latticex.foundation")," according to the format requirements. The email requirements are:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},"Title: Alaya Test Network Token Application\nName:\nContact Information:\nWeChat ID (or other instant messaging software) :\nApplication amount:\nUSES:\nReceipt account:\nRemark:\n")),(0,o.kt)("h2",{id:"view-node-status"},"View node status"),(0,o.kt)("p",null,"When Alaya is successfully started, under normal circumstances, it will automatically establish a connection with the node closest to it through the node discovery protocol. After the connection is successful, block synchronization will be started. You can determine whether joining the network successfully by looking at the peers of the node and confirming whether the block height of the node is increasing."),(0,o.kt)("p",null,"If the key is not generated in advance, the node is automatically generated in the node's data directory at startup. If it is automatically generated, only the node private key and BLS private key will be generated, and the relevant public key will not be automatically generated."),(0,o.kt)("h3",{id:"enter-alaya-console"},"Enter ",(0,o.kt)("inlineCode",{parentName:"h3"},"Alaya")," console"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"alaya attach http://localhost:6789\n")),(0,o.kt)("h3",{id:"view-peers-of-a-node"},"View peers of a node"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"admin.peers\n")),(0,o.kt)("h3",{id:"view-the-current-block-height"},"View the current block height"),(0,o.kt)("p",null,"You can get the block height of the current node by executing the following command in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Alaya")," console."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"platon.blockNumber\n")),(0,o.kt)("p",null,"A series of Alaya network nodes appear in the node list and the block height is increasing, which means the connection is successful! (Since the new node needs to be synchronized, there may be a delay)"),(0,o.kt)("p",null,"Type exit to exit the console."))}s.isMDXComponent=!0}}]);