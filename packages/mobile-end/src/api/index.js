const baseUrl = "https://admin.csback.gamemorefun.net"

export function checkIn(data) {
  return fetch(baseUrl + "/api/v9/checkin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  }).then(r => {
    if (r.ok) { // 如果响应状态码在200-299之间
      return r.json()
    }
  })
}

export function pageEvent (data) {
  if (data.event_name === "pv") {
    fbq('track', 'PageView');
  } else if(data.event_name === "ios_btn"){
    fbq("trackCustom", "iOSButton");
  } else {
    fbq("trackCustom", "GPButton");
  }
}
