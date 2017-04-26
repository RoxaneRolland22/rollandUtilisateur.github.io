$(document).ready(function(){
	$.ajax({
		url :"https://bitcoin.mubiz.com/info",
		dataType :"json",
		contentType :"application/json; charset=utf-8",
		type :"GET",
		timeout:"5000",
		async : false,

		success : function(data) {
			$('#bitcoin_block_number').append(data.blocks);
			$('#difficulty').append(data.difficulty);
		},

		error : function(xhr, status, err) {
			$('#bitcoin_block_number').append(err+" N/A");
			$('#difficulty').append(err+" N/A");
		}
	});
});
