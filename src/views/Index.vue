<template>
    <div class="index">
        <div class="navbar-wrapper">
            <ul class="ul">
                <li class="li" v-for="(item, index) in typeItems" :key="index">
                    <a v-bind:href="item.href" v-if="item.href !== ''">
                        {{ item.label }}
                    </a>
                </li>
            </ul>
        </div>
        <div class="index-wrapper">
            <el-carousel
                class="carousel"
                height="395px"
                direction="vertical"
                :autoplay="true"
                :loop="true"
            >
                <el-carousel-item
                    v-for="(item, index) in carouselItems"
                    :key="index"
                >
                    <img style="width: 100%; height: 100%" :src="item" />
                </el-carousel-item>
            </el-carousel>
            <div class="row-1">
                <div class="col-1">
                    <div class="header">
                        <i class="el-icon-bell">公告板</i>
                    </div>
                    <div class="text">
                        <div>尊敬的传智书城用户：</div>
                        <div style="margin-top: 10px">
                            为了让大家有更高的购物体验，3月25日起，当日达业务关小黑屋回炉升级！具体开放时间请留意公告，感谢大家的支持与理解，祝大家购物愉快！
                        </div>
                        <div style="float: right; margin-top: 10px">
                            3月10日，传智播客 传智书城系统管理部
                        </div>
                    </div>
                </div>
                <div class="col-2">
                    <div class="content">
                        <book-fiche
                            v-for="(item, index) in hotBooks"
                            :data="item"
                            :key="index"
                        ></book-fiche>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'index',
    data() {
        return {
            carouselItems: [
                'https://owl-town.oss-cn-chengdu.aliyuncs.com/static/slideshow/2021032619353510220.jpg',
                'https://owl-town.oss-cn-chengdu.aliyuncs.com/static/slideshow/20210326193508509.jpg',
                'https://owl-town.oss-cn-chengdu.aliyuncs.com/static/slideshow/2021032611362390127.jpg'
            ],
            // 获取数据库中的数据
            hotBooks: [
                {
                    id: 1,
                    type: 'hot',
                    preview: 'http://img3m0.ddimg.cn/13/17/22722790-1_u_31.jpg',
                    href: '/book/1',
                    title: 'JavaScript权威指南',
                    authors: ['(美)David Flanagan（弗兰纳根）'],
                    price: 90.4
                },
                {
                    id: 2,
                    type: 'hot',
                    preview: 'http://img3m0.ddimg.cn/80/13/23214590-1_w_9.jpg',
                    href: '/book/2',
                    title: '高性能MySQL',
                    authors: ['(美)施瓦茨', '(美)扎伊采夫', '(美)特卡琴科'],
                    price: 22.22
                },
                {
                    id: 3,
                    type: 'hot',
                    preview: 'http://img3m5.ddimg.cn/55/8/28495225-1_w_7.jpg',
                    href: '/book/3',
                    title: '深入理解Java虚拟机',
                    authors: ['周志明'],
                    price: 22.22
                }
            ],
            typeItems: [
                {
                    label: '文学',
                    href: '#'
                },
                {
                    label: '生活',
                    href: '#'
                },
                {
                    label: '计算机',
                    href: '#'
                },
                {
                    label: '外语',
                    href: '#'
                },
                {
                    label: '经营',
                    href: '#'
                },
                {
                    label: '励志',
                    href: '#'
                },
                {
                    label: '社科',
                    href: '#'
                },
                {
                    label: '学术',
                    href: '#'
                },
                {
                    label: '少儿',
                    href: '#'
                },
                {
                    label: '艺术',
                    href: '#'
                },
                {
                    label: '原版',
                    href: '#'
                },
                {
                    label: '科技',
                    href: '#'
                },
                {
                    label: '考试',
                    href: '#'
                },
                {
                    label: '生活百科',
                    href: '#'
                },
                {
                    label: '全部商品',
                    href: '#'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.index {
    .navbar-wrapper {
        background: rgb(11, 162, 154);
        margin: 25px 0;
        padding: 10px 15%;

        .ul {
            margin: 0;
            padding: 0;
            display: flex;
            list-style: none;
            justify-content: space-between;

            .li {
                margin: 0 10px;

                a {
                    color: white;
                    font-size: 17px;
                }
            }

            .li:first-child {
                margin: 0 10px 0 0;
            }

            .li:last-child {
                margin: 0 0 0 10px;
            }
        }
    }

    .index-wrapper {
        margin: 1% 15%;

        .carousel {
            margin-bottom: 20px;
        }

        .row-1 {
            display: flex;
            height: 270px;

            .col-1 {
                width: 50%;
                font-size: 15px;
                margin-right: 20px;

                .header {
                    font-size: 20px;
                }

                .text {
                    margin-top: 20px;
                }
            }

            .col-2 {
                width: 50%;
                margin-left: 15px;

                .content {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                }
            }
        }
    }
}
</style>
