/*
Copyright 2022 vivo Communication Technology Co., Ltd.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 */
package com.alibaba.jvm.sandbox.repeater.plugin.redis;

import com.alibaba.jvm.sandbox.api.event.Event.Type;
import com.alibaba.jvm.sandbox.repeater.plugin.api.InvocationProcessor;
import com.alibaba.jvm.sandbox.repeater.plugin.core.impl.spi.AbstractInvokePluginAdapter;
import com.alibaba.jvm.sandbox.repeater.plugin.core.model.EnhanceModel;
import com.alibaba.jvm.sandbox.repeater.plugin.spi.InvokePlugin;
import com.google.common.collect.Lists;
import com.vivo.internet.moonbox.common.api.model.InvokeType;
import org.kohsuke.MetaInfServices;

import java.util.List;

/**
 * 只针对个别应用生效
 */
@MetaInfServices(InvokePlugin.class)
public class StringRedisPlugin extends AbstractInvokePluginAdapter {

    /**
     * 获取增强模型列表
     *
     * @return 增强模型列表
     */
    @Override
    protected List<EnhanceModel> getEnhanceModels() {
        EnhanceModel em = EnhanceModel.builder()
                .classPattern("org.springframework.data.redis.core.DefaultValueOperations")
                .methodPatterns(EnhanceModel.MethodPattern.transform("get","getAndSet","increment","decrement","append","multiGet","size"))
                .watchTypes(Type.BEFORE, Type.RETURN, Type.THROWS)
                .build();

        EnhanceModel em1 = EnhanceModel.builder()
                .classPattern("org.springframework.data.redis.core.DefaultHashOperations")
                .methodPatterns(EnhanceModel.MethodPattern.transform("get","hasKey","increment","decrement","append","keys","size","entries"))
                .watchTypes(Type.BEFORE, Type.RETURN, Type.THROWS)
                .build();

        return Lists.newArrayList(em,em1);
    }

    @Override
    protected InvocationProcessor getInvocationProcessor() {
        return new StringRedisProcessor(getType());
    }

    @Override
    public InvokeType getType() {
        return InvokeType.REDIS;
    }

    @Override
    public String identity() {
        return "redis";
    }

    @Override
    public boolean isEntrance() {
        return false;
    }

}
