(function(){var t,e;t=function(e){var n;if(e.parentNode.dataset.parent&&(n=$("#"+e.parentNode.dataset.parent+" input")[0],!n.checked&&!n.disabled))return n.checked=!0,t(n)},e=function(t){return $("span.scc_product_checkbox input",t.parentNode.parentNode).each(function(t,n){if(n.checked&&!n.disabled)return n.checked=!1,e(n)})},$(function(){return $("body").on("change","span.scc_product_checkbox input",function(n){var c;return c=n.target,c.checked?t(c):e(c)}),$("body").on("click","a.edit_deferrer",function(t){return t.preventDefault(),$("a.edit_deferree",$(t.target).closest("tr"))[0].click()}),$("body").on("click","#test_scc_connection_btn",function(t){return $(".tab-error").removeClass("tab-error"),$("#connection_test_result")[0].innerHTML="",$("#test_scc_connection_indicator").show(),$.ajax(t.target.parentNode.dataset.url,{type:"PUT",dataType:"JSON",data:$("form").serialize(),success:function(){return $("#test_scc_connection_btn").addClass("btn-success"),$("#test_scc_connection_btn").removeClass("btn-default"),$("#test_scc_connection_btn").removeClass("btn-danger")},error:function(){return $("#test_scc_connection_btn").addClass("btn-danger"),$("#test_scc_connection_btn").removeClass("btn-default"),$("#test_scc_connection_btn").removeClass("btn-success"),$("#scc_account_login").closest(".form-group").addClass("tab-error"),$("#scc_account_password").closest(".form-group").addClass("tab-error"),$("#scc_account_base_url").closest(".form-group").addClass("tab-error"),$("#connection_test_result")[0].innerHTML="Connection test failed!",$("#scc_account_login").focus()},complete:function(){return $("#test_scc_connection_indicator").hide()}})})})}).call(this);