// JavaScript Document

//椤甸潰骞虫粦婊氬姩
//浣跨敤鏂规硶
/*
璋冪敤鏂规硶bodyscroll_01();
濉叆鐩爣鐨刬d銆�
鐗瑰埆娉ㄦ剰锛氬叾鐖跺厓绱犵殑position寤鸿涓簊tatic锛屽惁鍒欏彲鑳藉嚭閿欍€�
*/

function bodyscroll_01(targetelement_id) //targetelement_id鏄洰鏍囧厓绱犵殑id锛岀壒鍒敞鎰忥細鍏剁埗鍏冪礌鐨刾osition寤鸿涓簊tatic锛屽惁鍒欏彲鑳藉嚭閿欍€�
{
	var targetelement_top; //琛ㄧず鐩爣鍏冪礌鐨則op銆�
	var scrolltop_value;  //璁板綍婊氬姩鏉＄殑top鐨勫€笺€�
	var scrolltop_targetvalue;  //琛ㄧず婊氬姩鏉＄殑top鐨勭洰鏍囧€笺€�

	var scrolltop_step;  //琛ㄧず婊氬姩鏉＄殑婊氬姩姝ラ暱銆�
	var scrolltop_times;  //璁板綍鍗曟浜嬩欢鍐呮粴鍔ㄦ潯鐨勬粴鍔ㄦ鏁般€�

	targetelement_top = document.getElementById(targetelement_id).offsetTop;//鑾峰彇鐩爣鍏冪礌鐨則op鐨勫€硷紝鏄〉闈㈡帓鐗堝悗鐨勫疄闄呭€笺€�

	scrolltop_times = 0;  //婊氬姩鏉℃粴鍔ㄦ鏁板綊0锛屾鏁板垵濮嬪寲锛�

	scrolltop_value = document.documentElement.scrollTop || document.body.scrollTop; //鍏煎锛岃幏鍙栨粴鍔ㄦ潯鐨則op鐨勫€笺€�

	if (scrolltop_value < targetelement_top)//婊氬姩鏉op鍊煎皬浜庣洰鏍囧厓绱爐op鍊硷紝鍗崇洰鏍囧厓绱犲湪娴忚鍣ㄥ彲瑙嗗尯鍩熶箣涓嬨€�
	{
		scrolltop_step = (scrolltop_value - targetelement_top) / (-30); //灏嗘粴鍔ㄦ潯top鍊间笌鐩爣鍏冪礌top鍊肩殑宸瓑鍒嗭紝鍒�30娈碉紝姣忔鍗充负婊氬姩姝ラ暱銆傛樉绀哄櫒澶氭暟鏄�60甯э紝杩欓噷鍙栦竴鍗婏紝鍥犳鍙�30銆�
		bodyscroll_godown(); //璋冪敤鍚戜笅婊氬姩鐨勬柟娉曘€�
	}

	if (scrolltop_value > targetelement_top)//婊氬姩鏉op鍊煎ぇ浜庣洰鏍囧厓绱爐op鍊硷紝鍗崇洰鏍囧厓绱犲湪娴忚鍣ㄥ彲瑙嗗尯鍩熶箣涓娿€�
	{
		scrolltop_step = (scrolltop_value - targetelement_top) / (30); //灏嗘粴鍔ㄦ潯top鍊间笌鐩爣鍏冪礌top鍊肩殑宸瓑鍒嗭紝鍒�30娈碉紝姣忔鍗充负婊氬姩姝ラ暱銆傛樉绀哄櫒澶氭暟鏄�60甯э紝杩欓噷鍙栦竴鍗婏紝鍥犳鍙�30銆�
		bodyscroll_goup(); //璋冪敤鍚戜笂婊氬姩鐨勬柟娉曘€�
	}

	scrolltop_targetvalue = targetelement_top;  //灏嗙洰鏍囧厓绱犵殑Top鍊间綔涓烘粴鍔ㄦ潯鐨則op鐨勭洰鏍囧€笺€�


	/*鍚戜笅婊氬姩*/
	function bodyscroll_godown() {
		scrolltop_value = scrolltop_value + scrolltop_step; //婊氬姩鏉op鍊硷紝鎸夋闀垮鍔犮€�

		document.documentElement.scrollTop = scrolltop_value; //瀵规粴鍔ㄦ潯鐨剆crollTop璧嬪€硷紝浣挎粴鍔ㄦ潯婊氬姩銆�
		document.body.scrollTop = scrolltop_value; //鍏煎锛屽婊氬姩鏉＄殑scrollTop璧嬪€硷紝浣挎粴鍔ㄦ潯婊氬姩銆�

		scrolltop_times = scrolltop_times + 1; //婊氬姩鏉℃粴鍔ㄨ娆°€�

		bodyscroll_timer = setTimeout(function () { bodyscroll_godown() }, 10); //寰幆鎵ц锛屾瘡姝ラ棿闅�10姣銆�

		if ((scrolltop_targetvalue - document.documentElement.scrollTop) <= (scrolltop_step) && document.documentElement.scrollTop != 0)//褰撴粴鍔ㄦ潯top鍊间笌鐩爣鍊肩殑宸笉瓒充竴涓闀挎椂锛屽苟涓旀粴鍔ㄦ潯top鍊间笉涓�0鏃讹紝搴旇鍋滄寰幆锛涘皬浜庣瓑浜庣殑绛変簬鏄繀椤荤殑锛岃嫢涓€寮€濮嬫粴鍔ㄦ潯top鍊肩瓑浜庣洰鏍囧€硷紝閭ｄ箞姝ラ暱涓�0锛岃嫢鍙湁灏忎簬锛屽垯鈥滅洰鏍�=姝ラ暱=0鈥濅笉绗﹀悎if鏉′欢锛屾晠璁℃椂鍣ㄤ笉浼氱粨鏉燂紝鍥犳绛変簬鍙锋槸蹇呰鐨勩€�
		{
			clearTimeout(bodyscroll_timer);//缁堟寰幆銆�
			document.documentElement.scrollTop = scrolltop_targetvalue;//婊氬姩鏉″埌浣嶃€�
		}

		if ((scrolltop_targetvalue - document.body.scrollTop) <= (scrolltop_step) && document.body.scrollTop != 0) //鍏煎銆�
		{
			clearTimeout(bodyscroll_timer);//缁堟寰幆銆�
			document.body.scrollTop = scrolltop_targetvalue;//婊氬姩鏉″埌浣嶃€�
		}
		if (scrolltop_times >= 31)//闃叉璁℃椂鍣ㄦ湭鑳藉仠姝紝褰撴粴鍔ㄦ鏁拌秴閲忓垯寮哄埗鍋滄寰幆銆�
		{
			clearTimeout(bodyscroll_timer);
			scrolltop_times = 0;//婊氬姩鏉℃鏁板綊0銆�
		}
	}

	/*鍚戜笂婊氬姩*/
	function bodyscroll_goup() {
		scrolltop_value = scrolltop_value - scrolltop_step; //婊氬姩鏉op鍊硷紝鎸夋闀垮噺灏戙€�

		document.documentElement.scrollTop = scrolltop_value; //瀵规粴鍔ㄦ潯鐨剆crollTop璧嬪€硷紝浣挎粴鍔ㄦ潯婊氬姩銆�
		document.body.scrollTop = scrolltop_value; //鍏煎锛屽婊氬姩鏉＄殑scrollTop璧嬪€硷紝浣挎粴鍔ㄦ潯婊氬姩銆�

		scrolltop_times = scrolltop_times + 1; //婊氬姩鏉℃粴鍔ㄨ娆°€�

		bodyscroll_timer = setTimeout(function () { bodyscroll_goup() }, 10); //寰幆鎵ц锛屾瘡姝ラ棿闅�10姣銆�

		if ((document.documentElement.scrollTop - scrolltop_targetvalue) <= (scrolltop_step) && document.documentElement.scrollTop != 0)//鐞嗙敱鍚宐odyscroll_godown鏂规硶涓殑鐩稿叧閮ㄥ垎銆�
		{
			clearTimeout(bodyscroll_timer);//缁堟寰幆銆�
			document.documentElement.scrollTop = scrolltop_targetvalue;//婊氬姩鏉″埌浣嶃€�
		}
		if ((document.body.scrollTop - scrolltop_targetvalue) <= (scrolltop_step) && document.body.scrollTop != 0)//鍏煎銆�
		{
			clearTimeout(bodyscroll_timer);//绉嶆寰幆銆�
			document.body.scrollTop = scrolltop_targetvalue;//婊氬姩鏉″埌浣嶃€�
		}
		if (scrolltop_times >= 31)//闃叉璁℃椂鍣ㄦ湭鑳藉仠姝紝褰撴粴鍔ㄦ鏁拌秴閲忓垯寮哄埗鍋滄寰幆銆�
		{
			clearTimeout(bodyscroll_timer);
			scrolltop_times = 0;//婊氬姩鏉℃鏁板綊0銆�
		}
	}

}


/*Javascript Plug_in*/
/*XeonPeony Copyright*/
/*V1.1*/
