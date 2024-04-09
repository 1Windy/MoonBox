/*
This code comes from the jvm-sandbox-repeater(link:https://github.com/alibaba/jvm-sandbox-repeater) project.
 */
package com.alibaba.jvm.sandbox.repeater.plugin.dubbo;

import com.alibaba.jvm.sandbox.api.event.Event;
import com.alibaba.jvm.sandbox.api.listener.EventListener;
import com.alibaba.jvm.sandbox.repeater.plugin.api.InvocationListener;
import com.alibaba.jvm.sandbox.repeater.plugin.api.InvocationProcessor;
import com.alibaba.jvm.sandbox.repeater.plugin.core.impl.spi.AbstractInvokePluginAdapter;
import com.alibaba.jvm.sandbox.repeater.plugin.core.model.EnhanceModel;
import com.alibaba.jvm.sandbox.repeater.plugin.spi.InvokePlugin;
import com.google.common.collect.Lists;
import com.vivo.internet.moonbox.common.api.model.InvokeType;
import org.kohsuke.MetaInfServices;

import java.util.List;

/**
 * {@link DubboConsumerPlugin} Apache dubbo consumer 插件
 * <p>
 * 拦截ConsumerContextFilter$ConsumerContextListenerr#onResponse行录制
 * 拦截ConsumerContextFilter#invoke进行MOCK
 * </p>
 *
 * @author zhaoyb1990
 */
@MetaInfServices(InvokePlugin.class)
public class DubboConsumerPlugin extends AbstractInvokePluginAdapter {

    @Override
    protected List<EnhanceModel> getEnhanceModels() {

        //Modifications Copyright 2022 vivo Communication Technology Co., Ltd.
        EnhanceModel onResponse = EnhanceModel.builder().classPattern("org.apache.dubbo.rpc.protocol.dubbo.filter.FutureFilter")
                .methodPatterns(EnhanceModel.MethodPattern.transform("onResponse"))
                .watchTypes(Event.Type.BEFORE, Event.Type.RETURN, Event.Type.THROWS)
                .build();
        /*
         * 为了支持dubbo2.7.3版本
         */
        EnhanceModel onResponseV1 = EnhanceModel.builder().classPattern("org.apache.dubbo.rpc.protocol.dubbo.filter.FutureFilter$FutureListener")
                .methodPatterns(EnhanceModel.MethodPattern.transform("onResponse"))
                .watchTypes(Event.Type.BEFORE, Event.Type.RETURN, Event.Type.THROWS)
                .build();
        EnhanceModel invoke = EnhanceModel.builder().classPattern("org.apache.dubbo.rpc.filter.ConsumerContextFilter")
                .methodPatterns(EnhanceModel.MethodPattern.transform("invoke"))
                .watchTypes(Event.Type.BEFORE, Event.Type.THROWS)
                .build();
        /**
         * com.alibaba.dubbo
         */
        EnhanceModel onResponse2 = EnhanceModel.builder().classPattern("com.alibaba.dubbo.rpc.protocol.dubbo.filter.FutureFilter")
                .methodPatterns(EnhanceModel.MethodPattern.transform("onComplete"))
                .watchTypes(Event.Type.BEFORE, Event.Type.RETURN, Event.Type.THROWS)
                .build();
        EnhanceModel invoke2 = EnhanceModel.builder().classPattern("com.alibaba.dubbo.rpc.filter.ConsumerContextFilter")
                .methodPatterns(EnhanceModel.MethodPattern.transform("invoke"))
                .watchTypes(Event.Type.BEFORE, Event.Type.THROWS)
                .build();
        return Lists.newArrayList(onResponse, onResponseV1, onResponse2, invoke, invoke2);
    }

    @Override
    protected InvocationProcessor getInvocationProcessor() {
        return new DubboConsumerInvocationProcessor(getType());
    }

    @Override
    public InvokeType getType() {
        return InvokeType.DUBBO;
    }

    @Override
    public String identity() {
        return "dubbo-consumer";
    }

    @Override
    public boolean isEntrance() {
        return false;
    }

    @Override
    protected EventListener getEventListener(InvocationListener listener) {
        return new DubboConsumerEventListener(getType(), isEntrance(), listener, getInvocationProcessor());
    }
}
