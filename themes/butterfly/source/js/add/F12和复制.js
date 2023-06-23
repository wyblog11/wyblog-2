// 复制提醒
document.addEventListener("copy",function(e){
  new Vue({
    data:function(){
      this.$notify({
        title:"哎嘿！复制成功",
        message:"若要转载请务必保留原文链接！猹分你个瓜！",
        position: 'bottom-right',
        offset: 50,
        showClose: false,
        type:"success"
      });
      return{visible:false}
    }
  })
})

