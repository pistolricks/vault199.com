import { createSignal, createEffect, For, Show } from "solid-js";
import WsWrapper from "../wrappers/ws-wrapper";

// Import all images from static/images directory
const imageContext = import.meta.glob("../../static/images/*.jpg", { eager: true });

const ImageGallery = () => {
  // Extract image paths from the context and create image objects with IDs
  const images = Object.keys(imageContext).map((path, index) => {
    // Extract filename from path for display
    const filename = path.split('/').pop() || '';
    // Get the actual URL from the module (works in both dev and production)
    const imageUrl = (imageContext[path] as { default: string }).default;
    // Create a unique ID for each image
    return {
      id: index + 1,
      path: imageUrl,
      filename
    };
  });

  const [selectedImage, setSelectedImage] = createSignal<{ id: number; path: string; filename: string } | null>(null);
  const [currentUser, setCurrentUser] = createSignal({
    id: 1,
    username: "Friend",
    profileSrc: "https://picsum.photos/200/300"
  });

  // Track likes for each image
  const [imageLikes, setImageLikes] = createSignal<Record<number, number>>({});

  // Function to handle username change
  const handleUsernameChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target) {
      setCurrentUser({
        ...currentUser(),
        username: target.value
      });
    }
  };

  // Function to handle image click
  const handleImageClick = (image: { id: number; path: string; filename: string }) => {
    setSelectedImage(image);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  // Function to handle liking an image
  const handleLike = (imageId: number) => {
    setImageLikes(prev => {
      const currentLikes = prev[imageId] || 0;
      return {
        ...prev,
        [imageId]: currentLikes + 1
      };
    });
  };

  // Get likes for a specific image
  const getLikes = (imageId: number) => {
    return imageLikes()[imageId] || 0;
  };

  return (
    <div class="mx-auto p-4">


      {/* User settings */}
      <div class="max-w-md mx-auto mb-8 p-4 bg-gray-50 rounded-lg shadow-xs">
        <div class="flex items-center gap-4">
          <div class="shrink-0">
            <div class="size-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-700 font-bold">
              {currentUser().username.substring(0, 1).toUpperCase()}
            </div>
          </div>
          <div class="grow">
            <label for="username" class="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <input
              type="text"
              id="username"
              value={currentUser().username}
              onInput={handleUsernameChange}
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-xs focus:outline-hidden focus:ring-sky-500 focus:border-sky-500"
              placeholder="Enter your name"
            />
            <p class="mt-1 text-xs text-gray-500">This name will appear on your comments</p>
          </div>
        </div>
      </div>

      {/* Image Grid */}
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <For each={images}>
          {(image, i) => (
            <div 
              class="relative aspect-square overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => handleImageClick(image)}
            >
              <img 
                src={image.path} 
                alt={image.filename} 
                class="w-full h-full object-cover"
              />
              <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm truncate flex justify-between items-center">
                <span>Image {i() + 1}</span>
                <div class="flex items-center gap-1">
                  <span>{getLikes(image.id)}</span>
                  <button 
                    class="text-white hover:text-red-400 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLike(image.id);
                    }}
                  >
                    ❤️
                  </button>
                </div>
              </div>
            </div>
          )}
        </For>
      </div>

      {/* Modal for selected image with comments */}
      <Show when={selectedImage()}>
        <div class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 sm:p-4">
          <div class="bg-white sm:rounded-lg max-w-4xl w-full h-[100vh] sm:max-h-[90vh] flex flex-col">
            {/* Close button */}
            <button 
              onClick={closeModal}
              class="absolute top-1 right-2 sm:top-4 sm:right-4 text-gray-200 sm:text-white text-2xl z-10"
            >
              ✕
            </button>

            {/* Modal header - social media style */}
            <div class="sm:p-4 border-b border-gray-200 flex items-center gap-3">
              <div class="size-10 rounded-full sm:bg-sky-100 flex items-center justify-center text-sky-700 font-bold">
                {currentUser().username.substring(0, 1).toUpperCase()}
              </div>
              <div class="grow">
                <div class="font-semibold">{currentUser().username}</div>
                <div class="text-xs text-gray-500"></div>
              </div>
            </div>

            <div class="flex flex-col md:flex-row h-full">
              {/* Image container */}
              <div class="md:w-2/3  sm:p-4 flex flex-col items-center justify-center">
                <img 
                  src={selectedImage()?.path} 
                  alt={selectedImage()?.filename} 
                  class="max-h-[50vh] sm:max-h-[60vh] object-contain"
                />

                {/* Image actions */}

                <div class="w-full sm:mt-4 px-4 flex items-center justify-between">
                  {/*
                  <div class="flex items-center gap-2">
                    <button 
                      class="text-2xl hover:text-red-500 transition-colors"
                      onClick={() => selectedImage() && handleLike(selectedImage()!.id)}
                    >
                      ❤️
                    </button>
                    <span class="font-semibold">{selectedImage() ? getLikes(selectedImage()!.id) : 0} likes</span>
                  </div>
*/}
                </div>
              </div>

              {/* Comments section */}
              <div class="md:w-1/3 border-l border-gray-200 overflow-y-auto">
                <div class="hidden sm:block py-1 px-4 sm:p-4 border-b border-gray-200">
                  <h3 class="font-bold text-lg">Comments</h3>
                  <p class="text-xs text-gray-500">Share your thoughts about this image</p>
                </div>
                <div class="h-[45vh] md:h-[60vh] overflow-y-auto">
                  <WsWrapper 
                    id={selectedImage()?.id || 0} 
                    username={currentUser().username} 
                    profileSrc={currentUser().profileSrc}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Show>
    </div>
  );
};

export default ImageGallery;
