import Mock from "mockjs";

Mock.mock("/api/banner", "get", {
  code: 0,
  msg: "",
  data: [
    {
      id: "2",
      midImg: "https://img0.baidu.com/it/u=164735162,2186284968&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
      bigImg: "https://img0.baidu.com/it/u=164735162,2186284968&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
      title: "血火同源",
      description: "如果我回头，一切都完了",
    },
    {
      id: "1",
      midImg:
        "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100",
      bigImg:
        "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=1920&h=1080",
      title: "凛冬将至",
      description: "人唯有恐惧的时候方能勇敢",
    },
    {
      id: "3",
      midImg: "http://mdrs.yuanjin.tech/img/20201031204401.jpg",
      bigImg: "http://mdrs.yuanjin.tech/img/20201031204403.jpg",
      title: "听我怒吼",
      description: "兰尼斯特有债必偿",
    },
  ],
});
