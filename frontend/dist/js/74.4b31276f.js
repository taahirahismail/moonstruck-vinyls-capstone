"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[74],{1074:function(t,e,s){s.r(e),s.d(e,{default:function(){return w}});var r=s(3396),a=s(7139);const i=t=>((0,r.dD)("data-v-3369ada7"),t=t(),(0,r.Cn)(),t),o={class:"media"},c=i((()=>(0,r._)("h1",{class:"p-4 text-center heading-text"},"Checkout !",-1))),n={class:"card m-3 p-2 text-center blue-bg"},l=["src","alt"],u={class:"p-3"},d={class:"p-3"},m=["onClick"],h={class:"m-3 p-3 d-flex align-items-center justify-content-between gold-text"};function p(t,e,s,i,p,f){return(0,r.wg)(),(0,r.iD)("div",o,[c,(0,r._)("div",n,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(f.cart,(t=>((0,r.wg)(),(0,r.iD)("div",{key:t.orderID,class:"m-3 p-2 d-flex align-items-center justify-content-between dark-bg"},[(0,r._)("div",null,[(0,r._)("img",{src:t.prodImg,alt:t.albumName,class:"img-fluid",style:{width:"50%"}},null,8,l)]),(0,r._)("div",u,[(0,r._)("h4",null,(0,a.zw)(t.albumName),1),(0,r._)("cite",null,(0,a.zw)(t.albumArtist),1)]),(0,r._)("span",d,(0,a.zw)(t.price),1),(0,r._)("button",{type:"submit",onClick:e=>f.removeFromCart(t.userID,t.prodID),class:"rem-btn"}," X ",8,m)])))),128))]),(0,r._)("div",h,[(0,r.Uk)(" Total: R "+(0,a.zw)(t.total)+" ",1),(0,r._)("button",{type:"submit",onClick:e[0]||(e[0]=t=>f.clearCart(this.userID)),class:"p-2 pay-btn"}," Proceed With Payment ")])])}var f={props:["product"],computed:{cart(){return this.$store.state.cart}},mounted(){this.$store.dispatch("fetchCart",this.userID)},methods:{clearCart(t){t=this.userID,this.$store.dispatch("clearCart",t),setTimeout((()=>{location.reload()}),500),this.$swal({title:"Purchase Successful!",text:"Your order will arrive in 5-10 business days. Thank you for shopping with Moonstruck Vinyl's !",icon:"success",timer:5e3})},removeFromCart(t){confirm("Are you sure you want to remove this item from the cart?")&&(this.$store.dispatch("removeFromCart",t),setTimeout((()=>{location.reload()}),500))}}},b=s(89);const v=(0,b.Z)(f,[["render",p],["__scopeId","data-v-3369ada7"]]);var w=v}}]);
//# sourceMappingURL=74.4b31276f.js.map