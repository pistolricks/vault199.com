export function start() {
  let coords = null;
  if ("geolocation" in navigator) {
    navigator.geolocation.watchPosition(
      (position) => {
        console.log(position);
        document.querySelector("output").textContent = `
                Lat: ${position.coords.latitude} Long: ${position.coords.longitude}
                `;
        coords = position;
      },
      (error) => {
        console.log(error);
      },
      {
        enableHighAccuracy: true,
        maximumAge: 3e4,
        timeout: 6e4
      }
    );
  }
  return coords;
}
export async function getGps(setPosition) {
  let coords = null;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setPosition(() => position.coords);
        coords = () => position.coords;
      },
      () => {
        return "Unable to retrieve your location";
      }
    );
  } else {
    return "Geolocation is not supported by your browser";
  }
  return coords;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlby50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NldHRlcn0gZnJvbSBcInNvbGlkLWpzXCI7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIGxldCBjb29yZHM6IEdlb2xvY2F0aW9uUG9zaXRpb24gPSBudWxsO1xuXG4gICAgaWYgKCdnZW9sb2NhdGlvbicgaW4gbmF2aWdhdG9yKSB7XG4gICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi53YXRjaFBvc2l0aW9uKFxuICAgICAgICAgICAgcG9zaXRpb24gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwib3V0cHV0XCIpLnRleHRDb250ZW50ID0gYFxuICAgICAgICAgICAgICAgIExhdDogJHtwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGV9IExvbmc6ICR7cG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZX1cbiAgICAgICAgICAgICAgICBgO1xuXG4gICAgICAgICAgICAgICAgY29vcmRzID0gcG9zaXRpb247XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZW5hYmxlSGlnaEFjY3VyYWN5OiB0cnVlLFxuICAgICAgICAgICAgICAgIG1heGltdW1BZ2U6IDMwMDAwLFxuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDYwMDAwXG4gICAgICAgICAgICB9LFxuICAgICAgICApXG4gICAgfVxuICAgIHJldHVybiBjb29yZHM7XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEdwcyhzZXRQb3NpdGlvbj86IFNldHRlcjxHZW9sb2NhdGlvbkNvb3JkaW5hdGVzPikge1xuXG4gICAgbGV0IGNvb3JkcyA9IG51bGw7XG5cbiAgICBpZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XG4gICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oKHBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0UG9zaXRpb24oKCkgPT4gcG9zaXRpb24uY29vcmRzKTtcbiAgICAgICAgICAgICAgICBjb29yZHMgPSAoKSA9PiBwb3NpdGlvbi5jb29yZHM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoJ1VuYWJsZSB0byByZXRyaWV2ZSB5b3VyIGxvY2F0aW9uJyk7XG4gICAgICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKCdHZW9sb2NhdGlvbiBpcyBub3Qgc3VwcG9ydGVkIGJ5IHlvdXIgYnJvd3NlcicpXG4gICAgfVxuICAgIHJldHVybiBjb29yZHM7XG59Il0sIm1hcHBpbmdzIjoiQUFHTyxnQkFBUyxRQUFRO0FBQ3BCLE1BQUksU0FBOEI7QUFFbEMsTUFBSSxpQkFBaUIsV0FBVztBQUM1QixjQUFVLFlBQVk7QUFBQSxNQUNsQixjQUFZO0FBQ1IsZ0JBQVEsSUFBSSxRQUFRO0FBQ3BCLGlCQUFTLGNBQWMsUUFBUSxFQUFFLGNBQWM7QUFBQSx1QkFDeEMsU0FBUyxPQUFPLFFBQVEsVUFBVSxTQUFTLE9BQU8sU0FBUztBQUFBO0FBR2xFLGlCQUFTO0FBQUEsTUFDYjtBQUFBLE1BQ0EsV0FBUztBQUNMLGdCQUFRLElBQUksS0FBSztBQUFBLE1BQ3JCO0FBQUEsTUFDQTtBQUFBLFFBQ0ksb0JBQW9CO0FBQUEsUUFDcEIsWUFBWTtBQUFBLFFBQ1osU0FBUztBQUFBLE1BQ2I7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUNBLFNBQU87QUFDWDtBQUdBLHNCQUFzQixPQUFPLGFBQThDO0FBRXZFLE1BQUksU0FBUztBQUViLE1BQUksVUFBVSxhQUFhO0FBQ3ZCLGNBQVUsWUFBWTtBQUFBLE1BQW1CLENBQUMsYUFBYTtBQUMvQyxvQkFBWSxNQUFNLFNBQVMsTUFBTTtBQUNqQyxpQkFBUyxNQUFNLFNBQVM7QUFBQSxNQUM1QjtBQUFBLE1BQ0EsTUFBTTtBQUNGLGVBQVE7QUFBQSxNQUNaO0FBQUEsSUFBQztBQUFBLEVBQ1QsT0FBTztBQUNILFdBQVE7QUFBQSxFQUNaO0FBQ0EsU0FBTztBQUNYOyIsIm5hbWVzIjpbXX0=