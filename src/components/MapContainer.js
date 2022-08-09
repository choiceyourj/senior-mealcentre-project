import React, { useEffect } from "react";

const { kakao } = window;

let infowindow = new kakao.maps.InfoWindow({zIndex:1});
let markers = [];

const MapContainer = ({ searchPlace }) => {

    useEffect(()=>{
        const container = document.getElementById("map");
        const options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 3,
        };
        const map = new kakao.maps.Map(container, options);
        const ps = new kakao.maps.services.Places();

        searchPlaces();
        function searchPlaces() {
            let keyword = searchPlace;
      
            if (!keyword.replace(/^\s+|\s+$/g, "")) {
              console.log("키워드를 입력해주세요!");
              return false;
            }
            ps.keywordSearch(keyword, placesSearchCB);
          }


        function placesSearchCB (data, status, pagination) {
            if (status === kakao.maps.services.Status.OK) {

                displayPlaces(data);
                displayPagination(pagination);
            }else if (status === kakao.maps.services.Status.ZERO_RESULT) {
                alert('검색 결과가 존재하지 않습니다.');
                return;
            } else if (status === kakao.maps.services.Status.ERROR) {
                alert('검색 결과 중 오류가 발생했습니다. 다시 입력해 주세요');
                return;
            }
        }

        function displayPlaces(places) {
            const listEl = document.getElementById('placesList'), 
                  resultEl = document.getElementById('menu_wrap'),
                  fragment = document.createDocumentFragment(), 
                  bounds = new kakao.maps.LatLngBounds();
      
            listEl && removeAllChildNods(listEl);
            removeMarker();
      
            for ( var i=0; i<places.length; i++ ) {
        
              let placePosition = new kakao.maps.LatLng(places[i].y, places[i].x),
                  marker = addMarker(placePosition, i, undefined), 
                  itemEl = getListItem(i, places[i]); // 검색 결과 항목 Element를 생성
                  bounds.extend(placePosition);
      
    
                  (function(marker, title) {
                    kakao.maps.event.addListener(marker, 'mouseover', function() {
                      displayInfowindow(marker, title);
                    });
          
                    kakao.maps.event.addListener(marker, 'mouseout', function() {
                      infowindow.close();
                    });
          
                    itemEl.onmouseover =  function () {
                      displayInfowindow(marker, title);
                    };
          
                    itemEl.onmouseout =  function () {
                      infowindow.close();
                    };
                    })(marker, places[i].place_name);
          
                  fragment.appendChild(itemEl);
                }
      
                listEl && listEl.appendChild(fragment);
                if (resultEl) {
                  resultEl.scrollTop = 0;
                }
            map.setBounds(bounds);
          }

          function getListItem(index, places) {

            const el = document.createElement('li');
            let itemStr = `
                <div class="info">
                  <span class="marker marker_${index+1}">
                    ${index+1}
                  </span>
                  <a href="${places.place_url}">
                    <h5 class="info-item place-name">${places.place_name}</h5>
                    ${
                        places.road_address_name
                      ? `<span class="info-item road-address-name">
                          ${places.road_address_name}
                         </span>
                         <span class="info-item address-name">
                            ${places.address_name}
                            </span>`
                      : `<span class="info-item address-name">
                            ${places.address_name}
                        </span>`
                    }
                    <span class="info-item tel">
                      ${places.phone}
                    </span>
                  </a>
                </div>
                `
      
            el.innerHTML = itemStr;
            el.className = 'item';
      
            return el;
          }

          
    function addMarker(position, idx, title) {
        var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png', 
            imageSize = new kakao.maps.Size(36, 37),  
            imgOptions =  {
              spriteSize : new kakao.maps.Size(36, 691), 
              spriteOrigin : new kakao.maps.Point(0, (idx*46)+10), 
              offset: new kakao.maps.Point(13, 37) 
            },
            markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions),
            marker = new kakao.maps.Marker({
              position: position, 
              image: markerImage 
            });
  
        marker.setMap(map); 
        markers.push(marker);  
  
        return marker;
      }

    function removeMarker() {
        for ( var i = 0; i < markers.length; i++ ) {
          markers[i].setMap(null);
        }
        markers = [];
      }

     function displayPagination(pagination) {
        const paginationEl = document.getElementById('pagination');
        let fragment = document.createDocumentFragment();
        let i; 
  

        while (paginationEl.hasChildNodes()) {
          paginationEl.lastChild &&
            paginationEl.removeChild(paginationEl.lastChild);
        }
  
        for (i=1; i<=pagination.last; i++) {
          const el = document.createElement('a');
          el.href = "#";
          el.innerHTML = i.toString();
  
          if (i===pagination.current) {
            el.className = 'on';
          } else {
            el.onclick = (function(i) {
              return function() {
                pagination.gotoPage(i);
              }
            })(i);
          }
  
          fragment.appendChild(el);
        }
        paginationEl.appendChild(fragment);
      }
      
      
    function displayInfowindow(marker,title) {
        const content = '<div style="padding:5px;z-index:1;" class="marker-title">' + title + '</div>';
  
        infowindow.setContent(content);
        infowindow.open(map, marker);
      }


    function removeAllChildNods(el) {
        while (el.hasChildNodes()) {
          el.lastChild &&
            el.removeChild (el.lastChild);
        }
      }
    },[searchPlace]);

    return (
      
          <div className="map_wrap">
              <div id="map"></div>
                  <hr/>
                  <ul id="placesList"></ul>
                  <div id="pagination"></div>
              </div>
    );
}

export default MapContainer;

