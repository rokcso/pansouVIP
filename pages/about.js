import Image from "next/image";
import CustomHead from "../components/customHead";
import Layout from "../components/layout";
import styles from "./about.module.css";

export default function About() {
  return (
    <>
      <CustomHead />
      <Layout>
        <div className={styles.main}>
          <p>
            🔴 <b>注意事项：</b>
            本站是网盘搜索工具<b>导航网站</b>，本身并不提供网盘资源搜索服务。
          </p>
          <br />
          <div>
            <h2>常见问题</h2>
            <div>
              <h3>搜索不到某某资源？</h3>
              <p>
                由于版权原因，直接搜索某某资源的完全匹配的关键词可能会搜索不到任何结果，这时只需要调整一下搜索关键词，比如搜索「庆余年」可能会搜索不到任何结果，但是搜索「庆余年电视剧」则大概率会搜索到结果。
              </p>
            </div>
          </div>
          <br />
          <div>
            <h2>问题反馈</h2>
            <p>
              如果你有任何问题咨询、建议反馈、点赞支持都可以 👉{" "}
              <a
                href="https://cvlr2wiufrz.feishu.cn/share/base/form/shrcnHckduwGEEFk2Y3yR04K3Ic"
                title="留言问卷链接"
                target="_blank"
              >
                点击这里
              </a>{" "}
              👈 给我留言。
            </p>
          </div>
          <br />
          <div>
            <h2>工具投稿</h2>
            <p>
              如果你也有好用的网盘搜索工具，欢迎 👉{" "}
              <a
                href="https://cvlr2wiufrz.feishu.cn/share/base/form/shrcnAPSuz3I1DJ2z722woXjHnc"
                title="网盘搜索工具投稿问卷链接"
                target="_blank"
              >
                投稿
              </a>{" "}
              👈 ，我会在测试通过之后进行收录。
            </p>
            <p>
              🙂 注意：
              <a href="/" title="盘搜 VIP 首页">
                <b>盘搜 VIP</b>
              </a>
              &nbsp;仅收录网盘搜索工具或其他网盘相关工具。
            </p>
          </div>
          <br />
          <div>
            <h2>关于本站</h2>
            <p>
              本站主要为个人自用，顺手将自己使用的工具整理发布，承诺所有工具绝对没有付费收录或推荐。
            </p>
            <br />
            <p>你还可以关注我的公众号，会不定期分享更多实用资源。👇</p>
            <br />
            <Image
              src="/img/wxgzh.jpg"
              alt="空字节 微信公众号 二维码"
              width={400}
              height={150}
            />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Layout>
    </>
  );
}
