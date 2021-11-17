(self.webpackChunkalaya_docs=self.webpackChunkalaya_docs||[]).push([[4547],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=o,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return a?n.createElement(k,r(r({ref:t},c),{},{components:a})):n.createElement(k,r({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var p=2;p<l;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},111:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var n=a(2122),o=a(9756),l=(a(7294),a(3905)),r={id:"Online_MTool",title:"Online MTool",sidebar_label:"Online MTool"},i=void 0,s={unversionedId:"Online_MTool",id:"Online_MTool",isDocsHomePage:!1,title:"Online MTool",description:"Introductory",source:"@site/docs/MTool_online_tutorial.md",sourceDirName:".",slug:"/Online_MTool",permalink:"/alaya-devdocs/Online_MTool",editUrl:"https://github.com/AlayaNetwork/alaya-devdocs/tree/main/website/docs/MTool_online_tutorial.md",version:"current",frontMatter:{id:"Online_MTool",title:"Online MTool",sidebar_label:"Online MTool"},sidebar:"docs",previous:{title:"Data snapshot",permalink:"/alaya-devdocs/Data_snapshot"},next:{title:"Offline MTool",permalink:"/alaya-devdocs/Offline_MTool"}},p=[{value:"Introductory",id:"introductory",children:[]},{value:"Install MTool",id:"install-mtool",children:[{value:"Install MTool under Windows",id:"install-mtool-under-windows",children:[]},{value:"Install MTool under Ubuntu",id:"install-mtool-under-ubuntu",children:[]}]},{value:"MTool Environment Variable Description",id:"mtool-environment-variable-description",children:[]},{value:"MTool Command Details",id:"mtool-command-details",children:[{value:"Create A Wallet",id:"create-a-wallet",children:[]},{value:"Recover wallet file",id:"recover-wallet-file",children:[]},{value:"Ordinary transfer operation",id:"ordinary-transfer-operation",children:[]},{value:"View wallet list",id:"view-wallet-list",children:[]},{value:"Query balance based on wallet name",id:"query-balance-based-on-wallet-name",children:[]},{value:"Query balance based on address",id:"query-balance-based-on-address",children:[]},{value:"Create a new restricting plans",id:"create-a-new-restricting-plans",children:[]},{value:"Initiate a staking operation",id:"initiate-a-staking-operation",children:[]},{value:"Modify validator information operation",id:"modify-validator-information-operation",children:[]},{value:"Decommissioning operation",id:"decommissioning-operation",children:[]},{value:"Increase staking operation",id:"increase-staking-operation",children:[]},{value:"Submit Text Proposal",id:"submit-text-proposal",children:[]},{value:"Submit upgrade proposal operation",id:"submit-upgrade-proposal-operation",children:[]},{value:"Submit Cancel Proposal",id:"submit-cancel-proposal",children:[]},{value:"Text proposal voting operation",id:"text-proposal-voting-operation",children:[]},{value:"Upgrade proposal voting operation",id:"upgrade-proposal-voting-operation",children:[]},{value:"Cancel proposal voting",id:"cancel-proposal-voting",children:[]},{value:"Submit parameter proposal operation",id:"submit-parameter-proposal-operation",children:[]},{value:"Parameter proposal voting operation",id:"parameter-proposal-voting-operation",children:[]},{value:"Version declaration operation",id:"version-declaration-operation",children:[]},{value:"View help",id:"view-help",children:[]}]}],c={toc:p};function u(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"introductory"},"Introductory"),(0,l.kt)("p",null,"To facilitate transfer, pledge, delegate, and governance operations, Alaya provides MTool to assist users:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"MTool supports Ubuntu 18.04 and Windows 10. This document describes the installation and use of Windows and Ubuntu, respectively. Users can choose from their own resources."),(0,l.kt)("li",{parentName:"ul"},"MTool provides two signature methods for transactions such as pledge: online signature and offline signature.This document describes online signing operations. For offline signing operations, refer to the ",(0,l.kt)("a",{parentName:"li",href:"/alaya-devdocs/en/Offline_MTool"},"Offline MTool Manual"),"\u3002")),(0,l.kt)("h2",{id:"install-mtool"},"Install MTool"),(0,l.kt)("p",null,"In addition, this document introduces the operation of MTool under Windows and Ubuntu respectively. Users can choose according to their own resources."),(0,l.kt)("h3",{id:"install-mtool-under-windows"},"Install MTool under Windows"),(0,l.kt)("h4",{id:"preparation-before-installation"},"Preparation before installation"),(0,l.kt)("p",null,"execute command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"alaya_mtool --version\n")),(0,l.kt)("p",null,"If the execution result shows error message, it indicates that the MTool has not been installed and you can skip the following instructions on how to uninstall the older version."),(0,l.kt)("p",null,"If the execution result shows the version number, timestamp and other information, it indicates that MTool has been installed. If the MTool is an old version, you need to back up important information at this time, and then manually uninstall the old version. The instructions are as follows:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step1. Backup directory")),(0,l.kt)("p",null,"Back up the ",(0,l.kt)("inlineCode",{parentName:"p"},"C:\\alaya_mtool\\mtool\\current\\keystore")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"C:\\alaya_mtool\\mtool\\current\\validator")," directories to other directories (do not back them up to ",(0,l.kt)("inlineCode",{parentName:"p"},"C:\\alaya_mtool"),"). After installing the new version, you need to copy the backup directory back to the ",(0,l.kt)("inlineCode",{parentName:"p"},"C:\\alaya_mtool\\mtool\\current\\")," directory. (If the installation directory is a custom directory, the actual one shall prevail)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step2. Uninstall old version")),(0,l.kt)("p",null,"Double-click ",(0,l.kt)("inlineCode",{parentName:"p"},"C:\\alaya_mtool\\unins000.exe")," to uninstall all old versions of MTool and other business tools."),(0,l.kt)("h4",{id:"start-installation"},"Start installation"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step1. Download MTool installation package")),(0,l.kt)("p",null,"On the online machine, copy the link ",(0,l.kt)("a",{parentName:"p",href:"https://download.alaya.network/alaya/mtool/windows/0.16.1/alaya_mtool.exe"},"https://download.alaya.network/alaya/mtool/windows/0.16.1/alaya_mtool.exe")," to the browser and download the MTool installation package."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step2. Install MTool")),(0,l.kt)("p",null,"Double-click alaya_mtool.exe to install it. The default installation directory is C:\\alaya_mtool, and it is recommended not to change this installation directory. The pop-up interface displays the message ",(0,l.kt)("strong",{parentName:"p"},"Completing the mtool Setup Wizard"),", indicating that the installation was successful. Click ",(0,l.kt)("strong",{parentName:"p"},"Finish"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step3. Restart the terminal")),(0,l.kt)("p",null,"After installation is complete, you need to ",(0,l.kt)("font",{color:"red"},"restart the terminal")," for the newly added environment variables to take effect."),(0,l.kt)("h3",{id:"install-mtool-under-ubuntu"},"Install MTool under Ubuntu"),(0,l.kt)("h4",{id:"preparation-before-installation-1"},"Preparation before installation"),(0,l.kt)("p",null,"Back up the ",(0,l.kt)("inlineCode",{parentName:"p"},"~/alaya_mtool/keystore")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"~/alaya_mtool/validator")," directories to other directories (do not back them up to ",(0,l.kt)("inlineCode",{parentName:"p"},"~/alaya_mtool"),"). After installing the new version, you need to copy the backup directory back to the ",(0,l.kt)("inlineCode",{parentName:"p"},"~/alaya_mtool/")," directory. (If the installation directory is a custom directory, the actual one shall prevail)"),(0,l.kt)("h4",{id:"start-installation-1"},"start installation"),(0,l.kt)("p",null,"Proceed as follows:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step1. Download MTool toolkit")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wget http://download.alaya.network/alaya/mtool/linux/0.16.1/alaya_mtool.zip\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step2. Extract the MTool toolkit")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"(if ! command -v unzip;then sudo apt install unzip; fi;) && unzip alaya_mtool.zip && cd alaya_mtool\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step3. Download script")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The script is downloaded to the ",(0,l.kt)("font",{color:"red"},"alaya_mtool")," directory, otherwise the script cannot find the path of the new version of mtool.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://download.alaya.network/alaya/scripts/mtool_install.sh\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step4. Execute command")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chmod +x mtool_install.sh && ./mtool_install.sh\n")),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"When the message ",(0,l.kt)("font",{color:"red"},"Install mtool succeed.")," is displayed, MTool is successfully installed. If it is not successfully installed, please contact our official customer service to provide feedback on specific issues."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step5. Restart the session window")),(0,l.kt)("p",null,"After installation is complete, you need to ",(0,l.kt)("font",{color:"red"},"restart the session window")," for the newly added environment variables to take effect."),(0,l.kt)("h2",{id:"mtool-environment-variable-description"},"MTool Environment Variable Description"),(0,l.kt)("p",null,"The environment variables of MTool directories under Windows and Ubuntu are different:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"MTool directory",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Windows: ",(0,l.kt)("inlineCode",{parentName:"li"},"%ALAYA_MTOOLDIR%")),(0,l.kt)("li",{parentName:"ul"},"Ubuntu: ",(0,l.kt)("inlineCode",{parentName:"li"},"$ALAYA_MTOOLDIR"))))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note:Users choose according to their installed system.")),(0,l.kt)("h2",{id:"mtool-command-details"},"MTool Command Details"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: The follow-up command is the command format under Ubuntu. Under Windows, you need to modify ",(0,l.kt)("inlineCode",{parentName:"p"},"$ALAYA_MTOOLDIR")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"%ALAYA_MTOOLDIR%"),".")),(0,l.kt)("h3",{id:"create-a-wallet"},"Create A Wallet"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Execute the command:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"alaya_mtool account new staking\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Parameter description")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"staking: The name of the wallet to be created. Once the wallet is created successfully, a wallet file named ",(0,l.kt)("inlineCode",{parentName:"p"},"staking.json")," will be generated in the directory ",(0,l.kt)("inlineCode",{parentName:"p"},"$ALAYA_MTOOLDIR/keystore"),", And print the following information:"),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"-name: staking\n-type: NORMAL\n-address:\naddress: atp124xmsmd0uf5cvk7v3s36eytqezqsjfcxscu8yv\n-public key: 0x9521cd81ba28d5d1c23bb7ddb7042d146375203d35000c0289178027abd4dc09bca30257739df166201e73497485242f41d5f50d46bc3c7e4385f81bde560db0\nImportant write this Private Key in a safe place.\nIt is the important way to recover your account if you ever forget your password.\n4630b6d86bc74bffd4ca8cfc18bceec562cb40fc5080c258452a04a69bc1ee07\n\nImportant write this mnemonic phrase in a safe place.\nIt is the important way to recover your account if you ever forget your password.\nworry jewel penalty jealous expect embark outer eternal verb rebuild rice kidney\n")),(0,l.kt)("p",{parentName:"blockquote"},"Wallet address format adjusted to Bech32, among them:"),(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"atp124xmsmd0uf5cvk7v3s36eytqezqsjfcxscu8yv"),": Main network account address, beginning with atp;"),(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"4630b6d86bc74bffd4ca8cfc18bceec562cb40fc5080c258452a04a69bc1ee07")," : the private key of the wallet;"),(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"worry jewel penalty jealous expect embark outer eternal verb rebuild rice kidney"),": the mnemonic words."),(0,l.kt)("p",{parentName:"blockquote"},"For security reasons, users need to back up the wallet private key or mnemonic words (both can be backed up, or one of them can be backed up). When the wallet is lost, it can be used for recovery. It is recommended that users back up mnemonic words or private keys to a secure storage medium, such as an offline machine.")),(0,l.kt)("h3",{id:"recover-wallet-file"},"Recover wallet file"),(0,l.kt)("p",null,"If the wallet file is lost, you can restore it with the backed up private key or mnemonic as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Execute the command:"),(0,l.kt)("p",{parentName:"li"},"Recovery via private key:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"alaya_mtool account recover -k staking\n")),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"Prompt to enter the new wallet password and backup private key, as follows:"),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"Enter a passphrase to encrypt your key to disk:\nRepeat the passphrase:\nEnter your 64bit Private Key:\n4630b6d86bc74bffd4ca8cfc18bceec562cb40fc5080c258452a04a69bc1ee07\n"))),(0,l.kt)("p",{parentName:"li"},"or"),(0,l.kt)("p",{parentName:"li"},"Recovery through mnemonics:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"alaya_mtool account recover -m staking\n")),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"Prompt to enter a new wallet password and backup mnemonic words, as follows:"),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"}," Enter a passphrase to encrypt your key to disk:\n Repeat the passphrase:\n Enter your bip39 mnemonic:\n worry jewel penalty jealous expect embark outer eternal verb rebuild rice kidney\n")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Parameter description"),(0,l.kt)("p",{parentName:"li"},"staking\uff1awallet name."),(0,l.kt)("p",{parentName:"li"},"After successful restoration, the wallet file staking.json will be generated under the directory ",(0,l.kt)("inlineCode",{parentName:"p"},"$ALAYA_MTOOLDIR/keystore"),"."))),(0,l.kt)("h3",{id:"ordinary-transfer-operation"},"Ordinary transfer operation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Command line")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'alaya_mtool tx transfer --keystore $ALAYA_MTOOLDIR/keystore/staking.json --amount "1" --recipient $ to_address --config $ALAYA_MTOOLDIR/validator/validator_config.json\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Parameter Description")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"keystore: path of the wallet sending the transaction"),(0,l.kt)("p",{parentName:"blockquote"},"amount: transfer amount, unit: ATP"),(0,l.kt)("p",{parentName:"blockquote"},"recipient: receiving address")),(0,l.kt)("h3",{id:"view-wallet-list"},"View wallet list"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Command line")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"alaya_mtool account list\n")),(0,l.kt)("h3",{id:"query-balance-based-on-wallet-name"},"Query balance based on wallet name"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Command line")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"alaya_mtool account balance $keystorename --config $ALAYA_MTOOLDIR/validator/validator_config.json\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Parameter description")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"$ keystorename: wallet file name\uff0cexample:staking.json")),(0,l.kt)("h3",{id:"query-balance-based-on-address"},"Query balance based on address"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Command line")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"alaya_mtool account balance -a $address --config $ALAYA_MTOOLDIR/validator/validator_config.json\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Parameter description")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"a: wallet address")),(0,l.kt)("h3",{id:"create-a-new-restricting-plans"},"Create a new restricting plans"),(0,l.kt)("p",null,"Creating a new restricting plan, node's ATPs will be transferred to a specified precompiled contract. The ATPs will be transferred to the specified account multiple times at specified intervals. Before creating a new restricting, you need to create a restricting plan description file in json format."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"restricting plan description file\uff0crestricting_plans.json")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "account": "atp12jn6835z96ez93flwezrwu4xpv8e4zatwxj7ju",\n  "plans": [\n    { "epoch": 5000, "amount": 100 },\n    { "epoch": 6000, "amount": 100 },\n    { "epoch": 7000, "amount": 100 }\n  ]\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"account\uff1athe specified account that will received ATP from the estricting plan."),(0,l.kt)("p",{parentName:"blockquote"},"epoch\uff1athe number of epoch to wait for a transfer plan (Greater than or equal to 1)"),(0,l.kt)("p",{parentName:"blockquote"},"amount\uff1athe number of ATP to be transferred. Unit: ATP")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"command line")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"alaya_mtool create_restricting --config $ALAYA_MTOOLDIR/validator/validator_config.json --keystore $ALAYA_MTOOLDIR/keystore/staking.json --file ./restricting_plans.json\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Parameter Description")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"config\uff1anode configuration file"),(0,l.kt)("p",{parentName:"blockquote"},"keytore: wallet file"),(0,l.kt)("p",{parentName:"blockquote"},"file: restricting plan description file")),(0,l.kt)("h3",{id:"initiate-a-staking-operation"},"Initiate a staking operation"),(0,l.kt)("p",null,"If the deployment of the consensus node is complete and the block has been synchronized successfully, you can use MTool for staking operations. After the staking fund application is completed, ensure that the balance of the staking account is sufficient, and replace the staking amount according to the user's situation. The minimum threshold for staking is ten thousand ATP."),(0,l.kt)("p",null,"Note: Please keep enough ATP in the staking account, so that the transactions initiated by the subsequent node management have sufficient transaction fees, such as voting for upgrading proposals, and unsecured transactions."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Command line")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"alaya_mtool staking --config $ALAYA_MTOOLDIR/validator/validator_config.json --keystore $ALAYA_MTOOLDIR/keystore/staking.json --amount 10000 --benefit_address xxx196278ns22j23awdfj9f2d4vz0pedld8a2fzwwj --delegated_reward_rate 5000 --node_name myNode --website www.mywebsite.com --details myNodeDescription --external_id 121412312\n")),(0,l.kt)("p",null,"Prompt:",(0,l.kt)("strong",{parentName:"p"},"please input keystore password:"),"Enter the password of the staking wallet and press Enter. If the following information is displayed, the staking is successful:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"operation finished\ntransaction hash:\n0x89b964d27d0caf1d8bf268f721eb123c4af57aed36187bea90b262f4769eeb9b\nSUCCESS\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Parameters Description")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"config\uff1anode configuration file"),(0,l.kt)("p",{parentName:"blockquote"},"keystore: staking wallet file"),(0,l.kt)("p",{parentName:"blockquote"},"amount: staking amount, not less than 10000ATP-staking threshold, no more than 8 decimal places"),(0,l.kt)("p",{parentName:"blockquote"},"restrictedamount: not less than 10000ATP-staking threshold, no more than 8 decimal points (staking using locked balance)"),(0,l.kt)("p",{parentName:"blockquote"},"autoamount: Not less than 10000ATP-Priority to use the lock-up balance staking, if the lock-up balance is not enough for the staking deposit, then use free amount staking"),(0,l.kt)("p",{parentName:"blockquote"},"benefit_address: benefit account to receive block-packing reward and staking reward"),(0,l.kt)("p",{parentName:"blockquote"},"delegated_reward_rate\uff1aDelegated bonus ratio, type is integer range is ","[","0,10000","]",", unit: ten thousand percent, e.g. enter 5000, it means the bonus ratio is 50%"),(0,l.kt)("p",{parentName:"blockquote"},"node",(0,l.kt)("em",{parentName:"p"},"name\uff1anode name\uff0c30 bytes(beginning with a letter, including alphabet, number, space, "),", -, #)"),(0,l.kt)("p",{parentName:"blockquote"},"website\uff1anode website, 30 bytes"),(0,l.kt)("p",{parentName:"blockquote"},"details\uff1anode description, 280 bytes"),(0,l.kt)("p",{parentName:"blockquote"},"external_id\uff1anode Icon ID of keybase.io, or identity authentication ID")),(0,l.kt)("h3",{id:"modify-validator-information-operation"},"Modify validator information operation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Command line")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'alaya_mtool update_validator --config $ALAYA_MTOOLDIR/validator/validator_config.json --keystore $ALAYA_MTOOLDIR/keystore/staking.json --node_name myNode --website www.mywebsite.com --external_id 121412312 --delegated_reward_rate 6000 --benefit_address atx1x0f9xwr9steccekttqvml0d26zgsxwdnt4f55x --details "Modify the verifier information operation"\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Parameters Description")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"config\uff1anode configuration file"),(0,l.kt)("p",{parentName:"blockquote"},"keystore: staking wallet file"),(0,l.kt)("p",{parentName:"blockquote"},"benefit_address","[","option","]",": benefit account to receive block-packing reward and staking reward"),(0,l.kt)("p",{parentName:"blockquote"},"delegated_reward_rate","[","option","]","\uff1aDelegated bonus ratio, type is integer range is ","[","0,10000","]",", unit: ten thousand percent, e.g. enter 5000, it means the bonus ratio is 50%"),(0,l.kt)("p",{parentName:"blockquote"},"node",(0,l.kt)("em",{parentName:"p"},"nam","[","option","]","e\uff1anode name\uff0c30 bytes(beginning with a letter, including alphabet, number, space, "),", -, #)"),(0,l.kt)("p",{parentName:"blockquote"},"website","[","option","]","\uff1anode website, 30 bytes"),(0,l.kt)("p",{parentName:"blockquote"},"details","[","option","]","\uff1anode description, 280 bytes"),(0,l.kt)("p",{parentName:"blockquote"},"external_id","[","option","]","\uff1anode Icon ID of keybase.io, or identity authentication ID")),(0,l.kt)("h3",{id:"decommissioning-operation"},"Decommissioning operation"),(0,l.kt)("font",{color:"red"},"**It takes 168 settlement cycles to withdraw from the pledge, please be careful!**"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Command line")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"alaya_mtool unstaking --keystore $ALAYA_MTOOLDIR/keystore/staking.json --config $ALAYA_MTOOLDIR/validator/validator_config.json\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Parameter Description")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"None")),(0,l.kt)("h3",{id:"increase-staking-operation"},"Increase staking operation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Command line")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"alaya_mtool increasestaking --amount 5000000 --keystore $ALAYA_MTOOLDIR/keystore/staking.json --config $ALAYA_MTOOLDIR/validator/validator_config.json\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Parameters Description")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"amount: Use the account balance to increase the staking amount (ATP), the minimum added value is not less than 10, and the decimal point does not exceed 8 digits"),(0,l.kt)("p",{parentName:"blockquote"},"restrictedamount: use the account balance to increase the amount of staking, not less than 10 staking threshold, the decimal point does not exceed 8")),(0,l.kt)("h3",{id:"submit-text-proposal"},"Submit Text Proposal"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Command line")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"alaya_mtool submit_textproposal --pid_id 100 --keystore $ALAYA_MTOOLDIR/keystore/staking.json --config $ALAYA_MTOOLDIR/validator/validator_config.json\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Parameter Description")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"pid_id: GitHub ID")),(0,l.kt)("h3",{id:"submit-upgrade-proposal-operation"},"Submit upgrade proposal operation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Command line")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"alaya_mtool submit_versionproposal --newversion 0.16.0 --end_voting_rounds 345 --pid_id 100 --keystore $ALAYA_MTOOLDIR/keystore/staking.json --config $ALAYA_MTOOLDIR/validator/validator_config.json\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Parameters Description")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"newversion: target upgrade version, x.x.x, number punctuation"),(0,l.kt)("p",{parentName:"blockquote"},"end_voting_rounds: the number of voting consensus rounds, the number of voting consensus rounds N, must satisfy 0 < N <= 4838 (about 2 weeks)"),(0,l.kt)("p",{parentName:"blockquote"},"pid_id: GitHub ID")),(0,l.kt)("h3",{id:"submit-cancel-proposal"},"Submit Cancel Proposal"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Command line")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"alaya_mtool submit_cancelproposal --proposalid 0x444c3df404bc1ce4d869166623514b370046cd37cdfa6e932971bc2f98afd1a6 --end_voting_rounds 12 --pid_id 100 --keystore $ALAYA_MTOOLDIR/keystore/staking.json --config $ALAYA_MTOOLDIR/validator/validator_config.json\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Parameters Description")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"proposalid: the ID of the proposal that needs to be cancelled"),(0,l.kt)("p",{parentName:"blockquote"},"end_voting_rounds: the number of voting consensus rounds, the number of voting consensus rounds N, must satisfy 0 < N <= 4838 (about 2 weeks)"),(0,l.kt)("p",{parentName:"blockquote"},"pid_id: GitHub ID")),(0,l.kt)("h3",{id:"text-proposal-voting-operation"},"Text proposal voting operation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Command line")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"alaya_mtool vote_textproposal --proposalid 0x444c3df404bc1ce4d869166623514b370046cd37cdfa6e932971bc2f98afd1a6 --opinion yes --keystore $ALAYA_MTOOLDIR/keystore/staking.json --config $ALAYA_MTOOLDIR/validator/validator_config.json\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Parameters Description")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"proposalid: text proposal ID, that is, the hash of the proposal transaction, 66 characters, alphanumeric"),(0,l.kt)("p",{parentName:"blockquote"},"opinion: voting options, yes, no, abstain-choose one")),(0,l.kt)("h3",{id:"upgrade-proposal-voting-operation"},"Upgrade proposal voting operation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Command line")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"alaya_mtool vote_versionproposal --proposalid 0x444c3df404bc1ce4d869166623514b370046cd37cdfa6e932971bc2f98afd1a6 --keystore $ALAYA_MTOOLDIR/keystore/staking.json --config $ALAYA_MTOOLDIR/validator/validator_config.json\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Parameter Description")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"proposalid: upgrade proposal ID, that is, the hash of the proposed transaction, 66 characters, alphanumeric")),(0,l.kt)("h3",{id:"cancel-proposal-voting"},"Cancel proposal voting"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Command line")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"alaya_mtool vote_cancelproposal --proposalid 0x444c3df404bc1ce4d869166623514b370046cd37cdfa6e932971bc2f98afd1a6 --opinion yes --keystore $ALAYA_MTOOLDIR/keystore/staking.json --config $ALAYA_MTOOLDIR/validator/validator_config.json\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Parameters Description")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"proposalid: Cancel the proposal ID, that is, the hash of the proposed transaction, 66 characters, composed of alphanumeric characters"),(0,l.kt)("p",{parentName:"blockquote"},"opinion: voting options, yes, no, abstain-choose one")),(0,l.kt)("h3",{id:"submit-parameter-proposal-operation"},"Submit parameter proposal operation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Command line")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"alaya_mtool submit_paramproposal --pid_id 200 --module $ module --paramname $ paramname --paramvalue $ paramvalue --keystore $ALAYA_MTOOLDIR/keystore/staking.json --config $ALAYA_MTOOLDIR/validator/validator_config.json\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Parameters Description")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"module: governance module parameters"),(0,l.kt)("p",{parentName:"blockquote"},"paramname: the name of the governance module parameter, pay attention to the case of the letters"),(0,l.kt)("p",{parentName:"blockquote"},"paramvalue: Governance module parameter value"),(0,l.kt)("p",{parentName:"blockquote"},"pid_id: GitHub ID")),(0,l.kt)("h3",{id:"parameter-proposal-voting-operation"},"Parameter proposal voting operation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Command line")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"alaya_mtool vote_paramproposal --proposalid 0x444c3df404bc1ce4d869166623514b370046cd37cdfa6e932971bc2f98afd1a6 --opinion yes --keystore $ALAYA_MTOOLDIR/keystore/staking.json --config $ALAYA_MTOOLDIR/validator/validator_config.json\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Parameters Description")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"proposalid: Cancel the proposal ID, that is, the hash of the proposed transaction, 66 characters, composed of alphanumeric characters"),(0,l.kt)("p",{parentName:"blockquote"},"opinion: voting options, yes, no, abstain-choose one")),(0,l.kt)("h3",{id:"version-declaration-operation"},"Version declaration operation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Command line")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"alaya_mtool declare_version --keystore $ALAYA_MTOOLDIR/keystore/staking.json --config $ALAYA_MTOOLDIR/validator/validator_config.json\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Parameter Description")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"None")),(0,l.kt)("h3",{id:"view-help"},"View help"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Command line")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"alaya_mtool -h\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Parameter Description")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"None")))}u.isMDXComponent=!0}}]);