import { ref, onMounted } from 'vue'

export default function useVideos() {
  const videos = ref([])
  const loading = ref(true)

  function fetchVideos() {
    loading.value = true
    setTimeout(() => {
      videos.value = [
        {
          title: 'Vue 3 Basics for Beginners',
          channel: 'Code Academy',
          views: 124567,
          likes: 0,
          isLiked: false,
          thumbnail: 'https://i.ytimg.com/vi/ZqgiuPt5QZo/hqdefault.jpg',
          videoUrl: 'https://www.youtube.com/watch?v=ZqgiuPt5QZo',
        },
        {
          title: 'Learn Composition API Step by Step',
          channel: 'Vue Mastery',
          views: 41789,
          likes: 0,
          isLiked: false,
          thumbnail: 'https://i.ytimg.com/vi/bwItFdPt-6M/hqdefault.jpg',
          videoUrl: 'https://www.youtube.com/watch?v=bwItFdPt-6M',
        },
        {
          title: 'Beyoncé - Single Ladies (Put a Ring on It) (Video Version)',
          channel: 'Beyoncé',
          views: 4180510709,
          likes: 0,
          isLiked: false,
          thumbnail: 'https://i.ytimg.com/vi/4m1EFMoRFvY/hqdefault.jpg',
          videoUrl: 'https://www.youtube.com/watch?v=4m1EFMoRFvY',
        },
        {
          title: 'Kendrick Lamar - Bitch, Don\'t Kill My Vibe (Explicit)',
          channel: 'Kendrick Lamar',
          views: 784646189,
          likes: 0,
          isLiked: false,
          thumbnail: 'https://i.ytimg.com/vi/GF8aaTu2kg0/hqdefault.jpg',
          videoUrl: 'https://www.youtube.com/watch?v=GF8aaTu2kg0',
        },
        {
          title: 'NINETY ONE - ABUSE | Official Visualizer',
          channel: 'NINETY ONE',
          views: 418964198,
          likes: 0,
          isLiked: false,
          thumbnail: 'https://avatars.mds.yandex.net/i?id=9448b5c86cea4bf1ca16b5233fdd836d46e7f7ce-4233878-images-thumbs&n=13',
          videoUrl: 'https://www.youtube.com/watch?v=UsdhuIKmmDY&list=RDUsdhuIKmmDY&start_radio=1',
        },
        {
          title: 'Coldplay - Viva La Vida (Live)',
          channel: 'Coldplay',
          views: 417846120,
          likes: 0,
          isLiked: false,
          thumbnail: 'https://i.ytimg.com/vi/dvgZkm1xWPE/hqdefault.jpg',
          videoUrl: 'https://www.youtube.com/watch?v=dvgZkm1xWPE',
        },
        {
          title: 'ABC World News Tonight with David Muir Full Broadcast - October 17, 2025',
          channel: 'ABC News',
          views: 417904,
          likes: 0,
          isLiked: false,
          thumbnail: 'https://avatars.mds.yandex.net/i?id=f541acbcc536892165bf9390b002f8face69ac06-10779221-images-thumbs&n=13',
          videoUrl: 'https://www.youtube.com/watch?v=AnhIUa4CJ-E',
        },
        {
          title: 'Relaxing Music for Study',
          channel: 'Study with Me',
          views: 717894,
          likes: 0,
          isLiked: false,
          thumbnail: 'https://i.ytimg.com/vi/1ZYbU82GVz4/hqdefault.jpg',
          videoUrl: 'https://www.youtube.com/watch?v=1ZYbU82GVz4',
        },
        {
          title: '19-year-old ISHIKAWA faces 2.18m MUSERSKIY! | Full Match | JPN vs. RUS | Volleyball World Cup 2015',
          channel: 'Volleyball World',
          views: 461788,
          likes: 0,
          isLiked: false,
          thumbnail: 'https://avatars.mds.yandex.net/i?id=bfae192a893c308dbe9b531d57c82629648913b1-4350294-images-thumbs&n=13',
          videoUrl: 'https://www.youtube.com/watch?v=T28bHcJNk5k',
        },
        {
          title: 'Quick & Easy Recipes With Gordon Ramsay',
          channel: 'Gordon Ramsay',
          views: 4719079,
          likes: 0,
          isLiked: false,
          thumbnail: 'https://avatars.mds.yandex.net/i?id=37c22ddbb5574d31866198b5454244246b886f2871de5cf4-5895790-images-thumbs&n=13',
          videoUrl: 'https://www.youtube.com/watch?v=mhDJNfV7hjk',
        },
      ]
      loading.value = false
    }, 1500)
  }

  onMounted(fetchVideos)
  return { videos, loading, fetchVideos }
}
