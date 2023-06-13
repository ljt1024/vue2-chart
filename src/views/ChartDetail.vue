<template>
  <div class="container">
    <div class="run-btn">
      <el-button type="primary" size="mini" @click="run">运行</el-button>
      <el-button type="primary" size="mini" @click="back">返回</el-button>
    </div>
    <div class="content">
      <div id="monaco-editor-box">
        <div id="monaco-editor" ref="monaco"></div>
      </div>
      <div class="render-content">
        <VueEcharts :option="options" :loading="loading"></VueEcharts>
      </div>
    </div>
  </div>
</template>

<script>
    import codeList from "../mock/chartData/code";
    import * as monaco from "monaco-editor/esm/vs/editor/edcore.main"; // 引入monaco-editor
    export default {
        name: "ChartDetail",
        data() {
            return {
                editor: null,
                options: {},
                loading: false,
                editorOptions: {
                  selectOnLineNumbers: true,
                  roundedSelection: false,
                  readOnly: false, // 只读
                  cursorStyle: "line", //光标样式
                  automaticLayout: true, //自动布局
                  glyphMargin: true, //字形边缘
                  disableLayerHinting: true, // 等宽优化
                  useTabStops: false,
                  fontSize: 28, //字体大小
                  autoIndent: true, //自动布局
                  quickSuggestionsDelay: 500, //代码提示延时
                  language: "javascript", //语言
                },
            };
        },
      mounted() {
          this.initEditor();
          this.run()
      },
      methods: {
          initEditor() {
                  // options配置项默认存在
                  let code = 'const options = {}';
                  const cid = this.$route.query.cid
                  let result = codeList.filter(item=> item.id === cid / 1)
                  // 初始化编辑器，确保dom已经渲染
                  this.editor = monaco.editor.create(this.$refs.monaco, {
                      value: result[0]?.code || code, // 编辑器初始显示内容
                      language: "javascript", // 支持语言
                      theme: "vs-dark", // 主题
                      selectOnLineNumbers: true, //显示行号
                      editorOptions: this.editorOptions,// 编辑器配置
                      noSemanticValidation: true,// 不显示语法错误
                  });
                  //监测窗口变化
                  window.addEventListener("resize", ()=> {
                      this.editor.layout();
                  });
              },
              run() {
                  this.loading = true
                  let code = this.editor.getValue()
                  try {
                      const runCode = new Function(`${code};return options || '';`)
                      this.options = runCode()
                  } catch (e) {
                      this.$message.error(`配置项错误:${e}`)
                      console.log(e)
                  }
                  setTimeout(()=> {
                     this.loading = false
                  }, 500)
              },
              back() {
                  this.$router.back()
              }
          },
    };

</script>

<style scoped lang="scss">
  .container {
    overflow: hidden;
    height: calc(100% - 20px);
    width: calc(100% - 20px);
    padding: 10px;
    .run-btn {
      margin-bottom: 10px;
      display: flex;
    }
    .content {
      display: flex;
    }
  }

  #monaco-editor-box {
    height: 100%;
    width: calc(50% - 20px);

    #monaco-editor {
      height: calc(100vh - 60px);
    }

  }

  .render-content {
    margin-left: 20px;
    width: calc(50% - 40px);
    height: calc(100vh - 60px);
  }
</style>
