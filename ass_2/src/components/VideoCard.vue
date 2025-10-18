<template>
  <div class="video-card" @click="openVideo">
    <img :src="thumbnail" :alt="title" class="thumb" />

    <div class="info">
      <h3 class="title">{{ title }}</h3>
      <p class="channel">{{ channel }}</p>
      <p class="views">{{ views.toLocaleString() }} views</p>
    </div>

    <button
      @click.stop="toggleLike"
      :class="['like-btn', { liked: isLiked }]"
    >
      {{ isLiked ? '💖' : '🤍' }} {{ likes }}
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  channel: String,
  views: Number,
  likes: Number,
  thumbnail: String,
  videoUrl: String,
})
const emit = defineEmits(['liked'])

function openVideo() {
  window.open(props.videoUrl, '_blank')
}
function toggleLike() {
  emit('toggle-like')
}
</script>

<style scoped>
.video-card {
  background-color: #ffffff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.video-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.15);
}

.thumb {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.info {
  padding: 10px 15px;
  text-align: left;
}

.title {
  font-size: 16px;
  font-weight: 600;
  color: #222;
  margin-bottom: 5px;
}

.channel {
  font-size: 14px;
  color: #777;
  margin-bottom: 3px;
}

.views {
  font-size: 13px;
  color: #999;
}

.like-btn {
  border: none;
  background-color: #e53935;
  color: white;
  font-size: 14px;
  font-weight: 500;
  padding: 8px 10px;
  border-radius: 0 0 15px 15px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.like-btn:hover {
  background-color: #d32f2f;
}
.like-btn.liked {
  background-color: #43a047;
}
</style>
