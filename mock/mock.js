//文章内容
export const articleList = [
  {
    id: 1,
    type: 1, //文章类型
    title: "置顶数据", //问斩标题
    isVip: true, //是否置顶
    create_specific_time:"2020-09-29 20:21",//具体的发布时间
    create_time: "20天前", //发布时间
    like_count: 20, //点赞数
    share_count: 100, //分享数
    has_like:true,//已点赞
    comments_count: 200, //评论数
    content: "这是我们的内容这是我们的内容这是我们的内容这是我们的内容这是我们的内容这是我们的内容这是我们的内容这是我们的内容这是我们的内容这是我们的内容这是我们的内容这是我们的内容这是我们的内容这是我们的内容这是我们的内容这是我们的内容这是我们的内容这是我们的内容这是我们的内容这是我们的内容这是我们的内容这是我们的内容这是我们的内容这是我们的内容这是我们的内容这是我们的内容这是我们的内容这是我们的内容这是我们的内容这是我们的内容这是我们的内容这是我们的内容这是我们的内容这是我们的内容这是我们的内容这是我们的内容这是我们的内容这是我们的内容这是我们的内容这是我们的内容这是我们的内容", //文章内容
    comment_total_count: 200, //评论总数
    user_info: {
      nickname: "夜白", //发布人昵称
      avatar: "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1023235865,1560869099&fm=26&gp=0.jpg", //发布人头像
      sex: "男", //发布人性别
      openid: "dasdqw12212dwqdqdq"
    },
    comments: [{
      id: 1, //评论id
      comment_floor: 1, //评论楼层
      user_info: {
        name: "鹏飞", //评论人昵称
        avatar: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1305353222,2352820043&fm=26&gp=0.jpg", //评论人头像
        openid: "dasdqw12212dwqdqdq",
        sex: "男" //评论人性别
      },
      comment_time: "2020-10-24 18:22:22", //评论时间
      comment_content: "我是评论内容", //评论内容
      comment_like_count: 21, //评论点赞数

    }]
  },
  {
    id: 2,
    type: 1, //文章类型
    title: "置顶数据",
    create_time: "20天前",
    like_count: 20,
    share_count: 100,
    comments_count: 200,
    content: "这是我们的内容",
    user_info: {
      nickname: "夜白",
      openid: "dasdqw12212dwqdqdq",
      avatar: "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1023235865,1560869099&fm=26&gp=0.jpg"
    },
    comments: [{
      id: 1,
      comment_floor: 1,
      user_info: {
        name: "鹏飞",
        avatar: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1305353222,2352820043&fm=26&gp=0.jpg",
        openid: "dasdqw12212dwqdqdq",
        sex: "男"
      },
      comment_time: "2020-10-24 18:22:22",
      comment_content: "我是评论内容",
      comment_like_count: 21,
      comment_total_count: 200
    }]
  },
  {
    id: 3,
    type: 1, //文章类型
    title: "置顶数据",
    create_time: "20天前",
    like_count: 20,
    share_count: 100,
    comments_count: 200,
    content: "这是我们的内容",
    user_info: {
      nickname: "夜白",
      openid: "dasdqw12212dwqdqdq",
      avatar: "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1023235865,1560869099&fm=26&gp=0.jpg"
    },
    comments: [{
      id: 1,
      comment_floor: 1,
      user_info: {
        name: "鹏飞",
        openid: "dasdqw12212dwqdqdq",
        avatar: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1305353222,2352820043&fm=26&gp=0.jpg",
        sex: "男"
      },
      comment_time: "2020-10-24 18:22:22",
      comment_content: "我是评论内容",
      comment_like_count: 21,
      comment_total_count: 200
    }]
  },
  {
    id: 4,
    type: 1, //文章类型
    title: "置顶数据",
    create_time: "20天前",
    like_count: 20,
    share_count: 100,
    comments_count: 200,
    content: "这是我们的内容",
    user_info: {
      nickname: "夜白",
      openid: "dasdqw12212dwqdqdq",
      avatar: "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1023235865,1560869099&fm=26&gp=0.jpg"
    },
    comments: [{
      id: 1,
      comment_floor: 1,
      user_info: {
        name: "鹏飞",
        openid: "dasdqw12212dwqdqdq",
        avatar: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1305353222,2352820043&fm=26&gp=0.jpg",
        sex: "男"
      },
      comment_time: "2020-10-24 18:22:22",
      comment_content: "我是评论内容",
      comment_like_count: 21,
      comment_total_count: 200
    }]
  },
  {
    id: 5,
    type: 1, //文章类型
    title: "置顶数据",
    create_time: "20天前",
    like_count: 20,
    share_count: 100,
    comments_count: 200,
    content: "这是我们的内容",
    user_info: {
      nickname: "夜白",
      openid: "dasdqw12212dwqdqdq",
      avatar: "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1023235865,1560869099&fm=26&gp=0.jpg"
    },
    comments: [{
      id: 1,
      comment_floor: 1,
      user_info: {
        name: "鹏飞",
        openid: "dasdqw12212dwqdqdq",
        avatar: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1305353222,2352820043&fm=26&gp=0.jpg",
        sex: "男"
      },
      comment_time: "2020-10-24 18:22:22",
      comment_content: "我是评论内容",
      comment_like_count: 21,
      comment_total_count: 200
    }]
  },
  {
    id: 6,
    type: 1, //文章类型
    title: "置顶数据",
    create_time: "20天前",
    like_count: 20,
    share_count: 100,
    comments_count: 200,
    content: "这是我们的内容",
    user_info: {
      nickname: "夜白",
      openid: "dasdqw12212dwqdqdq",
      avatar: "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1023235865,1560869099&fm=26&gp=0.jpg"
    },
    comments: [{
      id: 1,
      comment_floor: 1,
      user_info: {
        name: "鹏飞",
        avatar: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1305353222,2352820043&fm=26&gp=0.jpg",
        openid: "dasdqw12212dwqdqdq",
        sex: "男"
      },
      comment_time: "2020-10-24 18:22:22",
      comment_content: "我是评论内容",
      comment_like_count: 21,
      comment_total_count: 200
    }]
  },
  {
    id: 7,
    type: 1, //文章类型
    title: "置顶数据",
    create_time: "20天前",
    like_count: 20,
    share_count: 100,
    comments_count: 200,
    content: "这是我们的内容",
    user_info: {
      nickname: "夜白",
      openid: "dasdqw12212dwqdqdq",
      avatar: "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1023235865,1560869099&fm=26&gp=0.jpg"
    },
    comments: [{
      id: 1,
      comment_floor: 1,
      user_info: {
        name: "鹏飞",
        openid: "dasdqw12212dwqdqdq",
        avatar: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1305353222,2352820043&fm=26&gp=0.jpg",
        sex: "男"
      },
      comment_time: "2020-10-24 18:22:22",
      comment_content: "我是评论内容",
      comment_like_count: 21,
      comment_total_count: 200
    }]
  },
  {
    id: 8,
    type: 1, //文章类型
    title: "置顶数据",
    create_time: "20天前",
    like_count: 20,
    share_count: 100,
    comments_count: 200,
    content: "这是我们的内容",
    user_info: {
      nickname: "夜白",
      openid: "dasdqw12212dwqdqdq",
      avatar: "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1023235865,1560869099&fm=26&gp=0.jpg"
    },
    comments: [{
      id: 1,
      comment_floor: 1,
      user_info: {
        name: "鹏飞",
        openid: "dasdqw12212dwqdqdq",
        avatar: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1305353222,2352820043&fm=26&gp=0.jpg",
        sex: "男"
      },
      comment_time: "2020-10-24 18:22:22",
      comment_content: "我是评论内容",
      comment_like_count: 21,
      comment_total_count: 200
    }]
  },
  {
    id: 9,
    type: 1, //文章类型
    title: "置顶数据",
    create_time: "20天前",
    like_count: 20,
    share_count: 100,
    comments_count: 200,
    content: "这是我们的内容",
    user_info: {
      nickname: "夜白",
      openid: "dasdqw12212dwqdqdq",
      avatar: "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1023235865,1560869099&fm=26&gp=0.jpg"
    },
    comments: [{
      id: 1,
      comment_floor: 1,
      user_info: {
        name: "鹏飞",
        openid: "dasdqw12212dwqdqdq",
        avatar: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1305353222,2352820043&fm=26&gp=0.jpg",
        sex: "男"
      },
      comment_time: "2020-10-24 18:22:22",
      comment_content: "我是评论内容",
      comment_like_count: 21,
      comment_total_count: 200
    }]
  },
]

// navibar列表
export const navibarList = [{
  title: "推荐",
  id: 1,
}, {
  title: "s",
  id: 1,
}]

// 排序
export const sortType = [{
    type: "按时间排序",
    id: 1
  },
  {
    type: "按热度排序",
    id: 2
  },
]

// banner列表
export const bannerList = [{
  src: "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2164724814,1401845036&fm=26&gp=0.jpg", //banner图
  id: 1, //banner id
  title: "我是banner图", //banner标题
  link: "https://www.baidu.com/" //banner跳转地址
}, {
  src: "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=136625674,2649587557&fm=26&gp=0.jpg", //banner图
  id: 1, //banner id
  title: "我是banner图", //banner标题
  link: "https://www.baidu.com/" //banner跳转地址
}, ]

// 我的帖子
export const myArticle = [{
    id: 1,
    type: 1, //文章类型
    title: "置顶数据", //问斩标题
    isVip: true, //是否置顶
    create_time: "20天前", //发布时间
    like_count: 20, //点赞数
    share_count: 100, //分享数
    comments_count: 200, //评论数
    content: "这是我们的内容", //文章内容
    comment_total_count: 200, //评论总数
    user_info: {
      nickname: "夜白", //发布人昵称
      openid: "dasdqw12212dwqdqdq",
      avatar: "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1023235865,1560869099&fm=26&gp=0.jpg", //发布人头像
      sex: "男", //发布人性别
    },
    comments: [{
      id: 1, //评论id
      comment_floor: 1, //评论楼层
      user_info: {
        name: "鹏飞", //评论人昵称
        openid: "dasdqw12212dwqdqdq",
        avatar: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1305353222,2352820043&fm=26&gp=0.jpg", //评论人头像
        sex: "男" //评论人性别
      },
      comment_time: "2020-10-24 18:22:22", //评论时间
      comment_content: "我是评论内容", //评论内容
      comment_like_count: 21, //评论点赞数

    }]
  },
  {
    id: 1,
    type: 1, //文章类型
    title: "置顶数据", //问斩标题
    isVip: true, //是否置顶
    create_time: "20天前", //发布时间
    like_count: 20, //点赞数
    share_count: 100, //分享数
    comments_count: 200, //评论数
    content: "这是我们的内容", //文章内容
    comment_total_count: 200, //评论总数
    user_info: {
      nickname: "夜白", //发布人昵称
      openid: "dasdqw12212dwqdqdq",
      avatar: "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1023235865,1560869099&fm=26&gp=0.jpg", //发布人头像
      sex: "男", //发布人性别
    },
    comments: [{
      id: 1, //评论id
      comment_floor: 1, //评论楼层
      user_info: {
        name: "鹏飞", //评论人昵称
        openid: "dasdqw12212dwqdqdq",
        avatar: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1305353222,2352820043&fm=26&gp=0.jpg", //评论人头像
        sex: "男" //评论人性别
      },
      comment_time: "2020-10-24 18:22:22", //评论时间
      comment_content: "我是评论内容", //评论内容
      comment_like_count: 21, //评论点赞数
    }]
  },
]