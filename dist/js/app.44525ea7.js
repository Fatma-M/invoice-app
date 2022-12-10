(function(){"use strict";var e={2234:function(e,i,t){var n=t(9242),l=t(3396);const o={key:0},c={key:0,class:"app flex flex-column"},a={class:"app-content flex flex-column"},r={key:1,class:"mobile-message flex flex-column"},s=(0,l._)("h2",null,"Sorry, this app is not supported on mobile devices.",-1),d=(0,l._)("p",null,"To use this app, please use a computer or tablet.",-1),u=[s,d];function v(e,i,t,s,d,v){const p=(0,l.up)("NavigationBar"),m=(0,l.up)("InvoiceModal"),I=(0,l.up)("router-view"),_=(0,l.up)("ModalComponent");return e.invoicesLoaded?((0,l.wg)(),(0,l.iD)("div",o,[d.mobile?((0,l.wg)(),(0,l.iD)("div",r,u)):((0,l.wg)(),(0,l.iD)("div",c,[(0,l.Wm)(p),(0,l._)("div",a,[(0,l.Wm)(n.uT,{name:"invoice"},{default:(0,l.w5)((()=>[e.invoiceModal?((0,l.wg)(),(0,l.j4)(m,{key:0})):(0,l.kq)("",!0)])),_:1}),(0,l.Wm)(I)])])),e.modalActive?((0,l.wg)(),(0,l.j4)(_,{key:2})):(0,l.kq)("",!0)])):(0,l.kq)("",!0)}var p=t(65),m=t.p+"img/file-invoice-dollar-solid.58512f81.png";const I=e=>((0,l.dD)("data-v-59d1084a"),e=e(),(0,l.Cn)(),e),_={class:"flex"},f=I((()=>(0,l._)("div",{class:"branding flex"},[(0,l._)("img",{src:m,alt:""})],-1))),D=[f];function h(e,i,t,n,o,c){return(0,l.wg)(),(0,l.iD)("header",_,D)}var y={name:"navigationBar"},C=t(89);const g=(0,C.Z)(y,[["render",h],["__scopeId","data-v-59d1084a"]]);var E=g,T=t(7139),b=t.p+"img/icon-delete.56d292b1.svg",w=t.p+"img/icon-plus.8060a7cf.svg";const x=e=>((0,l.dD)("data-v-874467c8"),e=e(),(0,l.Cn)(),e),O={key:0},k={key:1},A={class:"bill-from flex flex-column"},N=x((()=>(0,l._)("h4",null,"Bill From",-1))),P={class:"input flex flex-column"},S=x((()=>(0,l._)("label",{for:"billerStreetAddress"},"Street Address",-1))),U={class:"location-details flex"},V={class:"input flex flex-column"},L=x((()=>(0,l._)("label",{for:"billerCity"},"City",-1))),G={class:"input flex flex-column"},Z=x((()=>(0,l._)("label",{for:"billerZipCode"},"Zip Code",-1))),q={class:"input flex flex-column"},M=x((()=>(0,l._)("label",{for:"billerCountry"},"Country",-1))),z={class:"bill-to flex flex-column"},j=x((()=>(0,l._)("h4",null,"Bill To",-1))),F={class:"input flex flex-column"},W=x((()=>(0,l._)("label",{for:"clientName"},"Client's Name",-1))),B={class:"input flex flex-column"},R=x((()=>(0,l._)("label",{for:"clientEmail"},"Client's Email",-1))),J={class:"input flex flex-column"},H=x((()=>(0,l._)("label",{for:"clientStreetAddress"},"Street Address",-1))),$={class:"location-details flex"},K={class:"input flex flex-column"},Y=x((()=>(0,l._)("label",{for:"clientCity"},"City",-1))),Q={class:"input flex flex-column"},X=x((()=>(0,l._)("label",{for:"clientZipCode"},"Zip Code",-1))),ee={class:"input flex flex-column"},ie=x((()=>(0,l._)("label",{for:"clientCountry"},"Country",-1))),te={class:"invoice-work flex flex-column"},ne={class:"payment flex"},le={class:"input flex flex-column"},oe=x((()=>(0,l._)("label",{for:"invoiceDate"},"Invoice Date",-1))),ce={class:"input flex flex-column"},ae=x((()=>(0,l._)("label",{for:"paymentDueDate"},"Payment Due",-1))),re={class:"input flex flex-column"},se=x((()=>(0,l._)("label",{for:"paymentTerms"},"Payment Terms",-1))),de=x((()=>(0,l._)("option",{value:"30"},"Net 30 Days",-1))),ue=x((()=>(0,l._)("option",{value:"60"},"Net 60 Days",-1))),ve=[de,ue],pe={class:"input flex flex-column"},me=x((()=>(0,l._)("label",{for:"productDescription"},"Product Description",-1))),Ie={class:"work-items"},_e=x((()=>(0,l._)("h3",null,"Item List",-1))),fe={class:"item-list"},De=x((()=>(0,l._)("tr",{class:"table-heading flex"},[(0,l._)("th",{class:"item-name"},"Item Name"),(0,l._)("th",{class:"qty"},"Qty"),(0,l._)("th",{class:"price"},"Price"),(0,l._)("th",{class:"total"},"Total")],-1))),he={class:"item-name"},ye=["onUpdate:modelValue"],Ce={class:"qty"},ge=["onUpdate:modelValue"],Ee={class:"price"},Te=["onUpdate:modelValue"],be={class:"total flex"},we=["onClick"],xe=x((()=>(0,l._)("img",{src:w,alt:"add"},null,-1))),Oe={class:"save flex"},ke={class:"left"},Ae={class:"right flex"},Ne={key:2,class:"purple",type:"submit"};function Pe(e,i,t,o,c,a){const r=(0,l.up)("ModalComponent"),s=(0,l.up)("Loading");return(0,l.wg)(),(0,l.iD)("div",{class:"invoice-wrap flex flex-column",onClick:i[19]||(i[19]=(...e)=>a.checkClick&&a.checkClick(...e)),ref:"invoiceWrap"},[e.modalActive?((0,l.wg)(),(0,l.j4)(r,{key:0})):(0,l.kq)("",!0),(0,l._)("form",{onSubmit:i[18]||(i[18]=(0,n.iM)(((...e)=>a.submitForm&&a.submitForm(...e)),["prevent"])),class:"invoice-content"},[(0,l.wy)((0,l.Wm)(s,null,null,512),[[n.F8,c.loading]]),e.editInvoice?((0,l.wg)(),(0,l.iD)("h1",k,"Edit Invoice")):((0,l.wg)(),(0,l.iD)("h1",O,"New Invoice")),(0,l._)("div",A,[N,(0,l._)("div",P,[S,(0,l.wy)((0,l._)("input",{type:"text",required:"",id:"billerStreetAddress","onUpdate:modelValue":i[0]||(i[0]=e=>c.billerStreetAddress=e)},null,512),[[n.nr,c.billerStreetAddress]])]),(0,l._)("div",U,[(0,l._)("div",V,[L,(0,l.wy)((0,l._)("input",{type:"text",required:"",id:"billerCity","onUpdate:modelValue":i[1]||(i[1]=e=>c.billerCity=e)},null,512),[[n.nr,c.billerCity]])]),(0,l._)("div",G,[Z,(0,l.wy)((0,l._)("input",{type:"text",required:"",id:"billerZipCode","onUpdate:modelValue":i[2]||(i[2]=e=>c.billerZipCode=e)},null,512),[[n.nr,c.billerZipCode]])]),(0,l._)("div",q,[M,(0,l.wy)((0,l._)("input",{type:"text",required:"",id:"billerCountry","onUpdate:modelValue":i[3]||(i[3]=e=>c.billerCountry=e)},null,512),[[n.nr,c.billerCountry]])])])]),(0,l._)("div",z,[j,(0,l._)("div",F,[W,(0,l.wy)((0,l._)("input",{type:"text",required:"",id:"clientName","onUpdate:modelValue":i[4]||(i[4]=e=>c.clientName=e)},null,512),[[n.nr,c.clientName]])]),(0,l._)("div",B,[R,(0,l.wy)((0,l._)("input",{type:"text",required:"",id:"clientEmail","onUpdate:modelValue":i[5]||(i[5]=e=>c.clientEmail=e)},null,512),[[n.nr,c.clientEmail]])]),(0,l._)("div",J,[H,(0,l.wy)((0,l._)("input",{type:"text",required:"",id:"clientStreetAddress","onUpdate:modelValue":i[6]||(i[6]=e=>c.clientStreetAddress=e)},null,512),[[n.nr,c.clientStreetAddress]])]),(0,l._)("div",$,[(0,l._)("div",K,[Y,(0,l.wy)((0,l._)("input",{type:"text",required:"",id:"clientCity","onUpdate:modelValue":i[7]||(i[7]=e=>c.clientCity=e)},null,512),[[n.nr,c.clientCity]])]),(0,l._)("div",Q,[X,(0,l.wy)((0,l._)("input",{type:"text",required:"",id:"clientZipCode","onUpdate:modelValue":i[8]||(i[8]=e=>c.clientZipCode=e)},null,512),[[n.nr,c.clientZipCode]])]),(0,l._)("div",ee,[ie,(0,l.wy)((0,l._)("input",{type:"text",required:"",id:"clientCountry","onUpdate:modelValue":i[9]||(i[9]=e=>c.clientCountry=e)},null,512),[[n.nr,c.clientCountry]])])])]),(0,l._)("div",te,[(0,l._)("div",ne,[(0,l._)("div",le,[oe,(0,l.wy)((0,l._)("input",{type:"text",required:"",id:"invoiceDate","onUpdate:modelValue":i[10]||(i[10]=e=>c.invoiceDate=e),disabled:""},null,512),[[n.nr,c.invoiceDate]])]),(0,l._)("div",ce,[ae,(0,l.wy)((0,l._)("input",{type:"text",required:"",id:"paymentDueDate","onUpdate:modelValue":i[11]||(i[11]=e=>c.paymentDueDate=e),disabled:""},null,512),[[n.nr,c.paymentDueDate]])])]),(0,l._)("div",re,[se,(0,l.wy)((0,l._)("select",{required:"",id:"paymentTerms","onUpdate:modelValue":i[12]||(i[12]=e=>c.paymentTerms=e)},ve,512),[[n.bM,c.paymentTerms]])]),(0,l._)("div",pe,[me,(0,l.wy)((0,l._)("input",{type:"text",required:"",id:"productDescription","onUpdate:modelValue":i[13]||(i[13]=e=>c.productDescription=e)},null,512),[[n.nr,c.productDescription]])]),(0,l._)("div",Ie,[_e,(0,l._)("table",fe,[De,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(c.invoiceItemList,((e,i)=>((0,l.wg)(),(0,l.iD)("tr",{class:"table-items flex",key:i},[(0,l._)("td",he,[(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":i=>e.itemName=i},null,8,ye),[[n.nr,e.itemName]])]),(0,l._)("td",Ce,[(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":i=>e.qty=i},null,8,ge),[[n.nr,e.qty]])]),(0,l._)("td",Ee,[(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":i=>e.price=i},null,8,Te),[[n.nr,e.price]])]),(0,l._)("td",be," $"+(0,T.zw)(e.total=e.qty*e.price),1),(0,l._)("img",{src:b,alt:"delete",class:"delete-icon",onClick:i=>a.deleteInvoiceItem(e.id)},null,8,we)])))),128))]),(0,l._)("div",{class:"flex button",onClick:i[14]||(i[14]=(...e)=>a.addNewInvoiceItem&&a.addNewInvoiceItem(...e))},[xe,(0,l.Uk)(" Add New Item ")])])]),(0,l._)("div",Oe,[(0,l._)("div",ke,[(0,l._)("button",{class:"red",type:"button",onClick:i[15]||(i[15]=(...e)=>a.closeInvoice&&a.closeInvoice(...e))}," Cancel ")]),(0,l._)("div",Ae,[e.editInvoice?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("button",{key:0,class:"dark-purple",type:"submit",onClick:i[16]||(i[16]=(...e)=>a.saveDraft&&a.saveDraft(...e))}," Save Draft ")),e.editInvoice?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("button",{key:1,class:"purple",type:"submit",onClick:i[17]||(i[17]=(...e)=>a.publishInvoice&&a.publishInvoice(...e))}," Create Invoice ")),e.editInvoice?((0,l.wg)(),(0,l.iD)("button",Ne," Update Invoice ")):(0,l.kq)("",!0)])])],32)],512)}t(7658);var Se=t(6035),Ue=t(4275);const Ve={apiKey:"AIzaSyBoQSZJ0XcCmqTBmjZxkdB2mWjnKr1n7C0",authDomain:"invoice-app-ac6c6.firebaseapp.com",projectId:"invoice-app-ac6c6",storageBucket:"invoice-app-ac6c6.appspot.com",messagingSenderId:"763853281042",appId:"1:763853281042:web:4bdb5594aa768a12a685cb"},Le=(0,Ue.ZF)(Ve);var Ge=(0,Se.ad)(Le),Ze=t(2083);const qe={class:"loading"},Me=(0,l._)("span",null,null,-1),ze=[Me];function je(e,i,t,n,o,c){return(0,l.wg)(),(0,l.iD)("div",qe,ze)}var Fe={name:"LoadingComponent"};const We=(0,C.Z)(Fe,[["render",je]]);var Be=We;const Re=e=>((0,l.dD)("data-v-f2092210"),e=e(),(0,l.Cn)(),e),Je={class:"modal flex"},He={class:"modal-content"},$e=Re((()=>(0,l._)("p",null,"Are you sure you want to exit? Your changes will not be saved?",-1))),Ke={class:"actions flex"};function Ye(e,i,t,n,o,c){return(0,l.wg)(),(0,l.iD)("div",Je,[(0,l._)("div",He,[$e,(0,l._)("div",Ke,[(0,l._)("button",{onClick:i[0]||(i[0]=(...e)=>c.closeModal&&c.closeModal(...e)),class:"purple"},"Return"),(0,l._)("button",{onClick:i[1]||(i[1]=(...e)=>c.closeInvoice&&c.closeInvoice(...e)),class:"red"},"Close")])])])}var Qe={methods:{...(0,p.OI)(["TOGGLE_MODAL","TOGGLE_INVOICE"]),closeModal(){this.TOGGLE_MODAL()},closeInvoice(){this.TOGGLE_MODAL(),this.TOGGLE_INVOICE()}}};const Xe=(0,C.Z)(Qe,[["render",Ye],["__scopeId","data-v-f2092210"]]);var ei=Xe,ii={name:"invoiceModal",components:{Loading:Be,ModalComponent:ei},data(){return{loading:!1,docId:null,dateOptions:{year:"numeric",month:"short",day:"numeric"},billerStreetAddress:null,billerCity:null,billerZipCode:null,billerCountry:null,clientName:null,clientEmail:null,clientStreetAddress:null,clientCity:null,clientZipCode:null,clientCountry:null,invoiceDateUnix:null,invoiceDate:null,paymentTerms:null,paymentDueDateUnix:null,paymentDueDate:null,productDescription:null,invoicePending:null,invoiceDraft:null,invoiceItemList:[],invoiceTotal:0}},created(){if(this.editInvoice||(this.invoiceDateUnix=Date.now(),this.invoiceDate=new Date(this.invoiceDateUnix).toLocaleDateString("en-us",this.dateOptions)),this.editInvoice){const e=this.currentInvoiceArray[0];this.docId=e.docId,this.billerStreetAddress=e.billerStreetAddress,this.billerCity=e.billerCity,this.billerZipCode=e.billerZipCode,this.billerCountry=e.billerCountry,this.clientName=e.clientName,this.clientEmail=e.clientEmail,this.clientStreetAddress=e.clientStreetAddress,this.clientCity=e.clientCity,this.clientZipCode=e.clientZipCode,this.clientCountry=e.clientCountry,this.invoiceDateUnix=e.invoiceDateUnix,this.invoiceDate=e.invoiceDate,this.paymentTerms=e.paymentTerms,this.paymentDueDateUnix=e.paymentDueDateUnix,this.paymentDueDate=e.paymentDueDate,this.productDescription=e.productDescription,this.invoicePending=e.invoicePending,this.invoiceDraft=e.invoiceDraft,this.invoiceItemList=e.invoiceItemList,this.invoiceTotal=e.invoiceTotal}},methods:{...(0,p.OI)(["TOGGLE_INVOICE","TOGGLE_MODAL"]),...(0,p.nv)(["UPDATE_INVOICE","GET_INVOICES"]),checkClick(e){e.target===this.$refs.invoiceWrap&&this.TOGGLE_MODAL()},closeInvoice(){this.TOGGLE_MODAL(),this.modalActive||this.TOGGLE_INVOICE()},addNewInvoiceItem(){this.invoiceItemList.push({id:(0,Ze.h)(),itemName:"",qty:"",price:0,total:0})},deleteInvoiceItem(e){this.invoiceItemList=this.invoiceItemList.filter((i=>i.id!==e))},calInvoiceTotal(){this.invoiceTotal=0,this.invoiceItemList.forEach((e=>{this.invoiceTotal+=e.total}))},publishInvoice(){this.invoicePending=!0},saveDraft(){this.invoiceDraft=!0},async uploadInvoice(){if(this.invoiceItemList.length<=0)return void alert("Please ensure you filled out work items!");this.loading=!0,this.calInvoiceTotal();const e=(0,Se.ET)((0,Se.hJ)(Ge,"invoices"),{invoiceId:(0,Ze.h)(6),billerStreetAddress:this.billerStreetAddress,billerCity:this.billerCity,billerZipCode:this.billerZipCode,billerCountry:this.billerCountry,clientName:this.clientName,clientEmail:this.clientEmail,clientStreetAddress:this.clientStreetAddress,clientCity:this.clientCity,clientZipCode:this.clientZipCode,clientCountry:this.clientCountry,invoiceDate:this.invoiceDate,invoiceDateUnix:this.invoiceDateUnix,paymentTerms:this.paymentTerms,paymentDueDate:this.paymentDueDate,paymentDueDateUnix:this.paymentDueDateUnix,productDescription:this.productDescription,invoiceItemList:this.invoiceItemList,invoiceTotal:this.invoiceTotal,invoicePending:this.invoicePending,invoiceDraft:this.invoiceDraft,invoicePaid:null});await e,this.loading=!0,this.TOGGLE_INVOICE(),this.GET_INVOICES()},async updateInvoice(){if(this.invoiceItemList.length<=0)return void alert("Please ensure you filled out work items!");this.loading=!0,this.calInvoiceTotal();const e=(0,Se.JU)(Ge,"invoices",this.docId);await(0,Se.r7)(e,{billerStreetAddress:this.billerStreetAddress,billerCity:this.billerCity,billerZipCode:this.billerZipCode,billerCountry:this.billerCountry,clientName:this.clientName,clientEmail:this.clientEmail,clientStreetAddress:this.clientStreetAddress,clientCity:this.clientCity,clientZipCode:this.clientZipCode,clientCountry:this.clientCountry,invoiceDate:this.invoiceDate,invoiceDateUnix:this.invoiceDateUnix,paymentTerms:this.paymentTerms,paymentDueDate:this.paymentDueDate,paymentDueDateUnix:this.paymentDueDateUnix,productDescription:this.productDescription,invoiceItemList:this.invoiceItemList,invoiceTotal:this.invoiceTotal}),this.loading=!1;const i={docId:this.docId,routeId:this.$route.params.invoiceId};this.UPDATE_INVOICE(i)},submitForm(){this.editInvoice?this.updateInvoice():this.uploadInvoice()}},watch:{paymentTerms(){const e=new Date;this.paymentDueDateUnix=e.setDate(e.getDate()+parseInt(this.paymentTerms)),this.paymentDueDate=new Date(this.paymentDueDateUnix).toLocaleDateString("en-us",this.dateOptions)}},computed:{...(0,p.rn)(["modalActive","editInvoice","currentInvoiceArray"])}};const ti=(0,C.Z)(ii,[["render",Pe],["__scopeId","data-v-874467c8"]]);var ni=ti,li={components:{NavigationBar:E,InvoiceModal:ni,ModalComponent:ei},data(){return{mobile:null}},created(){this.GET_INVOICES(),this.checkScreen(),window.addEventListener("resize",this.checkScreen)},methods:{...(0,p.nv)(["GET_INVOICES"]),checkScreen(){const e=window.innerWidth;this.mobile=e<=750}},computed:{...(0,p.rn)(["invoiceModal","modalActive","invoicesLoaded"])}};const oi=(0,C.Z)(li,[["render",v]]);var ci=oi,ai=t(2483),ri=t.p+"img/icon-arrow-down.b9de1510.svg",si=t.p+"img/illustration-empty.7369fe97.svg";const di=e=>((0,l.dD)("data-v-48b7f206"),e=e(),(0,l.Cn)(),e),ui={class:"home container"},vi={class:"header flex"},pi={class:"left flex flex-column"},mi=di((()=>(0,l._)("h1",null,"Invoices",-1))),Ii={class:"right flex"},_i={key:0},fi=di((()=>(0,l._)("img",{src:ri,alt:"arrow-down"},null,-1))),Di={class:"filter-menu"},hi=di((()=>(0,l._)("div",{class:"inner-button flex"},[(0,l._)("img",{src:w,alt:"plus"})],-1))),yi=di((()=>(0,l._)("span",null,"New Invoice",-1))),Ci=[hi,yi],gi={key:0},Ei={key:1,class:"empty flex flex-column"},Ti=di((()=>(0,l._)("img",{src:si,alt:""},null,-1))),bi=di((()=>(0,l._)("h3",null,"There is nothing here..",-1))),wi=di((()=>(0,l._)("p",null," Create a new invoice by clicking the new invoice button and get started ",-1))),xi=[Ti,bi,wi];function Oi(e,i,t,o,c,a){const r=(0,l.up)("InvoiceComponent");return(0,l.wg)(),(0,l.iD)("div",ui,[(0,l._)("div",vi,[(0,l._)("div",pi,[mi,(0,l._)("span",null,"There are "+(0,T.zw)(e.invoiceData.length)+" total invoices",1)]),(0,l._)("div",Ii,[(0,l._)("div",{class:"filter flex",onClick:i[4]||(i[4]=(...e)=>a.toggleFilterMenu&&a.toggleFilterMenu(...e))},[(0,l._)("span",null,[(0,l.Uk)("Filter by status "),c.filteredInvoice?((0,l.wg)(),(0,l.iD)("span",_i,": "+(0,T.zw)(c.filteredInvoice),1)):(0,l.kq)("",!0)]),fi,(0,l.wy)((0,l._)("ul",Di,[(0,l._)("li",{onClick:i[0]||(i[0]=(...e)=>a.filteredInvoices&&a.filteredInvoices(...e))},"Draft"),(0,l._)("li",{onClick:i[1]||(i[1]=(...e)=>a.filteredInvoices&&a.filteredInvoices(...e))},"Pending"),(0,l._)("li",{onClick:i[2]||(i[2]=(...e)=>a.filteredInvoices&&a.filteredInvoices(...e))},"Paid"),(0,l._)("li",{onClick:i[3]||(i[3]=(...e)=>a.filteredInvoices&&a.filteredInvoices(...e))},"Clear Filter")],512),[[n.F8,c.filterMenu]])]),(0,l._)("div",{class:"button flex",onClick:i[5]||(i[5]=(...e)=>a.newInvoice&&a.newInvoice(...e))},Ci)])]),e.invoiceData.length>0?((0,l.wg)(),(0,l.iD)("div",gi,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.filteredData,(e=>((0,l.wg)(),(0,l.j4)(r,{invoice:e,key:e.invoiceId},null,8,["invoice"])))),128))])):((0,l.wg)(),(0,l.iD)("div",Ei,xi))])}var ki=t.p+"img/icon-arrow-right.b66e4358.svg";const Ai=e=>((0,l.dD)("data-v-62267d0f"),e=e(),(0,l.Cn)(),e),Ni={class:"left flex"},Pi={class:"tracking-number"},Si={class:"due-date"},Ui={class:"person"},Vi={class:"right flex"},Li={class:"price"},Gi={key:0},Zi={key:1},qi={key:2},Mi=Ai((()=>(0,l._)("div",{class:"icon"},[(0,l._)("img",{src:ki,alt:""})],-1)));function zi(e,i,t,n,o,c){const a=(0,l.up)("router-link");return(0,l.wg)(),(0,l.j4)(a,{to:{name:"Invoice",params:{invoiceId:t.invoice.invoiceId}},class:"invoice flex"},{default:(0,l.w5)((()=>[(0,l._)("div",Ni,[(0,l._)("span",Pi,"#"+(0,T.zw)(t.invoice.invoiceId),1),(0,l._)("span",Si,(0,T.zw)(t.invoice.paymentDueDate),1),(0,l._)("span",Ui,(0,T.zw)(t.invoice.clientName),1)]),(0,l._)("div",Vi,[(0,l._)("span",Li,"$"+(0,T.zw)(t.invoice.invoiceTotal),1),(0,l._)("div",{class:(0,T.C_)(["status-button flex",{paid:t.invoice.invoicePaid,draft:t.invoice.invoiceDraft,pending:t.invoice.invoicePending}])},[t.invoice.invoicePaid?((0,l.wg)(),(0,l.iD)("span",Gi,"Paid")):(0,l.kq)("",!0),t.invoice.invoiceDraft?((0,l.wg)(),(0,l.iD)("span",Zi,"Draft")):(0,l.kq)("",!0),t.invoice.invoicePending?((0,l.wg)(),(0,l.iD)("span",qi,"Pending")):(0,l.kq)("",!0)],2),Mi])])),_:1},8,["to"])}var ji={name:"InvoiceComponent",props:["invoice"]};const Fi=(0,C.Z)(ji,[["render",zi],["__scopeId","data-v-62267d0f"]]);var Wi=Fi,Bi={name:"HomeView",components:{InvoiceComponent:Wi},data(){return{filterMenu:null,filteredInvoice:null}},methods:{...(0,p.OI)(["TOGGLE_INVOICE","NEW_INVOICE"]),newInvoice(){this.NEW_INVOICE(),this.TOGGLE_INVOICE()},toggleFilterMenu(){this.filterMenu=!this.filterMenu},filteredInvoices(e){"Clear Filter"!==e.target.innerText?this.filteredInvoice=e.target.innerText:this.filteredInvoice=null}},computed:{...(0,p.rn)(["invoiceData"]),filteredData(){return this.invoiceData.filter((e=>"Draft"===this.filteredInvoice?!0===e.invoiceDraft:"Paid"===this.filteredInvoice?!0===e.invoicePaid:"Pending"===this.filteredInvoice?!0===e.invoicePending:e))}}};const Ri=(0,C.Z)(Bi,[["render",Oi],["__scopeId","data-v-48b7f206"]]);var Ji=Ri,Hi=t.p+"img/icon-arrow-left.80729cc3.svg";const $i=e=>((0,l.dD)("data-v-d19eca7a"),e=e(),(0,l.Cn)(),e),Ki={key:0,class:"container invoice-view"},Yi=$i((()=>(0,l._)("img",{src:Hi,alt:""},null,-1))),Qi={class:"header flex"},Xi={class:"left flex"},et={key:0},it={key:1},tt={key:2},nt={class:"right flex"},lt={class:"invoice-details flex flex-column"},ot={class:"top flex"},ct={class:"left flex flex-column"},at=$i((()=>(0,l._)("span",null,"#",-1))),rt={class:"right flex flex-column"},st={class:"middle flex"},dt={class:"payment flex flex-column"},ut=$i((()=>(0,l._)("h4",null,"Invoice Date",-1))),vt=$i((()=>(0,l._)("h4",null,"Payment Date",-1))),pt={class:"bill flex flex-column"},mt=$i((()=>(0,l._)("h4",null,"Bill To",-1))),It={class:"send-to flex flex-column"},_t=$i((()=>(0,l._)("h4",null,"Sent To",-1))),ft={class:"bottom flex flex-column"},Dt={class:"billing-items"},ht=$i((()=>(0,l._)("div",{class:"headings flex"},[(0,l._)("p",null,"Item Name"),(0,l._)("p",null,"QTY"),(0,l._)("p",null,"Price"),(0,l._)("p",null,"Total")],-1))),yt={class:"total flex"},Ct=$i((()=>(0,l._)("p",null,"Amount Due",-1)));function gt(e,i,t,n,o,c){const a=(0,l.up)("router-link");return o.currentInvoice?((0,l.wg)(),(0,l.iD)("div",Ki,[(0,l.Wm)(a,{class:"nav-link flex",to:{name:"HomeView"}},{default:(0,l.w5)((()=>[Yi,(0,l.Uk)(" Go Back ")])),_:1}),(0,l._)("div",Qi,[(0,l._)("div",Xi,[(0,l._)("div",{class:(0,T.C_)(["status-button flex",{paid:o.currentInvoice.invoicePaid,draft:o.currentInvoice.invoiceDraft,pending:o.currentInvoice.invoicePending}])},[o.currentInvoice.invoicePaid?((0,l.wg)(),(0,l.iD)("span",et,"Paid")):(0,l.kq)("",!0),o.currentInvoice.invoiceDraft?((0,l.wg)(),(0,l.iD)("span",it,"Draft")):(0,l.kq)("",!0),o.currentInvoice.invoicePending?((0,l.wg)(),(0,l.iD)("span",tt,"Pending")):(0,l.kq)("",!0)],2)]),(0,l._)("div",nt,[(0,l._)("button",{class:"dark-purple",onClick:i[0]||(i[0]=(...e)=>c.toggleEditInvoice&&c.toggleEditInvoice(...e))},"Edit"),(0,l._)("button",{onClick:i[1]||(i[1]=e=>c.deleteInvoice(o.currentInvoice.docId)),class:"red"}," Delete "),o.currentInvoice.invoicePending?((0,l.wg)(),(0,l.iD)("button",{key:0,class:"green",onClick:i[2]||(i[2]=e=>c.updateStatusToPaid(o.currentInvoice.docId))}," Mark as Paid ")):(0,l.kq)("",!0),o.currentInvoice.invoiceDraft||o.currentInvoice.invoicePaid?((0,l.wg)(),(0,l.iD)("button",{key:1,onClick:i[3]||(i[3]=e=>c.updateStatusToPending(o.currentInvoice.docId)),class:"orange"}," Mark as Pending ")):(0,l.kq)("",!0)])]),(0,l._)("div",lt,[(0,l._)("div",ot,[(0,l._)("div",ct,[(0,l._)("p",null,[at,(0,l.Uk)((0,T.zw)(o.currentInvoice.invoiceId),1)]),(0,l._)("p",null,(0,T.zw)(o.currentInvoice.productDescription),1)]),(0,l._)("div",rt,[(0,l._)("p",null,(0,T.zw)(o.currentInvoice.billerStreetAddress),1),(0,l._)("p",null,(0,T.zw)(o.currentInvoice.billerCity),1),(0,l._)("p",null,(0,T.zw)(o.currentInvoice.billerZipCode),1),(0,l._)("p",null,(0,T.zw)(o.currentInvoice.billerCountry),1)])]),(0,l._)("div",st,[(0,l._)("div",dt,[ut,(0,l._)("p",null,(0,T.zw)(o.currentInvoice.invoiceDate),1),vt,(0,l._)("p",null,(0,T.zw)(o.currentInvoice.paymentDueDate),1)]),(0,l._)("div",pt,[mt,(0,l._)("p",null,(0,T.zw)(o.currentInvoice.clientName),1),(0,l._)("p",null,(0,T.zw)(o.currentInvoice.clientStreetAddress),1),(0,l._)("p",null,(0,T.zw)(o.currentInvoice.clientCity),1),(0,l._)("p",null,(0,T.zw)(o.currentInvoice.clientZipCode),1),(0,l._)("p",null,(0,T.zw)(o.currentInvoice.clientCountry),1)]),(0,l._)("div",It,[_t,(0,l._)("p",null,(0,T.zw)(o.currentInvoice.clientEmail),1)])]),(0,l._)("div",ft,[(0,l._)("div",Dt,[ht,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.currentInvoice.invoiceItemList,(e=>((0,l.wg)(),(0,l.iD)("div",{class:"item flex",key:e},[(0,l._)("p",null,(0,T.zw)(e.itemName),1),(0,l._)("p",null,(0,T.zw)(e.qty),1),(0,l._)("p",null,(0,T.zw)(e.price),1),(0,l._)("p",null,(0,T.zw)(e.total),1)])))),128))]),(0,l._)("div",yt,[Ct,(0,l._)("p",null,(0,T.zw)(o.currentInvoice.invoiceTotal),1)])])])])):(0,l.kq)("",!0)}var Et={name:"InvoiceView",components:{},data(){return{currentInvoice:null,confirm:!1}},created(){this.getCurrentInvoice()},methods:{...(0,p.OI)(["SET_CURRENT_INVOICE","EDIT_INVOICE","NEW_INVOICE","TOGGLE_INVOICE","TOGGLE_MODAL"]),...(0,p.nv)(["DELETE_INVOICE","UPDATE_STATUS_TO_PENDING","UPDATE_STATUS_TO_PAID"]),getCurrentInvoice(){this.SET_CURRENT_INVOICE(this.$route.params.invoiceId),this.currentInvoice=this.currentInvoiceArray[0]},toggleEditInvoice(){this.EDIT_INVOICE(),this.TOGGLE_INVOICE()},async deleteInvoice(e){confirm("are you sure")&&(await this.DELETE_INVOICE(e),this.$router.push("/"))},updateStatusToPaid(e){this.UPDATE_STATUS_TO_PAID(e)},updateStatusToPending(e){this.UPDATE_STATUS_TO_PENDING(e)}},computed:{...(0,p.rn)(["currentInvoiceArray","editInvoice","modalActive"])},watch:{currentInvoiceArray(){this.editInvoice&&(this.currentInvoice=this.currentInvoiceArray[0])}}};const Tt=(0,C.Z)(Et,[["render",gt],["__scopeId","data-v-d19eca7a"]]);var bt=Tt;const wt=[{path:"/",name:"HomeView",component:Ji},{path:"/invoice/:invoiceId",name:"Invoice",component:bt}],xt=(0,ai.p7)({history:(0,ai.PO)("/"),routes:wt});var Ot=xt,kt=(0,p.MT)({state:{invoiceData:[],invoicesLoaded:null,invoiceModal:null,modalActive:null,currentInvoiceArray:null,editInvoice:null},getters:{},mutations:{TOGGLE_INVOICE(e){e.invoiceModal=!e.invoiceModal},TOGGLE_MODAL(e){e.modalActive=!e.modalActive},SET_INVOICE_DATA(e,i){e.invoiceData.push(i)},INVOICES_LOADED(e){e.invoicesLoaded=!0},SET_CURRENT_INVOICE(e,i){e.currentInvoiceArray=e.invoiceData.filter((e=>e.invoiceId===i))},EDIT_INVOICE(e){e.editInvoice=!0},NEW_INVOICE(e){e.editInvoice=!1},DELETE_INVOICE(e,i){e.invoiceData=e.invoiceData.filter((e=>e.docId!==i))},UPDATE_STATUS_TO_PAID(e,i){e.invoiceData.forEach((e=>{e.docId===i&&(e.invoicePaid=!0,e.invoicePending=!1)}))},UPDATE_STATUS_TO_PENDING(e,i){e.invoiceData.forEach((e=>{e.docId===i&&(e.invoicePaid=!1,e.invoicePending=!0,e.invoiceDraft=!1)}))}},actions:{async GET_INVOICES({commit:e,state:i}){const t=await(0,Se.PL)((0,Se.hJ)(Ge,"invoices"));t.forEach((t=>{if(!i.invoiceData.some((e=>e.docId===t.id))){const i={docId:t.id,invoiceId:t.data().invoiceId,billerStreetAddress:t.data().billerStreetAddress,billerCity:t.data().billerCity,billerZipCode:t.data().billerZipCode,billerCountry:t.data().billerCountry,clientName:t.data().clientName,clientEmail:t.data().clientEmail,clientStreetAddress:t.data().clientStreetAddress,clientCity:t.data().clientCity,clientZipCode:t.data().clientZipCode,clientCountry:t.data().clientCountry,invoiceDateUnix:t.data().invoiceDateUnix,invoiceDate:t.data().invoiceDate,paymentTerms:t.data().paymentTerms,paymentDueDateUnix:t.data().paymentDueDateUnix,paymentDueDate:t.data().paymentDueDate,productDescription:t.data().productDescription,invoiceItemList:t.data().invoiceItemList,invoiceTotal:t.data().invoiceTotal,invoicePending:t.data().invoicePending,invoiceDraft:t.data().invoiceDraft,invoicePaid:t.data().invoicePaid};e("SET_INVOICE_DATA",i)}})),e("INVOICES_LOADED")},async UPDATE_INVOICE({commit:e,dispatch:i},{docId:t,routeId:n}){e("DELETE_INVOICE",t),await i("GET_INVOICES"),e("TOGGLE_INVOICE"),e("EDIT_INVOICE"),e("SET_CURRENT_INVOICE",n)},async DELETE_INVOICE({commit:e},i){await(0,Se.oe)((0,Se.JU)(Ge,"invoices",i)),e("DELETE_INVOICE",i)},async UPDATE_STATUS_TO_PAID({commit:e},i){const t=(0,Se.JU)(Ge,"invoices",i);await(0,Se.r7)(t,{invoicePaid:!0,invoicePending:!1}),e("UPDATE_STATUS_TO_PAID",i)},async UPDATE_STATUS_TO_PENDING({commit:e},i){const t=(0,Se.JU)(Ge,"invoices",i);await(0,Se.r7)(t,{invoicePending:!0,invoicePaid:!1,invoiceDraft:!1}),e("UPDATE_STATUS_TO_PENDING",i)}},modules:{}});(0,n.ri)(ci).use(kt).use(Ot).mount("#app")}},i={};function t(n){var l=i[n];if(void 0!==l)return l.exports;var o=i[n]={exports:{}};return e[n](o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(i,n,l,o){if(!n){var c=1/0;for(d=0;d<e.length;d++){n=e[d][0],l=e[d][1],o=e[d][2];for(var a=!0,r=0;r<n.length;r++)(!1&o||c>=o)&&Object.keys(t.O).every((function(e){return t.O[e](n[r])}))?n.splice(r--,1):(a=!1,o<c&&(c=o));if(a){e.splice(d--,1);var s=l();void 0!==s&&(i=s)}}return i}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,l,o]}}(),function(){t.n=function(e){var i=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(i,{a:i}),i}}(),function(){t.d=function(e,i){for(var n in i)t.o(i,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:i[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)}}(),function(){t.p="/"}(),function(){var e={143:0};t.O.j=function(i){return 0===e[i]};var i=function(i,n){var l,o,c=n[0],a=n[1],r=n[2],s=0;if(c.some((function(i){return 0!==e[i]}))){for(l in a)t.o(a,l)&&(t.m[l]=a[l]);if(r)var d=r(t)}for(i&&i(n);s<c.length;s++)o=c[s],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(d)},n=self["webpackChunkinvoice_app"]=self["webpackChunkinvoice_app"]||[];n.forEach(i.bind(null,0)),n.push=i.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(2234)}));n=t.O(n)})();
//# sourceMappingURL=app.44525ea7.js.map