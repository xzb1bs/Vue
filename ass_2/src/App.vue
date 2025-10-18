<template>
  <div class="app">
    <h1 class="title">MeTube</h1>

    <div class="top-bar">
      <input
        v-model="searchQuery"
        placeholder="Search by title or channel..."
        class="search"
      />
      <span class="video-count">Found {{ filteredVideos.length }} videos</span>
    </div>

    <div v-if="loading" class="loading">
      <div class="spinner"></div>
      <p>Loading videos...</p>
    </div>

    <div v-else-if="!filteredVideos.length" class="empty">
      <p>No videos found</p>
    </div>

    <div class="videos">
      <VideoCard
        v-for="(video, index) in filteredVideos"
        :key="index"
        :title="video.title"
        :channel="video.channel"
        :views="video.views"
        :likes="video.likes"
        :thumbnail="video.thumbnail"
        :videoUrl="video.videoUrl"
        :isLiked="video.isLiked"
        @toggle-like="toggleLike(index)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import VideoCard from './components/VideoCard.vue'
import useVideos from './composables/useVideos.js'

const { videos, loading, fetchVideos } = useVideos()
const searchQuery = ref('')

const filteredVideos = computed(() =>
  videos.value.filter(
    (v) =>
      v.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      v.channel.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
)

function toggleLike(index) {
  const video = videos.value[index]
  video.isLiked = !video.isLiked
  if (video.isLiked) {
    video.likes++
  } else {
    video.likes--
  }
}

fetchVideos()
</script>

<style scoped>
.app {
  max-width: 1100px;
  margin: auto;
  padding: 30px 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #222;
  background-color: #f9fafb;
  min-height: 100vh;
}

.title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
  color: #e53935;
  letter-spacing: 1px;
  font-weight: 700;
}

.top-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.search {
  padding: 12px 18px;
  border-radius: 25px;
  border: 1px solid #ccc;
  width: 70%;
  font-size: 15px;
  outline: none;
  transition: 0.3s;
  background-color: #fff;
}
.search:focus {
  border-color: #e53935;
  box-shadow: 0 0 8px rgba(229, 57, 53, 0.3);
}

.video-count {
  font-size: 14px;
  color: #555;
}

.videos {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.loading,
.empty {
  text-align: center;
  margin-top: 60px;
  color: #777;
  font-size: 18px;
}

.spinner {
  margin: 0 auto 10px;
  border: 4px solid #ddd;
  border-top: 4px solid #e53935;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
